const express = require("express");
const router = express.Router();
const secretKey = process.env.secretKey;
const stripe = require("stripe")(secretKey);
const uuid = require("uuid").v4;

const db = require("../database/connection");
const User = require("../models/userSchema");
const Cars = require("../models/carSchema");
const CarPic = require("../models/carPicSchema");

// car details
router.get("/cars/details", (req, res) => {
  const { carNumber, apiKey } = req.query;
  if (!(apiKey === "test5")) {
    return res.status(201).json({
      message: "please check api key",
    });
  }
  Cars.findOne({ carNumber })
    .then((data) => {
      if (data === null) {
        return res.status(201).json({ message: "car number does not exist" });
      }
      return res.status(201).json(data);
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "please check car number", error: error });
    });
});

// cars pic and price value
router.get("/car/pic", (req, res) => {
  if (Object.keys(req.query).length === 0) {
    CarPic.find({})
      .then((data) => {
        if (data === null) {
          return res.status(201).json({ message: "no data exist" });
        }
        return res.status(201).json(data);
      })
      .catch((error) => {
        return res.status(500).json({ message: "please check route", error });
      });
  }
  const { company, apiKey, model } = req.query;
  if (!(apiKey === "test5")) {
    return res.status(201).json({
      message: "please check api key",
    });
  }
  if (company && model) {
    CarPic.findOne({ $and: [{ company }, { model }] })
      .then((data) => {
        if (data === null) {
          return res.status(201).json({ message: "car number does not exist" });
        }
        return res.status(201).json(data);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ message: "please check company name", error: error });
      });
  }
  CarPic.find({ $or: [{ company }, { model }] })
    .then((data) => {
      if (data === null) {
        return res.status(201).json({ message: "car number does not exist" });
      }
      return res.status(201).json(data);
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "please check company name", error: error });
    });
});

// user registration
router.post("/user/register", (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: "please fill the feild properly" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "email already exist" });
      }
      const user = new User({ name, email, phone, password });
      user
        .save()
        .then(() => {
          return res
            .status(201)
            .json({ message: "user registered successfuly" });
        })
        .catch(() => {
          return res.status(500).json({ error: "failed to register" });
        });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
});

// payment checkout
router.post("/checkout", (req, res) => {
  // console.log(req.body);
  let error;
  let status;
  const key = uuid();
  // try {
  //   const { token, product } = req.body;
  //   const customer = await stripe.customer.create({
  //     email: token.email,
  //     source: token.id,
  //   });

  //   const charge = await stripe.charges.create(
  //     {
  //       amount: product.price,
  //       currency: "inr",
  //       customer: customer.id,
  //       receipt_email: token.email,
  //       description: `Purchased the ${product.name}`,
  //       shipping: {
  //         name: token.card.name,
  //         address: {
  //           line1: token.card.address_line1,
  //           line2: token.card.address_line2,
  //           city: token.card.address_city,
  //           country: token.card.address_country,
  //           postal_code: token.card.address_zip,
  //         },
  //       },
  //     },
  //     {
  //       key,
  //     }
  //   );
  //   console.log("Charge:", { charge });
  //   status = "success";
  // } catch (error) {
  //   console.error("Error:", error);
  //   status = "failure";
  // }
  const { token, product } = req.body;
  stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      // have access to the customer object
      return stripe.invoiceItems
        .create({
          customer: customer.id, // set the customer id
          amount: product.price * 100, // 25
          currency: "usd",
          description: "One-time setup fee",
        })
        .then((invoiceItem) => {
          return stripe.invoices.create({
            collection_method: "send_invoice",
            customer: invoiceItem.customer,
          });
        })
        .then((invoice) => {
          // New invoice created on a new customer
          console.log(invoice);
          status = "success";
        })
        .catch((err) => {
          // Deal with an error
          status = "failure";
        });
    });
  // stripe.customers
  //   .create({
  //     email: token.email,
  //     source: token.id,
  //   })
  //   .then((customer) =>
  //     stripe.charges.create(
  //       {
  //         amount: product.price,
  //         currency: "inr",
  //         customer: customer.id,
  //         receipt_email: token.email,
  //         description: `Purchased the ${product.name}`,
  //         shipping: {
  //           name: token.card.name,
  //           address: {
  //             line1: token.card.address_line1,
  //             line2: token.card.address_line2,
  //             city: token.card.address_city,
  //             country: token.card.address_country,
  //             postal_code: token.card.address_zip,
  //           },
  //         },
  //       },
  //       {
  //         key,
  //       }
  //     )
  //   )
  //   .then(() => {
  //     status = "success";
  //   })
  //   .catch(() => {
  //     status = "failure";
  //   });
  return res.json({ status });
});

module.exports = router;

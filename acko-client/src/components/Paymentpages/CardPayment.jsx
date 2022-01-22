import React from "react";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import "./cardPayment.css";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardPayment() {
  const [product, setProduct] = React.useState({
    name: "Vikas",
    price: 200,
    discription: "This is sample payment",
  });

  toast.configure();

  const handeToken = async (token) => {
    const res = await axios.post(`http://localhost:5000/checkout`, {
      token,
      product,
    });
    console.log(res);
    if (res.status === 200) {
      toast("Success! Payment is completed", { type: "success" });
    } else {
      toast("Failed! Payment is not completed", { type: "error" });
    }
  };

  return (
    <div className="card-payment-container">
      <div className="payment-type-heading">
        <h4>Pay using Credit or Debit Card</h4>
      </div>
      <div className="payment-type-form-wrapper">
        <form className="payment-type-form">
          <div className="payment-type-form-section1">
            <label className="lable-color-light">Enter Your Card Number</label>
            <div className="card-number-input-box">
              <input
                type="text"
                placeholder="Enter card number here"
                required
                autoComplete="cc-number"
              />
              <CreditCardOutlinedIcon
                style={{
                  fill: "grey",
                  fontSize: "35px",
                }}
              />
            </div>
          </div>
          <div className="payment-type-form-section2">
            <div className="payment-type-form-section2-subsec">
              <label className="lable-color-light">Expiry Date</label>
              <div className="card-number-input-box">
                <input
                  type="text"
                  placeholder="MM / YY"
                  required
                  autoComplete="cc-exp"
                />
              </div>
              {/* <input type="text" placeholder="MM / YY" /> */}
            </div>
            <div className="payment-type-form-section2-subsec">
              <label className="lable-color-light">CVV</label>
              <div className="card-number-input-box right-padding">
                <input
                  type="password"
                  placeholder="CVV"
                  required
                  autoComplete="cc-cvv"
                />
                <HelpOutlinedIcon
                  style={{
                    fill: "rgb(201, 201, 201)",
                    fontSize: "20px",
                  }}
                />
              </div>
              {/* <input type="password" placeholder="CVV" /> */}
            </div>
          </div>
          <div className="payment-type-form-section3">
            <input
              className="payment-type-form-checkbox"
              style={{
                width: "14px",
                height: "14px",
              }}
              type="checkbox"
            />
            <label className="lable-color-light">
              Securely save your card details
            </label>
          </div>
          <div className="payment-type-form-section4">
            {/* <input type="submit" value="Pay Now" /> */}
            <StripeCheckout
              stripeKey="pk_test_51KKLohSB4oh1LzAsphsNGkZXyIWNuyRZq6uS5jKKNYhLSxx9iG6UJzCy7djPOTE7qEuyCK7xtHkN5NPk3cSfmo5q00lG6IjAeW"
              token={handeToken}
              amount={product.price * 100}
              name={product.name}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

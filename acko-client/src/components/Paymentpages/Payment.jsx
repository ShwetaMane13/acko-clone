import React from "react";
import PaymentTypes from "./PaymentTypes";
// import CardPayment from "./CardPayment";
import BilingSummery from "./BilingSummery";
import UpiPayment from "./UpiPayment";
import NetBankingPayment from "./NetBankingPayment";
import EmiPayment from "./EmiPayment";
import Header from "../Headers/Hearder";
import "./payment.css";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// const stripePromise = loadStripe(
//   "pk_test_51KKLohSB4oh1LzAsphsNGkZXyIWNuyRZq6uS5jKKNYhLSxx9iG6UJzCy7djPOTE7qEuyCK7xtHkN5NPk3cSfmo5q00lG6IjAeW"
// );

// temp payment page strt
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// temp payment page end

export default function Payment() {
  const [paymentType, setPaymentType] = React.useState("cardPayment");
  // temp payment page
  let carnumber = JSON.parse(localStorage.getItem("carnumber")) || 0;
  let details = JSON.parse(localStorage.getItem("carDetails")) || 0;
  let mobileno = details.mobile || 0;
  let cartype = JSON.parse(localStorage.getItem("carType")) || 0;
  let model = cartype.carName || 0;
  let fuel = cartype.fuelType || 0;
  let total = JSON.parse(localStorage.getItem("total")) || 0;
  let pincode = JSON.parse(localStorage.getItem("pincode")) || 0;
  let year = JSON.parse(localStorage.getItem("year")) || 0;
  let month = JSON.parse(localStorage.getItem("month")) || 0;
  const [product, setProduct] = React.useState({
    name: "Vikas",
    price: 200,
    discription: "This is sample payment",
  });

  toast.configure();

  const handeToken = async (token) => {
    const res = await axios.post(`http://localhost:5000/payment/checkout`, {
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
  // temp payment page end
  return (
    <>
      <Header />
      <div className="payment-page-wrapper">
        {/* <Elements stripe={stripePromise}></Elements> */}
        <PaymentTypes setPaymentType={setPaymentType} />
        {/* temp payment page start*/}
        {paymentType === "cardPayment" ? (
          <div className="stripe-payment-wrapper">
            <h4>Pay using Credit or Debit Card</h4>
            <StripeCheckout
              style={{ margin: "30px 0" }}
              stripeKey="pk_test_51KKLohSB4oh1LzAsphsNGkZXyIWNuyRZq6uS5jKKNYhLSxx9iG6UJzCy7djPOTE7qEuyCK7xtHkN5NPk3cSfmo5q00lG6IjAeW"
              token={handeToken}
              amount={(total + (total * 18) / 100) * 100}
              name={product.name}
            />
          </div>
        ) : paymentType === "upiPayment" ? (
          <UpiPayment />
        ) : paymentType === "netbankingPayment" ? (
          <NetBankingPayment />
        ) : paymentType === "emiPayment" ? (
          <EmiPayment />
        ) : (
          <p>Something went wrong</p>
        )}
        {/* temp payment page end */}
        {/* <CardPayment /> */}
        {/* <UpiPayment /> */}
        {/* <NetBankingPayment /> */}
        {/* <EmiPayment /> */}
        <BilingSummery />
      </div>
    </>
  );
}

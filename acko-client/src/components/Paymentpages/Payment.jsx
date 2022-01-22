import React from "react";
import PaymentTypes from "./PaymentTypes";
import CardPayment from "./CardPayment";
import BilingSummery from "./BilingSummery";
// import UpiPayment from "./UpiPayment";
// import NetBankingPayment from "./NetBankingPayment";
// import EmiPayment from "./EmiPayment";
import "./payment.css";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// const stripePromise = loadStripe(
//   "pk_test_51KKLohSB4oh1LzAsphsNGkZXyIWNuyRZq6uS5jKKNYhLSxx9iG6UJzCy7djPOTE7qEuyCK7xtHkN5NPk3cSfmo5q00lG6IjAeW"
// );

export default function Payment() {
  return (
    <div className="payment-page-wrapper">
      {/* <Elements stripe={stripePromise}></Elements> */}
      <PaymentTypes />
      <CardPayment />
      {/* <UpiPayment /> */}
      {/* <NetBankingPayment /> */}
      {/* <EmiPayment /> */}
      <BilingSummery />
    </div>
  );
}

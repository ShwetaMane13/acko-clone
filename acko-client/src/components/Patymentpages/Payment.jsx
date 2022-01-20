import React from "react";
import PaymentTypes from "./PaymentTypes";
// import CardPayment from "./CardPayment";
import BilingSummery from "./BilingSummery";
// import UpiPayment from "./UpiPayment";
import NetBankingPayment from "./NetBankingPayment";
// import EmiPayment from "./EmiPayment";

import "./payment.css";

export default function Payment() {
  return (
    <div className="payment-page-wrapper">
      <PaymentTypes />
      {/* <CardPayment /> */}
      {/* <UpiPayment /> */}
      <NetBankingPayment />
      {/* <EmiPayment /> */}
      <BilingSummery />
    </div>
  );
}

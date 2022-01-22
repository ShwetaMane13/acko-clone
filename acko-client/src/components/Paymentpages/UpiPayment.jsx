import React from "react";
import "./upiPayment.css";

export default function UpiPayment() {
  return (
    <div className="upi-payment-container">
      <div className="upi-payment-heading">
        <h3>Scan QR and Pay</h3>
        <p>
          Scan the QR using any UPI app on your mobile phone like PhonePe,
          Paytm, GooglePay, BHIM, etc
        </p>
      </div>
      <div className="upi-payment-qr-button-wrapper">
        <button className="upi-payment-qr-button">Generate QR Code</button>
      </div>
      <div className="upi-payment-subheading">
        <h3>Enter VPA and Pay</h3>
      </div>
      <div className="upi-payment-vpa-wrapper">
        <label>Enter your UPI ID</label>
        <input type="text" placeholder="e.g vsrathod@upi" />
        <p>A collect request will be sent to this UPI ID</p>
      </div>
      <div className="upi-payment-pay-now-button-wrapper">
        <button className="upi-payment-pay-now-button">Pay Now</button>
      </div>
    </div>
  );
}

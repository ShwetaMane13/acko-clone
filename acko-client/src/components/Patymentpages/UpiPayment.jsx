import React from "react";
import "./upiPayment.css";

export default function UpiPayment() {
  return (
    <div className="upi-payment-container">
      <div>
        <h4>Scan QR and Pay</h4>
        <p>
          Scan the QR using any UPI app on your mobile phone like PhonePe,
          Paytm, GooglePay, BHIM, etc
        </p>
      </div>
      <div>
        <button>Generate QR COde</button>
      </div>
      <div>
        <p>Enter VPA and Pay</p>
      </div>
      <div>
        <label>Enter your UPI ID</label>
        <input type="text" placeholder="e.g vsrathod@upi" />
        <p>A collect request will be sent to this UPI ID</p>
      </div>
      <div>
        <button>Pay Now</button>
      </div>
    </div>
  );
}

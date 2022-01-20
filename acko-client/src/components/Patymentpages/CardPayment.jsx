import React from "react";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import "./cardPayment.css";

export default function CardPayment() {
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
                autocomplete="cc-number"
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
                  autocomplete="cc-exp"
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
                  autocomplete="cc-cvv"
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
            <input type="submit" value="Pay Now" />
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import juspay from "./assets/images/juspay.svg";

import "./paymentTypes.css";

export default function PaymentTypes() {
  return (
    <div className="payment-wrapper">
      <div className="payment-options">
        <div className="payment-option-box">
          <CreditCardOutlinedIcon
            style={{ fill: "#5A68E7", fontSize: "26px" }}
          />
          <p>Credit / Debit Card</p>
        </div>
        <div className="payment-option-box">
          <CreditCardOutlinedIcon
            style={{ fill: "#5A68E7", fontSize: "26px" }}
          />
          <p>UPI</p>
        </div>
        <div className="payment-option-box">
          <AccountBalanceOutlinedIcon
            style={{ fill: "#5A68E7", fontSize: "26px" }}
          />
          <p>Netbanking</p>
        </div>
        <div className="payment-option-box">
          <div className="payment-circle-box">
            <PercentOutlinedIcon
              style={{ fill: "#5A68E7", fontSize: "18px" }}
            />
          </div>
          <p>EMI</p>
        </div>
      </div>
      <div className="payment-option-poweredby">
        <p className="light-text">Powered by</p>
        <img src={juspay} alt="juspay logo" />
      </div>
    </div>
  );
}

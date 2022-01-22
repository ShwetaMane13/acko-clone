import React from "react";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./emiPayment.css";

export default function EmiPayment() {
  return (
    <div className="emi-payment-container">
      <div className="emi-payment-heading">
        <h3>Pay in EMI</h3>
      </div>
      <div className="emi-payment-button-wrapper">
        <button className="emi-payment-button">
          <div>
            <CreditCardOutlinedIcon
              style={{ fill: "#5A68E7", fontSize: "36px" }}
            />
            <p>
              <b>Credit Card EMI</b>
            </p>
          </div>
          <ArrowForwardIosOutlinedIcon
            style={{ fill: "#5A68E7", fontSize: "14px" }}
          />
        </button>
      </div>
    </div>
  );
}

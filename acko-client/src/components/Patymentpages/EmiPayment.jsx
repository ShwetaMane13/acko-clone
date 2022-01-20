import React from "react";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./emiPayment.css";

export default function EmiPayment() {
  return (
    <div className="emi-payment-container">
      <div>
        <h4>Pay in EMI</h4>
      </div>
      <div>
        <button>
          <CreditCardOutlinedIcon
            style={{ fill: "#5A68E7", fontSize: "36px" }}
          />
          <p>Credit Card EMI</p>
          <ArrowForwardIosOutlinedIcon
            style={{ fill: "#5A68E7", fontSize: "14px" }}
          />
        </button>
      </div>
    </div>
  );
}

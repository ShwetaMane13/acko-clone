import React from "react";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import "./bilingSummery.css";

export default function BilingSummery() {
  return (
    <div className="billing-summery-container">
      <div className="billing-summery-section1">
        <p className="font-size-14">Policy update</p>
        <p className="font-size-12">Honda City 1.5 V</p>
      </div>
      <hr />
      <div className="billing-summery-section2 font-size-12">
        <div className="billing-summery-section2-subsec1">
          <p>Net Premium</p>
          <p>GST</p>
        </div>
        <div className="billing-summery-section2-subsec2">
          <div className="rupee-symbol-alighn">
            <CurrencyRupeeOutlinedIcon
              fontSize="small"
              style={{ fontSize: "12px" }}
            />
            <p>20115</p>
          </div>
          <div className="rupee-symbol-alighn">
            <CurrencyRupeeOutlinedIcon
              fontSize="small"
              style={{ fontSize: "12px" }}
            />
            <p>3621</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="billing-summery-section3">
        <p>Total</p>
        <div className="rupee-symbol-alighn">
          <CurrencyRupeeOutlinedIcon
            fontSize="small"
            style={{ fontSize: "16px" }}
          />
          <p>23432</p>
        </div>
      </div>
    </div>
  );
}

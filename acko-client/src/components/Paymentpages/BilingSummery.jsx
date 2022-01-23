import React from "react";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import "./bilingSummery.css";

export default function BilingSummery() {
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
  return (
    <div className="billing-summery-container">
      <div className="billing-summery-section1">
        <p className="font-size-14">Policy update</p>
        <p className="font-size-12">{model}</p>
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
            <p>{total}</p>
          </div>
          <div className="rupee-symbol-alighn">
            <CurrencyRupeeOutlinedIcon
              fontSize="small"
              style={{ fontSize: "12px" }}
            />
            <p>{(total * 18) / 100}</p>
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
          <p>{total + (total * 18) / 100}</p>
        </div>
      </div>
    </div>
  );
}

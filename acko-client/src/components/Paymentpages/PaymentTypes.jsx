import React from "react";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import juspay from "./assets/images/juspay.svg";

import "./paymentTypes.css";

export default function PaymentTypes({ setPaymentType }) {
  const [colorState, setColorState] = React.useState(1);
  return (
    <div className="payment-wrapper">
      <div className="payment-options">
        {colorState === 1 ? (
          <div
            className="payment-option-box"
            style={{ backgroundColor: "rgb(214, 214, 214)" }}
          >
            <CreditCardOutlinedIcon
              style={{ fill: "#5A68E7", fontSize: "26px" }}
            />
            <p>Credit / Debit Card</p>
          </div>
        ) : (
          <div
            className="payment-option-box"
            onClick={() => {
              setColorState(1);
              setPaymentType("cardPayment");
            }}
          >
            <CreditCardOutlinedIcon
              style={{ fill: "#5A68E7", fontSize: "26px" }}
            />
            <p>Credit / Debit Card</p>
          </div>
        )}
        {colorState === 2 ? (
          <div
            className="payment-option-box"
            style={{ backgroundColor: "rgb(214, 214, 214)" }}
          >
            <CreditCardOutlinedIcon
              style={{ fill: "#5A68E7", fontSize: "26px" }}
            />
            <p>UPI</p>
          </div>
        ) : (
          <div
            className="payment-option-box"
            onClick={() => {
              setColorState(2);
              setPaymentType("upiPayment");
            }}
          >
            <CreditCardOutlinedIcon
              style={{ fill: "#5A68E7", fontSize: "26px" }}
            />
            <p>UPI</p>
          </div>
        )}
        {colorState === 3 ? (
          <div
            className="payment-option-box"
            style={{ backgroundColor: "rgb(214, 214, 214)" }}
          >
            <AccountBalanceOutlinedIcon
              style={{ fill: "#5A68E7", fontSize: "26px" }}
            />
            <p>Netbanking</p>
          </div>
        ) : (
          <div
            className="payment-option-box"
            onClick={() => {
              setColorState(3);
              setPaymentType("netbankingPayment");
            }}
          >
            <AccountBalanceOutlinedIcon
              style={{ fill: "#5A68E7", fontSize: "26px" }}
            />
            <p>Netbanking</p>
          </div>
        )}
        {colorState === 4 ? (
          <div
            className="payment-option-box"
            style={{ backgroundColor: "rgb(214, 214, 214)" }}
          >
            <div className="payment-circle-box">
              <PercentOutlinedIcon
                style={{ fill: "#5A68E7", fontSize: "18px" }}
              />
            </div>
            <p>EMI</p>
          </div>
        ) : (
          <div
            className="payment-option-box"
            onClick={() => {
              setColorState(4);
              setPaymentType("emiPayment");
            }}
          >
            <div className="payment-circle-box">
              <PercentOutlinedIcon
                style={{ fill: "#5A68E7", fontSize: "18px" }}
              />
            </div>
            <p>EMI</p>
          </div>
        )}
      </div>
      <div className="payment-option-poweredby">
        <p className="light-text">Powered by</p>
        <img src={juspay} alt="juspay logo" />
      </div>
    </div>
  );
}

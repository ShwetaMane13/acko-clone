import React from "react";
import "./netBankingPayment.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import hdfc from "./assets/images/hdfc_bank.png";
import axis from "./assets/images/axis_bank_607153.png";
import canara from "./assets/images/canara_bank_508532.png";
import kotak from "./assets/images/kotak_bank_607420.png";

import airtel from "./assets/images/airtel_bank_990288.png";
import boi from "./assets/images/boi_bank_508505.png";
import bom from "./assets/images/bom_bank_607387.png";
import cbi from "./assets/images/cbi_bank_607115.png";
import dena from "./assets/images/dena_bank_508547.png";
import icic from "./assets/images/icic_bank_508534.png";
import indian from "./assets/images/indian_bank_607105.png";
import pnb from "./assets/images/pnb_bank_508568.png";
import sbi from "./assets/images/sbi_bank_508548.png";
import uco from "./assets/images/uco_bank_607066.png";

export default function NetBankingPayment() {
  return (
    <div className="netbanking-payment-container">
      <div className="netbanking-payment-heading">
        <h4>Pay using Netbanking</h4>
      </div>
      <div className="netbanking-payment-options">
        <div className="netbanking-payment-type">
          <img src={hdfc} alt="Hdfc logo" />
          <p>HDFC</p>
        </div>
        <div className="netbanking-payment-type">
          <img src={axis} alt="Axis logo" />
          <p>Axis</p>
        </div>
        <div className="netbanking-payment-type">
          <img src={canara} alt="Canara logo" />
          <p>Canara</p>
        </div>
        <div className="netbanking-payment-type">
          <img src={kotak} alt="Kotak logo" />
          <p>Kotak</p>
        </div>
      </div>
      <div className="netbanking-payment-search">
        <div className="netbanking-payment-search-wrapper">
          <SearchOutlinedIcon style={{ fill: "grey", fontSize: "25px" }} />
          <input type="text" placeholder="Search banks" />
        </div>
      </div>
      <div className="netbanking-payment-bank-list">
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={airtel} alt="Airtel Payment Bank logo" />
            <p>Airtel Payment Bank</p>
          </div>
          <input type="radio" />
        </div>
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={boi} alt="Bank of India logo" />
            <p>Bank of India</p>
          </div>
          <input type="radio" />
        </div>
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={bom} alt="Bank of Maharastra logo" />
            <p>Bank of Maharastra</p>
          </div>
          <input type="radio" />
        </div>
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={cbi} alt="Central Bank of India logo" />
            <p>Central Bank of India</p>
          </div>
          <input type="radio" />
        </div>
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={dena} alt="DENA Bank logo" />
            <p>DENA Bank</p>
          </div>
          <input type="radio" />
        </div>
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={icic} alt="ICICI Bank logo" />
            <p>ICICI Bank</p>
          </div>
          <input type="radio" />
        </div>
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={indian} alt="Indian logo" />
            <p>Indian Bank</p>
          </div>
          <input type="radio" />
        </div>
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={pnb} alt="Punjab National Bank logo" />
            <p>Punjab National Bank</p>
          </div>
          <input type="radio" />
        </div>
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={sbi} alt="State Bank India logo" />
            <p>State Bank India</p>
          </div>
          <input type="radio" />
        </div>
        <div className="netbanking-payment-bank-list-wrapper">
          <div>
            <img src={uco} alt="UCO BAnk logo" />
            <p>UCO Bank</p>
          </div>
          <input type="radio" />
        </div>
      </div>
    </div>
  );
}

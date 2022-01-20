import React from "react";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import { YearPurchase } from "./YearPurchase";
import "../carstypepage.css";

export const YearPurchasePage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <YearPurchase />
        </div>
        <div className="divflex2"></div>
      </div>
    </div>
  );
};

import React from "react";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import { YearPurchase } from "./YearPurchase";
import "../carstypepage.css";
import { Dynamic } from "../Dynamic/Dynamic";

export const YearPurchasePage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <YearPurchase />
        </div>
        <div className="divflex2">
          <Dynamic />
        </div>
      </div>
    </div>
  );
};

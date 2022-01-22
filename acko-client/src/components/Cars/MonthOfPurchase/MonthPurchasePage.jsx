import React from "react";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import { MonthPurchase } from "./MonthPurchase";
import "../carstypepage.css";
import { Dynamic } from "../Dynamic/Dynamic";

export const MonthPurchasePage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <MonthPurchase />
        </div>
        <div className="divflex2">
          <Dynamic />
        </div>
      </div>
    </div>
  );
};

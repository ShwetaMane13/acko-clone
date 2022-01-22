import React from "react";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";
import { Dynamic } from "../Dynamic/Dynamic";
import { CurrentPolicy } from "./CurrentPolicy";

export const CurrentPolicyPage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <CurrentPolicy />
        </div>
        <div className="divflex2">
          <Dynamic />
        </div>
      </div>
    </div>
  );
};

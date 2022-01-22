import React from "react";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";
import { Policyexpirirng } from "./Policyexpiring";

export const PolicyExpiringPage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <Policyexpirirng />
        </div>
        <div className="divflex2"></div>
      </div>
    </div>
  );
};

import React from "react";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";
import { WhenPolicyexpired } from "./Whenpolicyexpired";

export const WhenPolicyPage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <WhenPolicyexpired />
        </div>
        <div className="divflex2"></div>
      </div>
    </div>
  );
};

import React from "react";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";
import { Policy } from "./Policy";

export const LastPolicyPage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <Policy />
        </div>
        <div className="divflex2"></div>
      </div>
    </div>
  );
};

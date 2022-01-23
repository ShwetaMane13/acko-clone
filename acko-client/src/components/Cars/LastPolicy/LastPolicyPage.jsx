import React from "react";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";
import { Dynamic } from "../Dynamic/Dynamic";
import { Policy } from "./Policy";
import PolicyPopUp from "./PolicyPopUp";
import { useState } from "react";

export const LastPolicyPage = () => {
  const [popupp, setpopupp] = useState(false);
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
        <Policy setpopupp={setpopupp} />
        </div>
        <div className="divflex2">
          <Dynamic />
        </div>
      </div>
      <PolicyPopUp popupp={popupp} setpopupp={setpopupp} />
    </div>
  );
};

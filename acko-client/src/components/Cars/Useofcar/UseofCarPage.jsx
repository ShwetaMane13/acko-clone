import React from "react";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";
import { UseofCar } from "./UseofCar";

export const UseofCarPage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <UseofCar />
        </div>
        <div className="divflex2"></div>
      </div>
    </div>
  );
};

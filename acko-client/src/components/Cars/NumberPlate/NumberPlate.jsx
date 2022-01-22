import React, { useState } from "react";
import "./NumberPlate.css";

const NumberPlate = () => {
  const [number, setNumber] = useState("");

  const isValidCarNumber = (data) => {
    const pattern = new RegExp(
      "^[A-Z|a-z]{2}([1-9]{1}|[0-9]{2})[A-Z|a-z]{0,2}[0-9]{1,4}$"
    );
    if (pattern.test(data)) {
      return true;
    } else {
      return false;
    }
  };

  const handleKeyUp = () => {
    const status = isValidCarNumber(number);
    console.log(status);
    if (status) {
      localStorage.setItem("carnumber", JSON.stringify(number));
    } else {
      alert("Add correct car number");
    }
  };

  return (
    <div className="mainNumberPlate">
      <div className="Text1">Enter your car number </div>
      <p className="pText1">This makes your purchase twice as fast</p>
      <input
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className="pInput"
        placeholder="DL7EXXXX"
      />

      <div className="btnDiv">
        <button onClick={handleKeyUp} className="btn1">
          Continue
        </button>
      </div>
    </div>
  );
};

export default NumberPlate;

import React from "react";
import thumbsup from "../../ImageIcon/thumbsup.svg";
import "./policy.css";

export const Policy = ({setpopupp}) => {
  let flag = 0;
  const handleClick = (e) => {
    if (flag === 1) {
      e.target.parentElement.style.border = "none";
      flag = 0;
    } else {
      console.log(e.target.value);
      flag = 1;
      e.target.parentElement.style.border = "1px solid #8C76DF";
    }
  };

  const setitem = (e) => {
    localStorage.setItem("ncb", JSON.stringify(e));
    if (e === "0") {
      window.location.href = "http://localhost:3000/policyplan";
      console.log("add navigate here");
    }
  };

  return (
    <div className="policybody">
      <div className="policyperiod">
        Did you make a claim in last policy period?
      </div>
      <div style={{ marginTop: "40px" }} className="policygrid">
        <div onClick={() => setitem("0")}>
          <button onClick={handleClick}>Yes</button>
        </div>
        <div onClick={() => setitem("20")}>
          <button onClick={() => {
            setpopupp(true);
          }}
          style={{ marginLeft: "20px" }}
        >
          
          No</button>
        </div>
        <div onClick={() => setitem("50")}>
          <button onClick={() => {
            setpopupp(true);
          }}
          style={{ marginLeft: "20px" }}>I have never made a claim</button>
        </div>
      </div>
      <div className="policyflexdiv">
        <img src={thumbsup} alt="" />
        <p>You can get amazing discounts based on your claim history</p>
      </div>
    </div>
  );
};

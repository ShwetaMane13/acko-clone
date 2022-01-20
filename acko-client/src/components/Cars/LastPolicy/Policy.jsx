import React from "react";
import thumbsup from "../../ImageIcon/thumbsup.svg";
import "./policy.css";

export const Policy = () => {
  let flag = 0;
  const handleClick = (e) => {
    if (flag === 1) {
      console.log("here");
      e.target.parentElement.style.border = "none";
      flag = 0;
    } else {
      console.log(e.target.value);
      flag = 1;
      e.target.parentElement.style.border = "1px solid #8C76DF";
    }
  };
  return (
    <div className="policybody">
      <div className="policyperiod">
        Did you make a claim in last policy period?
      </div>
      <div style={{ marginTop: "40px" }} className="policygrid">
        <button
          onClick={handleClick}
          //   onClick={async () => {
          //     const id = localStorage.getItem("ackoid");
          //     const data = {
          //       ncb: 0,
          //     };
          //     // await axios.patch(`http://localhost:8080/cars/${id}`, data);
          //     await axios.patch(`https://acko.herokuapp.com/cars/${id}`, data);
          //   }}
        >
          Yes
        </button>
        <button
          onClick={handleClick}
          // onClick={() => {
          //   setpopupp(true);
          // }}
        >
          No
        </button>
        <button onClick={handleClick}>I have never made a claim</button>
      </div>
      <div className="policyflexdiv">
        <img src={thumbsup} alt="" />
        <p>You can get amazing discounts based on your claim history</p>
      </div>
    </div>
  );
};

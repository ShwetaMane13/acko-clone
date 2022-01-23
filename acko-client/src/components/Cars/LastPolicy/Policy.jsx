import React from "react";
import thumbsup from "../../ImageIcon/thumbsup.svg";
import style from "./policy.module.css";

export const Policy = ({ setpopupp }) => {
  const setitem = (e) => {
    localStorage.setItem("ncb", JSON.stringify(e));
    if (e === "0") {
      window.location.href = "http://localhost:3000/policyplan";
    }
  };

  return (
    <div className={style.policybody}>
      <div className={style.policyperiod}>
        Did you make a claim in last policy period?
      </div>
      <div style={{ marginTop: "40px" }} className={style.policygrid}>
        <div onClick={() => setitem("0")}>
          <button>Yes</button>
        </div>
        <div onClick={() => setitem("20")}>
          <button
            onClick={() => {
              setpopupp(true);
            }}
            style={{ marginLeft: "20px" }}
          >
            No
          </button>
        </div>
        <div onClick={() => setitem("50")}>
          <button
            onClick={() => {
              setpopupp(true);
            }}
            style={{ marginLeft: "20px" }}
          >
            I have never made a claim
          </button>
        </div>
      </div>
      <div className={style.policyflexdiv}>
        <img src={thumbsup} alt="" />
        <p>You can get amazing discounts based on your claim history</p>
      </div>
    </div>
  );
};

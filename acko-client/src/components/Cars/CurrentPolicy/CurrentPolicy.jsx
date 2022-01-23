import React from "react";
import style from "../LastPolicy/policy.module.css";

export const CurrentPolicy = () => {
  const setitem = (e) => {
    localStorage.setItem("currentpolicy", JSON.stringify(e));

    if (e === "expired") {
      window.location.href = "http://localhost:3000/car/when-policy-expired";
    } else {
      window.location.href = "http://localhost:3000/car/policy-expire";
    }
  };

  return (
    <div className={style.policybody}>
      <div className={style.policyperiod}>Has your current policy expired?</div>
      <div style={{ marginTop: "40px" }} className={style.policygrid}>
        <button
          className={style.policybtn}
          onClick={() => setitem("notexpired")}
        >
          Policy not Expired
        </button>

        <button className={style.policybtn} onClick={() => setitem("expired")}>
          Policy already Expired
        </button>
      </div>
      <div className={style.policyflexdiv}>
        <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
          <path
            d="M32.605 20.27L25.97 8.763a1.801 1.801 0 00-1.486-.87H11.163a1.67 1.67 0 00-1.468.87L3.043 20.27a1.72 1.72 0 000 1.722l6.634 11.509c.308.544.87.87 1.504.87h13.304c.616 0 1.196-.326 1.504-.87l6.616-11.51a1.72 1.72 0 000-1.721zm-14.772 6.635a5.767 5.767 0 01-5.764-5.764 5.767 5.767 0 015.764-5.764 5.767 5.767 0 015.764 5.764 5.767 5.767 0 01-5.764 5.764z"
            fill="#FFBF74"
          ></path>
          <path
            d="M7.196 35.084a6.489 6.489 0 100-12.977 6.489 6.489 0 000 12.977z"
            fill="#9364ED"
          ></path>
          <path
            d="M7.201 29.53a.535.535 0 01-.321-.108l-3.268-2.625a.51.51 0 01-.072-.715.51.51 0 01.715-.071l2.982 2.393 2.929-1.947a.518.518 0 01.714.143c.161.232.09.554-.143.715l-3.25 2.143c-.09.035-.178.071-.286.071z"
            fill="#fff"
          ></path>
          <circle cx="29.224" cy="9.16" fill="#fff" r="5.582"></circle>
          <path
            d="M18.405 19.576a.3.3 0 01-.018-.42l4.708-5.22a7.65 7.65 0 01-1.698-4.463c-.27-4.293 3.066-7.938 7.312-8.157a7.758 7.758 0 018.159 7.36 7.758 7.758 0 01-7.36 8.159 7.649 7.649 0 01-4.614-1.23l-4.703 5.213a.3.3 0 01-.427.019l-1.359-1.26zm10.977-5.181a5.339 5.339 0 005.045-5.593 5.339 5.339 0 00-5.593-5.046A5.339 5.339 0 0023.79 9.35a5.339 5.339 0 005.593 5.046z"
            fill="#F75276"
          ></path>
        </svg>
        <p>
          Policy Expired? Don't worry, we take less than 60 minutes to inspect
          your car.
        </p>
      </div>
    </div>
  );
};

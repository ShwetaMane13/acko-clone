import React, { useState } from "react";

import style from "./CarsPincode.module.css";
import navigation from "../../ImageIcon/Navigation.svg";

function CarsPincode() {
  const [pincode, setPincode] = useState("");

  // const handleClick = () => {
  //   const reg = new RegExp("^[0-9]+$");
  //   reg.test(pincode);
  //   if (pincode.length === 6 && reg.test(pincode)) {
  //     localStorage.setItem("pincode", pincode);
  //   } else {
  //     alert("Add correct pincode");
  //   }
  // };

  return (
    <div className={style.pincodeDiv}>
      <div className={style.innerPincodeDi}>Where do you stay?</div>
      <input
        onChange={(e) => {
          setPincode(e.target.value);
        }}
        className={style.pInput}
        placeholder="160062"
      />
      <p className={style.pDiv}>
        Please enter the pincode where your vehicle is currently located
      </p>

      <div>
        <button
          onClick={() => {
            if (pincode.length === 6) {
              localStorage.setItem("pincode", JSON.stringify(pincode));
              window.location.href =
                "https://ackoclone-yashraj-m.vercel.app/car/purchased-year";
            } else {
              alert("Please enter correct pincode");
            }
            console.log(pincode);
          }}
          className={style.btn1}
        >
          Continue
        </button>
      </div>

      <div className={style.pindivflex}>
        <img src={navigation} alt="" />
        <p className={style.pInnerDiv}>
          Your pincode helps us check our service availability in your region
        </p>
      </div>
    </div>
  );
}

export default CarsPincode;

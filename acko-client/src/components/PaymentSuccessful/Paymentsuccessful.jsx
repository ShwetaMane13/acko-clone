import React from "react";
import Header from "../Headers/Hearder";

export const Paymentsuccessful = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>
          Order Successful
        </h1>
        <img
          style={{ marginLeft: "40%", marginTop: "30px" }}
          src="https://www.cntraveller.in/wp-content/themes/cntraveller/images/check-circle.gif"
          alt=""
        />
        <h3 style={{ textAlign: "center" }}>Have a safe ride!</h3>
      </div>
    </div>
  );
};

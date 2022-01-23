import React from "react";
import Header from "../../Headers/Hearder";
import "./otppage.css";

export const Otppage = () => {
  const [otp, setOtp] = React.useState(new Array(6).fill(""));

  const handleClick = () => {
    console.log(otp);
  };

  return (
    <div>
      <Header />
      <div className="left_div">
        <div className="tracker_div">
          <div className="tracker green">1</div>
          <div className="tracker green">2</div>
          <div className="tracker">3</div>
        </div>

        <div className="tracker_text">
          <p className="black">Enter Details</p>
          <p>Verify Phone</p>
          <p>Review & Pay</p>
        </div>
      </div>
      <div className="otp">
        <input
          type="text"
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>

      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

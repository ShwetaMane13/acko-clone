import React from "react";
import Header from "../../Headers/Hearder";
import "./otppage.css";

export const Otppage = () => {
  const [otp, setOtp] = React.useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
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
        {otp.map((data, index) => {
          return (
            <input
              className="otp-field"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <p className="entered">OTP Entered - {otp.join("")}</p>
      <p>
        <button
          className="btn btn-secondary mr-2"
          onClick={(e) => setOtp([...otp.map((v) => "")])}
        >
          Clear
        </button>
        <br />
        <button
          className="btn btn-primary"
          onClick={(e) => alert("Entered OTP is " + otp.join(""))}
        >
          Verify OTP
        </button>
      </p>
    </div>
  );
};

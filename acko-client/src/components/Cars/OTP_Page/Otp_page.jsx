import React from "react";
import Header from "../../Headers/Hearder";
import "./otppage.css";

export const Otppage = () => {
  const [otp, setOtp] = React.useState(new Array(6).fill(""));

  const handleClick = async () => {
    let r = await fetch("https://ackoclone.herokuapp.com/signup/verifyotp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number,
        otp,
      }),
    });
    let da = await r.json();
    console.log("da:", da);
    if (da.message === "User registration succesfull!") {
      window.location.href = "http://localhost:3000/finaldetails";
    } else {
      alert("enter correct OTP");
    }
  };

  let data = JSON.parse(localStorage.getItem("userDetails"));

  let number = data.mobileNumber;
  async function postrequest() {
    let res = await fetch("https://ackoclone.herokuapp.com/signup/genotp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number }),
    });
    console.log("here");
    let d = await res.json();
    console.log("d:", d);
  }

  React.useEffect(() => {
    postrequest();
  }, []);

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

      <button className="btn" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

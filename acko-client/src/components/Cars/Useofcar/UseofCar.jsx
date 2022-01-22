import React from "react";
import "./useofcar.css";
import Car_and_hand from "../../ImageIcon/Car_and_hand.svg";
import percar from "../../ImageIcon/personalcar.svg";
import commercialcar from "../../ImageIcon/commercialcar.svg";

export const UseofCar = () => {
  const handleClick = (e) => {
    localStorage.setItem("useofcar", JSON.stringify(e));
    window.location.href = "http://localhost:3000/car/car-pincode";
  };

  //   React.useEffect(() => {
  //     localStorage.setItem("useofcar", "");
  //   }, []);

  return (
    <div className="useofcarbody">
      <div className="usefor">What do you use car for?</div>
      <div
        style={{ textDecoration: "none", color: "black" }}
        to="/cars/pincode"
      >
        <div
          className="personalcardiv"
          onClick={() => handleClick("Personal Car")}
        >
          <div>
            <img src={percar} style={{ marginTop: "20px" }} alt=""></img>
          </div>
          <div>
            <p className="peruse">Personal Use</p>
            <p className="whiteplt">White Number Plate</p>
          </div>
        </div>
      </div>
      <div
        style={{ textDecoration: "none", color: "black" }}
        to="/cars/pincode"
      >
        <div
          className="personalcardiv"
          onClick={() => handleClick("Commercial Car")}
        >
          <div>
            <img src={commercialcar} style={{ marginTop: "20px" }} alt=""></img>
          </div>
          <div>
            <p className="peruse">Commercial Use</p>
            <p className="whiteplt">Yellow Number Plate</p>
          </div>
        </div>
      </div>

      <div className="handcardiv">
        <img src={Car_and_hand} alt="" />
        <p className="insured">
          We've insured more than 5 Lakh cars in India till date
        </p>
      </div>
    </div>
  );
};

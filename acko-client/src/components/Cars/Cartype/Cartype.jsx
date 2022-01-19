
import { Link } from "react-router-dom";
import React from "react";
import "./Cartype.css";
import personalcar from "../../ImageIcon/personelcar.svg";
import commercialcar from "../../ImageIcon/commercialcar.svg";
import carandhand from "../../ImageIcon/Car_and_hand.svg";

export const Cartype = () => {
  return (
    <div>
      <div className="useofcarbody">
        <div className="usefor">What do you use car for?</div>
        <Link className="linkstyle" to="/cars/pincode">
          <div
            // onClick={async () => {
            //   try {
            //     const data = { useofcar: "Personal use" };
            //     // const res = await axios.post("http://localhost:8080/cars", data);
            //     const res = await axios.post(
            //       "https://acko.herokuapp.com/cars",
            //       data
            //     );
            //     // console.log(res.data._id);
            //     const id = res.data._id;
            //     localStorage.setItem("ackoid", id);
            //   } catch (err) {
            //     console.log(err.message);
            //   }
            // }}
            className="personalcardiv"
          >
            <div>
              <img src={personalcar} style={{ marginTop: "20px" }} alt=""></img>
            </div>
            <div>
              <p className="peruse">Personal Use</p>

              <p className="numplate">White Number Plate</p>
            </div>
          </div>
        </Link>
        <Link className="linkstyle" to="/cars/pincode">
          <div
            // onClick={async () => {
            //   try {
            //     const data = { useofcar: "Commercial use" };
            //     const res = await axios.post(
            //       "https://acko.herokuapp.com/cars",
            //       data
            //     );
            //     // console.log(res.data._id);
            //     const id = res.data._id;
            //     localStorage.setItem("ackoid", id);
            //   } catch (err) {
            //     console.log(err.message);
            //   }
            // }}
            className="personalcardiv"
          >
            <div>
              <img style={{ marginTop: "20px" }} src={commercialcar} alt="" />
            </div>
            <div>
              <p className="peruse">Commercial Use</p>
              <p className="numplate">Yellow Number Plate</p>
            </div>
          </div>
        </Link>

        <div className="handcardiv">
          <img src={carandhand} alt="" />
          <p className="insured">
            We've insured more than 5 Lakh cars in India till date
          </p>
        </div>
      </div>
    </div>
  );
};

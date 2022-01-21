import React, { useState,useEffect } from "react";
import "./CarDetails.css";
import buttonpen from "../../ImageIcon/Button pen.svg";
// import ecosport from "./Eco sport.svg";

import carwithstar from "../../ImageIcon/Car with star.svg";
import axios from "axios";
import { Link } from "react-router-dom";

function CarDetail() {
  const [cng, setCng] = useState("");

  const [mobile, setMobile] = useState("");

  const [dat,setDat]=useState("")

  const id = localStorage.getItem("ackoid");

 useEffect(() => {
   getData();
 }, []);
 
 const getData =  () => {
  
//    setDat(data);
 };

  return (
    <div className="carDetailDiv">
      <div className="carDetailTopDiv">
        <div className="cardetaillefttopbody">
          <div className="innerCarDetailDiv"
          >
            Here's your car.
          </div>
          {/* car number */}
          <div
            className="innerCarDiv2"
          >
            {dat.number}
          </div>

          <div className="editflexdiv">
            {/* car Name */}
            <p>{dat.name}</p>
            <Link to="/cars/cartype" >
             
              <img className="imgCar1" src={buttonpen} alt="" />
            </Link>
          </div>
          {/* car detail */}
          <p className="innerCarPara">
            {dat.gear}-{dat.fuel}
          </p>
        </div>
        <div className="carDetailRightDiv">
          <img src="" alt="edit later" />
        </div>
      </div>
      <hr />

      <div
        className="innerCarCng">
        Do you have external CNG kit
      </div>
      <div className="labeldiv">
        <label>
          <input
            type="radio"
            name="same"
            onClick={() => {
              setCng("Yes");
            }}
          />
          Yes
        </label>
        <label className="innerLabel1">
          <input
            type="radio"
            name="same"
            onClick={() => {
              setCng("No");
            }}
          />
          No
        </label>
      </div>
      <p className="innerCarPara2">
        Mobile Number
      </p>
      <input
        className="carDetailInput"
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        placeholder="90000XXXXX"
      />
      <div className="cardepara">
        <p>We'll only use it to send you important policy updates. No spam,</p>
        <p className="wePromisePara">We Promise!!</p>
      </div>

      <Link to="/cars/expiry">
        <div>
          <button
            onClick={() => {
             
              const data = {
                cngkit: cng,
                mobile: mobile,
              };
              if((data.cngkit.length!=0)&&(data.mobile.length===10)){
                localStorage.setItem("carDeatl",JSON.stringify(data));}
                else{
                    console.log(data.cngkit.length,data.mobile.length);
                    alert("Please select correct details ,Mobile number should be 10 digits");
                }
            }}
            className="continueBtn"
          >
            Continue
          </button>
        </div>
      </Link>
      <div className="lastflexdiv">
        <img src={carwithstar} alt="" />
        <p>Great car! Now let us offer you really great insurance for it</p>
      </div>
    </div>
  );
}

export default CarDetail;
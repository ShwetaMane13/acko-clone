import React, { useState,useEffect } from "react";
import "./CarDetails.css";
import buttonpen from "../../ImageIcon/Button pen.svg";


import carwithstar from "../../ImageIcon/Car with star.svg";
import axios from "axios";

function CarDetail() {
  const [cng, setCng] = useState("");

  const [mobile, setMobile] = useState("");

  const [dat,setDat]=useState({})

  const [ reqImg,setreqImg] = useState("");


  
  const [company,setCompany] = useState("");
 useEffect(() => {
   getData();
 }, []);

 const getData =  async() => {
  let userCar = localStorage.getItem("carType");
   let carnumber = localStorage.getItem("carnumber");
   carnumber = JSON.parse(carnumber);
  let car1 = JSON.parse(userCar);
 let fuelType = car1.fuelType;
 let gearType = car1.gearType;

 setDat({fuelType,gearType,carnumber});
  
  car1 = car1.carName;
  console.log(car1);
  let car = await axios.get("https://ackoclone.herokuapp.com/car/pic?apiKey=test5");
  
   for(let i =0;i<car.data.length;i++){
     if(car.data[i].model===car1){
       setreqImg(car.data[i].image);
       setCompany(car.data[i].company);
     
     }
   }

 };

  return (
    <div className="carDetailDiv">
      <div className="carDetailTopDiv">
        <div className="cardetaillefttopbody">
          <div className="innerCarDetailDiv"
          >
            Here's your car.
          </div>
         
          <div
            className="innerCarDiv2"
          >
            <p>{dat.fuelType}</p>
            <p>{dat.gearType}</p>
            <p>{dat.carnumber}</p>
            <img className="imgCar1" src={buttonpen} alt="" />
          </div>

         
        </div>
        <div className="carDetailRightDiv">
          <img id="reqImg" src={reqImg} alt="" />
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

      
        <div>
          <button
            onClick={() => {
             
              const data = {
                cngkit: cng,
                mobile: mobile,
              };
              if((data.cngkit.length!==0)&&(data.mobile.length===10)){

                
                localStorage.setItem("carDetails",JSON.stringify(data));
                localStorage.setItem("currentImage",JSON.stringify(reqImg));
                localStorage.setItem("currentCompany",JSON.stringify(company));

                window.location.href="http://localhost:3000/car/car-policy"
            }
                else{
                   
                    alert("Please select correct details ,Mobile number should be 10 digits");
                }
            }}
            className="continueBtn"
          >
            Continue
          </button>
        </div>
      
      <div className="lastflexdiv">
        <img src={carwithstar} alt="" />
        <p>Great car! Now let us offer you really great insurance for it</p>
      </div>
    </div>
  );
}

export default CarDetail;
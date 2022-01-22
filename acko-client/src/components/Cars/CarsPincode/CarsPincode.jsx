
import React, { useState } from 'react';


import './CarsPincode.css';
import navigation from '../../ImageIcon/Navigation.svg';
import { Navigate } from 'react-router-dom';



function CarsPincode() {
  const [pincode, setPincode] = useState("");

  const handleClick = () => {
    const reg = new RegExp("^[0-9]+$");
    reg.test(pincode);
    if (pincode.length === 6 && reg.test(pincode)) {
      localStorage.setItem("pincode", pincode);
      
    } else {
      alert("Add correct pincode");
    }
  };

  return (
    <div className="pincodeDiv">
      <div className="innerPincodeDiv">Where do you stay?</div>
      <input
        onChange={(e) => {
          setPincode(e.target.value);
        }}
        className="pInput"
        placeholder="160062"
      />
      <p className="pDiv">
        Please enter the pincode where your vehicle is currently located
      </p>

      {/* <div>
        <button onClick={handleClick} className="btn1">
          Continue
        </button>
      </div>

      <div className="pindivflex">
        <img src={navigation} alt="" />
        <p className="pInnerDiv">
          Your pincode helps us check our service availability in your region
        </p> */}

      
          <div>
            <button
              onClick={() => {
                    if(pincode.length===6){
                      localStorage.setItem("pincode",JSON.stringify(pincode));
                      window.location.href = "http://localhost:3000/car/purchased-year";
                    }
                    else{
                    alert("Please enter correct pincode");
                  }
                console.log(pincode);
              }}
              className="btn1"
            >
              Continue
            </button>
          </div>
      

        <div className="pindivflex">
          <img src={navigation} alt="" />
          <p className='pInnerDiv'>
            Your pincode helps us check our service availability in your region
          </p>
        </div>

      </div>
   
  );
}

export default CarsPincode;

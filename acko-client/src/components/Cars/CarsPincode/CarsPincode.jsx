import React, { useState } from 'react'
import "./CarsPincode.css"
import navigation from "./Navigation.svg"
import axios from "axios"
import { Link } from 'react-router-dom'

function CarsPincode() {

const [pincode,setPincode]=useState("")

    return (
      <div className="pincodeDiv">
        <div className='innerPincodeDiv'>
          Where do you stay?
        </div>
        <input
          onChange={(e) => {
            setPincode(e.target.value);
          }}
          className="pInput"
          placeholder="160062"
        />
        <p className='pDiv' >
          Please enter the pincode where your vehicle is currently located
        </p>
        <Link to="/cars/carnumber" >
          <div>
            <button
              onClick={async () => {
                const id = localStorage.getItem("ackoid");
                const data = { pincode: pincode };
                // await axios.patch(`http://localhost:8080/cars/${id}`, data);
                //  await axios.patch(
                //    `https://acko.herokuapp.com/cars/${id}`,
                //    data
                //  );
              }}
              className="pinbtn"
            >
              Continue
            </button>
          </div>
        </Link>

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
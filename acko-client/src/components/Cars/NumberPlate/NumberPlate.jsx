import React, { useState } from 'react'
import "./NumberPlate.css"

import {Link} from "react-router-dom"

const  NumberPlate = ()=> {

const [number,setNumber]=useState("")

    return (
      <div className='mainNumberPlate'>
        <div className='Text1'>
          Enter your car number{" "}
        </div>
        <p className='pText1'>
          This makes your purchase twice as fast
        </p>
        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          className="pInput"
          placeholder="DL7EXXXX"
        />
        <Link to="/cars/cartype" >
         
          <div className='btnDiv'>
            <button
              onClick={async () => {
                
              }}
              className="btn1">
              Continue
            </button>
          </div>
        </Link>
      </div>
    );
}

export default NumberPlate;
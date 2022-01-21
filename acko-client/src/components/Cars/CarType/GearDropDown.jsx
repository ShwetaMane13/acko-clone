import React, { useState } from 'react'
import style from "./gearpopup.module.css"
import search from "../../ImageIcon/Search.svg";

function GearDropDown({ gearpopup, setGearpopup, setGear }) {
   const [valuee, setValuee] = useState("");
  return gearpopup ? (
    <div className={style.typecarpopup}>
      <div className={style.inputflexdiv}>
        
      </div>
      
     <p
        onClick={() => {
          setGear("Automatic")
          setGearpopup(false)
        }}
      >
        Automatic
      </p>
      <hr />
      <p
        onClick={() => {
          setGear("Manual")
          setGearpopup(false)
        }}
      >Manual
        
      </p>
      <hr />
      <p
        onClick={() => {
          setGear("HatchBack")
          setGearpopup(false)
        }}
      >HatchBack
        
      </p>
      <hr />
      <p
        onClick={() => {
          setGear("SUV")
          setGearpopup(false)
        }}
      >SUV
        
      </p>
      <hr />
      <p
        onClick={() => {
          setGear("Sedan")
          setGearpopup(false)
        }}
      >Sedan
        
      </p>
      <hr />

    </div>
  ) : (
    ""
  );
}

export default GearDropDown;
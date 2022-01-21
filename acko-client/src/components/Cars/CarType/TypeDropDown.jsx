import React, { useState } from "react";
import style from "./typecarpopup.module.css";
import search from "../../ImageIcon/Search.svg";

function Typecarpopup({ setCarpopup, carpopup, setCar }) {
  const [value, setValue] = useState("");
  return carpopup ? (
    <div className={style.typecarpopup}>
      <div className={style.inputflexdiv}>
      
      </div>
      

       <p
        onClick={() => {
          setCar("Honda City");
          setCarpopup(false);
        }}
      >
        Honda City
      </p>
      <hr />
      <p
        onClick={() => {
          setCar("Safari");
          setCarpopup(false);
        }}
      >
        Safari
      </p>
      <hr />
      <p
        onClick={() => {
          setCar("Tiago");
          setCarpopup(false);
        }}
      >
        Tiago
      </p>
      <hr />
      <p
        onClick={() => {
          setCar("Nexon");
          setCarpopup(false);
        }}
      >
        Nexon
      </p>
      <hr />
      <p
        onClick={() => {
          setCar("Altroz");
          setCarpopup(false);
        }}
      >
        Altroz
      </p>
      <hr />

      <p
        onClick={() => {
          setCar("Jeep Compass");
          setCarpopup(false);
        }}
      >
        Jeep Compass
      </p>
      <hr />
      <p
        onClick={() => {
          setCar("XUV-700");
          setCarpopup(false);
        }}
      >
        XUV-700
      </p>
      <hr />
      <p
        onClick={() => {
          setCar("Swift");
          setCarpopup(false);
        }}
      >
        Swift
      </p>
      <hr />
      <p
        onClick={() => {
          setCar("Baleno");
          setCarpopup(false);
        }}
      >
        Baleno
      </p>
      <hr />
      <p
        onClick={() => {
          setCar("Breeza");
          setCarpopup(false);
        }}
      >
        Breeza
      </p>
      <hr />
    </div>
  ) : (
    ""
  );
}

export default Typecarpopup;
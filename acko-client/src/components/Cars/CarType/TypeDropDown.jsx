import React from "react";
import  "./typecarpopup.css";

function Typecarpopup({ setCarpopup, carpopup, setCar }) {

  return carpopup ? (
    <div className="typecarpopup">
      <div className="inputflexdiv">
      
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
          setCar("Gravitas SUV");
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
          setCar("Sport 1.4");
          setCarpopup(false);
        }}
      >
        Jeep Compass
      </p>
      <hr />
      <p
        onClick={() => {
          setCar("XUV700");
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
     
   
    </div>
  ) : (
    ""
  );
}

export default Typecarpopup;
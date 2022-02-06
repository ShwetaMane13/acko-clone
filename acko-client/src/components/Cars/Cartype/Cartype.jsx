import React, { useState } from "react";
import style from "./cartype.css";
import car from "../../ImageIcon/Personel car.svg";
import petrol from "../../ImageIcon/petrol.svg";
import gear from "../../ImageIcon/gear.svg";
import downarrow from "../../ImageIcon/Down arrow.svg";
import PetrolDropDown from "./PetrolDropDown";
import TypeDropDown from "./TypeDropDown";
import GearDropDown from "./GearDropDown";

export const Cartype = () => {
  const [carr, setCar] = useState("Swift");

  const [fuel, setFuel] = useState("Petrol");

  const [gearr, setGear] = useState("Manual");

  const [petrolpopup, setPetrolpopup] = useState(false);

  const [carpopup, setCarpopup] = useState(false);

  const [gearpopup, setGearpopup] = useState(false);

  return (
    <div className="cartypebody">
      <div className="cartypehead">Which Car do you drive?</div>
      <div className="cartypeflex">
        <img src={car} alt="" />
        <p>{carr}</p>
        <img
          onClick={() => {
            setCarpopup(!carpopup);
            setPetrolpopup(false);
            setGearpopup(false);
          }}
          className="imagearrow"
          src={downarrow}
          alt=""
        />
      </div>
      <hr />
      <TypeDropDown
        setCar={setCar}
        carpopup={carpopup}
        setCarpopup={setCarpopup}
      />
      <div className="cartypeflex">
        <img src={petrol} alt="" />
        <p>{fuel}</p>
        <img
          onClick={() => {
            setPetrolpopup(!petrolpopup);
            setCarpopup(false);
            setGearpopup(false);
          }}
          className="imagearrow"
          src={downarrow}
          alt=""
        />
      </div>
      <hr />
      <PetrolDropDown
        petrolpopup={petrolpopup}
        setFuel={setFuel}
        setPetrolpopup={setPetrolpopup}
      />
      <div className="cartypeflex">
        <img src={gear} alt="" />
        <p>{gearr}</p>
        <img
          onClick={() => {
            setGearpopup(!gearpopup);
            setPetrolpopup(false);
            setCarpopup(false);
          }}
          className="imagearrow"
          src={downarrow}
          alt=""
        />
      </div>
      <hr />
      <GearDropDown
        gearpopup={gearpopup}
        setGearpopup={setGearpopup}
        setGear={setGear}
      />

      <button
        onClick={() => {
          const data = {
            carName: carr,
            fuelType: fuel,
            gearType: gearr,
          };
          localStorage.setItem("carType", JSON.stringify(data));
          window.location.href =
            "https://ackoclone-yashraj-m.vercel.app/car/car-details";
        }}
        className="cartypebtn"
      >
        Continue
      </button>
    </div>
  );
};

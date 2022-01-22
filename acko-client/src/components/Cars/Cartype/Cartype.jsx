import React, { useState } from 'react'
import style from "./cartype.module.css"
import car from "../../ImageIcon/Personel car.svg"
import petrol from "../../ImageIcon/petrol.svg"
import gear from "../../ImageIcon/gear.svg"
import downarrow from "../../ImageIcon/Down arrow.svg"
import PetrolDropDown from './PetrolDropDown'
import TypeDropDown from './TypeDropDown'
import GearDropDown from './GearDropDown'

import {Link} from "react-router-dom"
export const Cartype=()=> {

    const [carr, setCar] = useState("Swift");

    const [fuel, setFuel] = useState("Petrol");

    const [gearr, setGear] = useState("Manual")
    
    const [petrolpopup, setPetrolpopup] = useState(false);

    const [carpopup, setCarpopup] = useState(false);

    const [gearpopup,setGearpopup]=useState(false)


    return (
      <div className={style.cartypebody}>
        <div className={style.cartypehead}>Which Car do you drive?</div>
        <div className={style.cartypeflex}>
          <img src={car} alt="" />
          <p>{carr}</p>
          <img
            onClick={() => {
              setCarpopup(!carpopup);
              setPetrolpopup(false);
              setGearpopup(false);
            }}
            className={style.imagearrow}
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
        <div className={style.cartypeflex}>
          <img src={petrol} alt="" />
          <p>{fuel}</p>
          <img
            onClick={() => {
              setPetrolpopup(!petrolpopup);
              setCarpopup(false);
              setGearpopup(false);
            }}
            className={style.imagearrow}
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
        <div className={style.cartypeflex}>
          <img src={gear} alt="" />
          <p>{gearr}</p>
          <img
            onClick={() => {
              setGearpopup(!gearpopup);
              setPetrolpopup(false);
              setCarpopup(false);
            }}
            className={style.imagearrow}
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
        <Link to="/cars/cardetail">
          <button
            onClick={ () => {
              
              const data = {
                carName: carr,
                fuelType: fuel,
                gearType: gearr,
              };
              localStorage.setItem("carType",JSON.stringify(data));
            }}
            className={style.cartypebtn}
          >
            Continue
          </button>
        </Link>
      </div>
    );
}



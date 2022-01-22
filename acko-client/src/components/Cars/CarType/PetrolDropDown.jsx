import React from 'react'
import style from "./petrol.module.css"

function PetrolDropDown({ petrolpopup, setFuel, setPetrolpopup }) {
  return petrolpopup ? (
    <div className={style.petrolpopup}>
      <p
        onClick={() => {
          setFuel("Petrol")
          setPetrolpopup(false)
        }}
      >
        Petrol
      </p>
      <hr />
      <p
        onClick={() => {
          setFuel("Diesel")
          setPetrolpopup(false)
        }}
      >
        Diesel
      </p>
      <hr />
      <p
        onClick={() => {
          setFuel("CNG")
          setPetrolpopup(false)
        }}
      >
        CNG

      </p>
      <hr />
      <p
        onClick={() => {
          setFuel("EV")
          setPetrolpopup(false)
        }}
      >
        EV
      </p>
      <hr />
    </div>
  ) : (
    ""
  );
}

export default PetrolDropDown
import React from "react";
import style from "../YearOfPurchase/yearpurchase.module.css";

export const MonthPurchase = () => {
  const handleClick = (e) => {
    localStorage.setItem("month", JSON.stringify(e.target.value));
    window.location.href =
      "https://ackoclone-yashraj-m.vercel.app/car/car-type";
  };
  return (
    <div className={style.yearbody}>
      <p>Which month did you buy your car?</p>

      <div className={style.yearflexdiv}>
        <div>
          <button value="January" onClick={handleClick}>
            Jan
          </button>
        </div>
        <div>
          <button value="February" onClick={handleClick}>
            Feb
          </button>
        </div>
        <div>
          <button value="March" onClick={handleClick}>
            Mar
          </button>
        </div>
        <div>
          <button value="April" onClick={handleClick}>
            Apr
          </button>
        </div>
        <div>
          <button value="May" onClick={handleClick}>
            May
          </button>
        </div>
        <div>
          <button value="June" onClick={handleClick}>
            Jun
          </button>
        </div>
        <div>
          <button value="July" onClick={handleClick}>
            Jul
          </button>
        </div>
        <div>
          <button value="August" onClick={handleClick}>
            Aug
          </button>
        </div>
        <div>
          <button value="September" onClick={handleClick}>
            Sep
          </button>
        </div>
        <div>
          <button value="October" onClick={handleClick}>
            Oct
          </button>
        </div>
        <div>
          <button value="November" onClick={handleClick}>
            Nov
          </button>
        </div>
        <div>
          <button value="December" onClick={handleClick}>
            Dec
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "../YearOfPurchase/yearpurchase.css";

export const MonthPurchase = () => {
  let flag = 0;
  const handleClick = (e) => {
    if (flag === 1) {
      console.log("here");
      e.target.element.style.border = "none";
      flag = 0;
    } else {
      console.log(e.target.value);
      flag = 1;
      e.target.element.style.border = "1px solid #8C76DF";
    }
  };
  return (
    <div className="yearbody">
      <p>Which month did you buy your car?</p>

      <div className="yearflexdiv">
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

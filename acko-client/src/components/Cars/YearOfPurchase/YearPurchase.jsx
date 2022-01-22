import React from "react";
import "./yearpurchase.css";

export const YearPurchase = () => {
  let flag = 0;
  const handleClick = (e) => {
    console.log(e.target.value);
    if (flag === 1) {
      //console.log("here");
      e.target.parentElement.style.border = "none";
      flag = 0;
    } else {
      flag = 1;
      e.target.parentElement.style.border = "1px solid #8C76DF";
    }
    localStorage.setItem("year", e.target.value);
  };
  return (
    <div className="yearbody">
      <p>Which Year did you buy your car?</p>

      <div className="yearflexdiv">
        <div>
          <button value="2022" onClick={handleClick}>
            2022
          </button>
        </div>
        <div>
          <button value="2021" onClick={handleClick}>
            2021
          </button>
        </div>
        <div>
          <button value="2020" onClick={handleClick}>
            2020
          </button>
        </div>
        <div>
          <button value="2019" onClick={handleClick}>
            2019
          </button>
        </div>
        <div>
          <button value="2018" onClick={handleClick}>
            2018
          </button>
        </div>
        <div>
          <button value="2017" onClick={handleClick}>
            2017
          </button>
        </div>
        <div>
          <button value="2016" onClick={handleClick}>
            2016
          </button>
        </div>
        <div>
          <button value="2015" onClick={handleClick}>
            2015
          </button>
        </div>
        <div>
          <button value="2014" onClick={handleClick}>
            2014
          </button>
        </div>
        <div>
          <button value="2013" onClick={handleClick}>
            2013
          </button>
        </div>
        <div>
          <button value="2012" onClick={handleClick}>
            2012
          </button>
        </div>
        <div>
          <button value="2011" onClick={handleClick}>
            2011
          </button>
        </div>
        <div>
          <button value="2010" onClick={handleClick}>
            2010
          </button>
        </div>
        <div>
          <button value="2009" onClick={handleClick}>
            2009
          </button>
        </div>
        <div>
          <button value="2008" onClick={handleClick}>
            2008
          </button>
        </div>
        <div>
          <button value="2007" onClick={handleClick}>
            2007
          </button>
        </div>
        <div>
          <button value="Before 2007" onClick={handleClick}>
            Before 2007
          </button>
        </div>
      </div>
    </div>
  );
};

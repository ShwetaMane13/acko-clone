import React from "react";
import car from "../../ImageIcon/car.svg";
import "./dynamic.css";
import { Link } from "react-router-dom";
import edit_btn from "../../ImageIcon/edit_btn.svg";

export const Dynamic = () => {
  let data = localStorage.getItem("useofcar");
  console.log("data:", data);

  return (
    <div className="dynamicbody">
      <div className="dynamicsecbody">
        {data ? (
          <div>
            <img className="img11" src={car} alt="" />
            <p>{data}</p>
            <Link className="link" to="/useofcar">
              <img className="img22" src={edit_btn} alt="" />
            </Link>
          </div>
        ) : (
          <p></p>
        )}
        {/* <hr style={{ width: "90%" }} /> */}
      </div>
    </div>
  );
};

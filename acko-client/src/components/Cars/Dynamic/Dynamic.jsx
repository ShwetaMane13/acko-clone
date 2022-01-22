import React from "react";
import car from "../../ImageIcon/car.svg";
import "./dynamic.css";
import { Link } from "react-router-dom";
import edit_btn from "../../ImageIcon/edit_btn.svg";
import calender from "../../ImageIcon/Cal.svg";
import date from "../../ImageIcon/Date.svg";
import location from "../../ImageIcon/Location.svg";
import phone from "../../ImageIcon/phone.svg";

export const Dynamic = () => {
  let abc = JSON.parse(localStorage.getItem("carType"));

  let obj = [
    {
      useofcar: localStorage.getItem("useofcar"),
      number: localStorage.getItem("carnumber"),
      pincode: localStorage.getItem("pincode"),
      name: abc.carname, //carname choosen from dropdown menu
      oddate: localStorage.getItem(""),
      tpdate: localStorage.getItem(""),
      year: localStorage.getItem("year"),
      month: localStorage.getItem("month"),
      mobile: localStorage.getItem(""),
    },
  ];

  return (
    <div className="dynamicbody">
      {obj.map((e) => (
        <div className="dynamicsecbody" key={e._id}>
          {e.useofcar && (
            <div>
              <img className="img11" src={car} alt="" />
              <p>{e.useofcar}</p>

              <Link className="link" to="/car/useofcar">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}

          {e.number && (
            <div>
              <img className="img11" src={car} alt="" />
              <p>{e.number}</p>

              <Link className="link" to="/car/carnumber">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}
          {e.pincode && (
            <div>
              <img className="img11" src={location} alt="" />
              <p>{e.pincode}</p>
              <Link className="link" to="/car/pincode">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}

          {e.name && (
            <div>
              <img className="img11" src={car} alt="" />
              <p>{e.name}</p>
              <Link className="link" to="/car/cartype">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}

          {e.oddate && (
            <div>
              <img className="img11" src={date} alt="" />
              <p>OD Expiry- {e.oddate}</p>
              <Link to="/car/expiry">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}

          {e.tpdate && (
            <div>
              <img className="img11" src={date} alt="" />
              <p>TP Expiry- {e.tpdate}</p>
              <Link to="/car/expiry">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}

          {e.year && (
            <div>
              <img className="img11" src={calender} alt="" />
              <p>Registration Year -{e.year}</p>
              <Link to="/car/year">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}

          {e.month && (
            <div>
              <img className="img11" src={calender} alt="" />
              <p>Registration Month -{e.month}</p>
              <Link to="/car/month">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}

          {e.mobile && (
            <div>
              <img
                style={{ width: "15px" }}
                className="img11"
                src={phone}
                alt=""
              />
              <p>Mobile -{e.mobile}</p>
              <Link to="/car/cardetail">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

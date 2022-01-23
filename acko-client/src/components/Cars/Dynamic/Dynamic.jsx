import React from "react";
import car from "../../ImageIcon/car.svg";
import "./dynamic.css";
import { Link } from "react-router-dom";
import edit_btn from "../../ImageIcon/edit_btn.svg";
import calender from "../../ImageIcon/Cal.svg";
import date_img from "../../ImageIcon/Date.svg";
import location from "../../ImageIcon/Location.svg";
import phone from "../../ImageIcon/phone.svg";

export const Dynamic = () => {
  let abc = JSON.parse(localStorage.getItem("carType"));
  let date = JSON.parse(localStorage.getItem("expiryDate"));
  let mobile = JSON.parse(localStorage.getItem("carDetails"));
  let obj = [
    {
      useofcar: localStorage.getItem("useofcar"),
      carnumber: localStorage.getItem("carnumber"),
      pincode: localStorage.getItem("pincode"),
      name: abc, //carname choosen from dropdown menu
      oddate: date,
      tpdate: date,
      year: localStorage.getItem("year"),
      month: localStorage.getItem("month"),
      mobile: mobile,
      ncb: localStorage.getItem("ncb"),
    },
  ];
  console.log(obj);

  return (
    <div className="dynamicbody">
      {obj.map((e) => (
        <div className="dynamicsecbody" key={e._id}>
          {e.useofcar && (
            <div className="div1">
              <img className="img11" src={car} alt="" />
              <p>{JSON.parse(e.useofcar)}</p>

              <Link className="link" to="/car/car-use">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}
          {e.carnumber && (
            <div>
              <img className="img11" src={car} alt="" />
              <p>{JSON.parse(e.carnumber)}</p>

              <Link className="link" to="/car/car-plate">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}
          {e.pincode && (
            <div>
              <img className="img11" src={location} alt="" />
              <p>{JSON.parse(e.pincode)}</p>
              <Link className="link" to="/car/car-pincode">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}
          {e.name && (
            <div>
              <img className="img11" src={car} alt="" />
              <p>{e.name.carName}</p>
              <Link className="link" to="/car/cartype">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}
          {e.oddate && (
            <div>
              <img className="img11" src={date_img} alt="" />
              <p>OD Expiry- {e.oddate.oddate}</p>
              <Link to="/car/expiry">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}

          {e.tpdate && (
            <div>
              <img className="img11" src={date_img} alt="" />
              <p>TP Expiry- {e.tpdate.tpdate}</p>
              <Link to="/car/expiry">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}
          {e.year && (
            <div>
              <img className="img11" src={calender} alt="" />
              <p>Registration Year - {JSON.parse(e.year)}</p>
              <Link to="/car/year">
                <img className="img22" src={edit_btn} alt="" />
              </Link>
            </div>
          )}
          {e.month && (
            <div>
              <img className="img11" src={calender} alt="" />
              <p>Registration Month - {JSON.parse(e.month)}</p>
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
              <p>Mobile - {e.mobile.mobile}</p>
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

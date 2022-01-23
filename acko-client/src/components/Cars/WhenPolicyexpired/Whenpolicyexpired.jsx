import React from "react";
import style from "../LastPolicy/policy.module.css";

export const WhenPolicyexpired = () => {
  const handleClick = (e) => {
    localStorage.setItem("WhenPolicyExpired", JSON.stringify(e.target.value));
    window.location.href = "http://localhost:3000/car/expiry-date";
  };
  return (
    <div className={style.policybody}>
      <div className={style.policyperiod}>When did your policy expire?</div>
      <div style={{ marginTop: "40px" }} className={style.policygrid}>
        <button
          className={style.policybtn}
          value="Less than 10 days ago"
          onClick={handleClick}
        >
          Less than 10 days ago
        </button>

        <button
          className={style.policybtn}
          value="Between 10 to 90 days"
          onClick={handleClick}
        >
          Between 10 to 90 days
        </button>

        <button
          className={style.policybtn}
          value="More than 90 days ago"
          onClick={handleClick}
        >
          More than 90 days ago
        </button>
      </div>
      <div className={style.policyflexdiv}>
        <svg width="34" height="27" viewBox="0 0 34 27" fill="none">
          <path
            d="M23.25.96l-6.255 4.065c-.806.523-1.228 1.49-1.113 2.456.422 3.059 1.996 9.539 7.637 12.477a2.103 2.103 0 001.957 0c5.642-2.978 7.215-9.459 7.637-12.477.154-.966-.307-1.933-1.113-2.456L25.745.96a2.328 2.328 0 00-2.495 0z"
            fill="#FFA52F"
          ></path>
          <path
            d="M24.478 4.382V17.1c0 .966 1.075 1.49 1.804.885 1.689-1.489 4.183-4.508 5.45-10.143a1.192 1.192 0 00-.5-1.248l-5.103-3.18c-.73-.482-1.65.081-1.65.967z"
            fill="#FFBF74"
          ></path>
          <path
            d="M21.984 17.141l-.844-1.167c.383-.201.96-1.329.383-1.932-.345-.322-1.036-.08-1.343.04l-1.266-4.186c-.154-.443-.5-.805-.96-.886-1.19-.241-3.684-.684-6.37-.684s-5.18.443-6.37.684a1.23 1.23 0 00-.96.886l-1.228 4.226c-.307-.12-.998-.362-1.343-.04-.614.563 0 1.73.384 1.932l-.845 1.167a1.37 1.37 0 00-.23.765c.038 4.025.652 6.802.921 7.89a.672.672 0 00.652.482h2.457a.678.678 0 00.614-.443l.422-1.368h11.09l.423 1.368c.076.282.345.443.614.443h2.456a.672.672 0 00.652-.483c.269-1.087.883-3.864.921-7.889 0-.282-.077-.563-.23-.805z"
            fill="#9364ED"
          ></path>
          <path
            d="M4.561 14.162c-.115.322.154.684.499.684h13.125c.345 0 .614-.362.498-.684l-.959-3.743c-.077-.242-.23-.443-.46-.483-.768-.202-2.763-.564-5.642-.564-2.878 0-5.027.362-5.91.523-.268.04-.46.282-.499.524l-.652 3.743zM6.096 19.676c-.192.322-.576.563-.96.563h-1.65a1.131 1.131 0 01-1.112-.966c-.039-.16-.039-.282-.039-.443-.076-.845.538-1.368 1.343-1.207l1.727.362c.73.161 1.075 1.047.691 1.69zM13.656 21.568l-1.535.161c-.307.04-.652.04-.96 0l-1.534-.16a.584.584 0 01-.5-.484.55.55 0 01.538-.604h3.914a.55.55 0 01.538.604c0 .242-.23.443-.46.483zM20.871 19.273a1.131 1.131 0 01-1.113.966h-1.65c-.384 0-.768-.201-.96-.563-.383-.644-.038-1.53.73-1.691l1.727-.362c.805-.161 1.42.362 1.343 1.207-.039.161-.077.322-.077.443z"
            fill="#fff"
          ></path>
          <path
            d="M5.022 26.314a.678.678 0 00.614-.442l.422-1.37H1.606c.115.564.23 1.007.307 1.33a.672.672 0 00.652.482h2.457zM17.148 24.466l.423 1.368c.076.282.345.443.614.443h2.456a.672.672 0 00.652-.483c.077-.322.192-.765.307-1.328h-4.452z"
            fill="#343758"
          ></path>
        </svg>
        <p>
          Uh oh! Accidents are unpredictable and expensive, let us secure you
          from the uncertain.
        </p>
      </div>
    </div>
  );
};

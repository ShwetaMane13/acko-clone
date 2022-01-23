import React from 'react'
import style from "./PopUp.module.css"


function PolicyPopUp({ popupp, setpopupp }) {
  
  return popupp ? (
    <div className={style.ncbpopupbody}>
      <div className={style.congradiv}>
        <p>Congratulations</p>
        <h3
          onClick={() => {
            setpopupp(false);
          }}
          
        >&times;</h3>
      </div>
      <div className={style.ncbdiv}>Your NCB has been increased to 20%</div>
      <div>
        
       
          <button onClick={ () => {
            
            const data = {
              ncb:20
            }
            localStorage.setItem("ncb", JSON.stringify(data.ncb));
            window.location.href = "http://localhost:3000/policyplan";
          }} className={style.popupbtn}>Continue</button>
 
      </div>
    </div>
  ) : (
    ""
  );
}

export default PolicyPopUp;
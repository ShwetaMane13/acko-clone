// import "../AdditionalDetails/AdditionalDetails.css"
import Header from "../../Headers/Hearder";
import "./FinalDetails.css"

export const FinalDetails = () => {

    let user = JSON.parse(localStorage.getItem("userDetails"));
    // console.log(user);

    return (
       
       <div>
           <Header />
            <div className="main_div_final">
            <div className="left_div">

            <hr className="fd_tracker_hr"/>
               <div className="fd_tracker_div">
                   {/* <p>Enter Details</p> */}
                   <div className="fd_tracker green">1</div>
                   <div className="fd_tracker green">2</div>
                   <div className="fd_tracker green">3</div>
               </div>

               <div className="fd_tracker_text">
                   <p>Enter Details</p>
                   <p>Verify Phone</p>
                   <p className="fd_black">Review & Pay</p>
               </div>


               <p className="verify_deets_heading">Verify all details</p>

               <div className="verify_deets_text">
               All the information below will show up on your policy. Make sure that everything
                (especially highlighted with ) is correct for a hassle free experience.
               </div>

               <div className="cod_div">

                   <p className="cod_text">Car Owner Details</p>

                   <div className="cod_content top">
                       <p>Full Name (As per RC copy)</p>
                       <p className="cod_rt">{user.name}</p>
                   </div>

                   <div className="cod_content">
                       <p>Email</p>
                       <p className="cod_rt">{user.email}</p>
                   </div>

                   <div className="cod_content">
                       <p>Mobile</p>
                       <p className="cod_rt">{user.mobileNumber}</p>
                   </div>
               </div>



               <div className="car_deets">
                   <p className="cd_deets">Car Details</p>

                   <div className="cod_content top">
                       <p>Car Number</p>
                       <p className="cod_rt">MH43V8585</p>
                   </div>

                   <div className="cod_content">
                       <p>Make Model</p>
                       <p className="cod_rt">Toyota Innova</p>
                   </div>

                   <div className="cod_content">
                       <p>Variant</p>
                       <p className="cod_rt"></p>
                   </div>

                   <div className="cod_content">
                       <p>Fuel Type</p>
                       <p className="cod_rt"></p>
                   </div>

                   <div className="cod_content">
                       <p>Insured Value</p>
                       <p className="cod_rt"></p>
                   </div>

                   <div className="cod_content">
                       <p>Purchase Year</p>
                       <p className="cod_rt"></p>
                   </div>

                   <div className="cod_content">
                       <p>Last Claim in</p>
                       <p className="cod_rt"></p>
                   </div>

                   <div className="cod_content">
                       <p>PA Cover</p>
                       <p className="cod_rt"></p>
                   </div>
               </div>

               <hr className="cd_hr"/>

               <div className="wa_div">
                    <img className="wa_img" src="https://img.icons8.com/ios/50/000000/whatsapp--v1.png" alt=""/>
                   <p className="wa_text">Get policy updates on WhatsApp</p>
                   <input className="wa_cb" type="checkbox" />
               </div>
               
            </div>

            <div className="fd_car_model_div">
                    <p className="fd_car_model_text">Comprehensive - Standard</p>
                </div>

                <div className="fd_right_div">
                    
                    <div>
                        <p className="comp_heading">Comprehensive - Standard</p>
                        <p className="premium_breakup">Hide Premium Breakup</p>
                    </div>

                    <div className="fd_breakdown">
                        <div className="fd_item">
                            <p>Own Damage Premium</p>
                            <p className="fd_price_value">&#8377;0</p>
                        </div>

                        <div className="fd_item">
                            <p>NCB Discount</p>
                            <p className="fd_price_value fd_ncb_discount_text">&#8377;0</p>
                        </div>

                        <div className="fd_item">
                            <p>Third Party Premium</p>
                            <p className="fd_price_value">&#8377;0</p>
                        </div>

                        <div className="fd_item">
                            <p>Consumables Premium</p>
                            <p className="fd_price_value">&#8377;0</p>
                        </div>

                        <div className="fd_item">
                            <p>Net Premium</p>
                            <p className="fd_price_value">&#8377;0</p>
                        </div>

                        <div className="fd_item fd_gst">
                            <p>GST</p>
                            <p className="fd_price_value">&#8377;0</p>
                        </div>

                        <div className="fd_item total_div">
                            <p className="fd_total_tag">Total</p>
                            <p className="fd_total_value">&#8377;0</p>
                        </div>
                    </div>

                    <div className="offers_div">
                        <p className="offers_text">Offers</p>
                        <div className="oi_div">
                        <input className="offers_input" type="text" placeholder="Enter Promocode" />
                        <button className="apply_button">Apply</button>
                        </div>
                    </div>
                </div>

                <div className="footer_div">
                    <button onClick={() => {
                        window.location.href = "http://localhost:3000/otppage";
                    }} className="buynow_button">Buy Now</button>
                </div>
        </div>
       </div>

        
    )
}
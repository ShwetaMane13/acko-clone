import "../AdditionalDetails/AdditionalDetails.css"
import "./FinalDetails.css"

export const FinalDetails = () => {

    let user = JSON.parse(localStorage.getItem("userDetails"));
    console.log(user);

    return (
        <div className="main_div_final">
            <div className="left_div">

            <hr className="tracker_hr"/>
               <div className="tracker_div">
                   {/* <p>Enter Details</p> */}
                   <div className="tracker">1</div>
                   <div className="tracker">2</div>
                   <div className="tracker green">3</div>
               </div>

               <div className="tracker_text">
                   <p>Enter Details</p>
                   <p>Verify Phone</p>
                   <p className="black">Review & Pay</p>
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

            <div className="car_model_div">
                    <p className="car_model_text">Comprehensive - Standard</p>
                </div>

                <div className="right_div">
                    
                    <div>
                        <p className="comp_heading">Comprehensive - Standard</p>
                        <p className="premium_breakup">Hide Premium Breakup</p>
                    </div>

                    <div className="breakdown">
                        <div className="item">
                            <p>Own Damage Premium</p>
                            <p>0</p>
                        </div>

                        <div className="item">
                            <p>NCB Discount</p>
                            <p>0</p>
                        </div>

                        <div className="item">
                            <p>Third Party Premium</p>
                            <p>0</p>
                        </div>

                        <div className="item">
                            <p>Consumables Premium</p>
                            <p>0</p>
                        </div>

                        <div className="item">
                            <p>Net Premium</p>
                            <p>0</p>
                        </div>

                        <div className="item gst">
                            <p>GST</p>
                            <p>0</p>
                        </div>

                        <div className="item total_div">
                            <p className="total_tag">Total</p>
                            <p className="total_value">0</p>
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
                    <button className="buynow_button">Buy Now</button>
                </div>
        </div>

        
    )
}
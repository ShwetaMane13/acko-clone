import { useState } from "react"
import "./AdditionalDetails.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../Headers/Hearder";

export const AdditionalDetails = () => {

    const [form, setForm] = useState({});

    const handleChange = ({target: {name, value}}) => {
        // console.log(name, value);
        setForm({...form, [name]:value})
    }

    const handleClick = (e) => {
        e.preventDefault()
        var email = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        var carNumber = new RegExp("^[A-Z|a-z]{2}([1-9]{1}|[0-9]{2})[A-Z|a-z]{0,2}[0-9]{4}$");

        if(form.name.length < 5)
        {
            alert("Please enter correct Username");
            return;
        }
        if(form.mobileNumber.length !== 10)
        {
            alert("Please enter correct Mobile Number");
            return;
        }
        if(!email.test(form.email))
        {
            alert("Please enter correct Email");
            return;
        }
        if(!carNumber.test(form.carNumber))
        {
            alert("Please enter correct Car Number");
            return;
        }

       if(localStorage.getItem("userDetails") === null)
       {
           localStorage.setItem("userDetails", JSON.stringify());
       }
        localStorage.setItem("userDetails", JSON.stringify(form));
    }


    let currentPremium = JSON.parse(localStorage.getItem("currentPremium"));
    let ncbDiscount = JSON.parse(localStorage.getItem("ncbDiscount"));
    let addOns = JSON.parse(localStorage.getItem("addOns"));


    let odPremium = Math.floor(+(currentPremium)*0.4);
    let tpPremium = Math.floor(+(currentPremium)*0.6);
    
    localStorage.setItem("ownDamagePremium", JSON.stringify(odPremium));
    localStorage.setItem("thirdPartyPremium", JSON.stringify(tpPremium));

    let total = +(currentPremium) + Math.floor(+(currentPremium)*0.18);
    let gst = Math.floor(+(currentPremium)*0.18);

    localStorage.setItem("gst", JSON.stringify(gst ))


    localStorage.setItem("total", JSON.stringify(total))
    // console.log(pricingDeets)

    let flag = 0;

    const handleButton = (e) => {
      e.preventDefault()
        console.log(e.target.value);
        if (flag === 1) {
          //console.log("here");
          e.target.parentElement.style.border = "none";
          flag = 0;
        } else {
          flag = 1;
          e.target.parentElement.style.border = "1px solid #8C76DF";
          e.target.parentElement.style.width = "120px";
          e.target.parentElement.style.borderRadius = "6px";
    }
}
    

    const previousInsurer = ["Acko General Insurance", 
                             "Bajaj Allianz General Insurance Co. Ltd",
                             "DHFL General Insurance Limited",
                             "Edelweiss General Insurance Company Limited",
                             "Future Generali India Insurance Company Limited",
                             "HDFC ERGO General Insurance Co. Ltd",
                             "ICICI Lombard General Insurance Co. Ltd",
                             "Kotak Mahindra General Insurance Company Limited",
                             "Liberty Videocon General Insurance Company Limited",
                             "Reliance General Insurance Co. Ltd."]

    return (
      <div>
        <Header />
        <div className="main_div_additional">
                <div className="left_div">
                    <hr className="tracker_hr"/>
                    <div className="tracker_div">
                        
                        <div className="tracker green">1</div>
                        <div className="tracker">2</div>
                        <div className="tracker">3</div>
                    </div>

                    <div className="tracker_text">
                        <p className="black">Enter Details</p>
                        <p>Verify Phone</p>
                        <p>Review & Pay</p>
                    </div>

                        <h2 className="ad_main_heading">Answer a few more questions</h2>

                            <div className="info_message">
                                <p>We ask for minimum information required to issue your policy. 
                                    You can always add additional details like nominee details
                                    & address post policy issuance.</p>
                            </div>
                                <form onSubmit={handleClick}>
                                    {/* name */}
                                    <input onChange={handleChange} type="text" name="name" placeholder="Full Name (as per RC)" />
                                
                                    {/* email */}
                                    <input onChange={handleChange} type="text" name="email" placeholder="Email"/>
                                
                                    <p className="email_info">Ensure you never miss out on important policy 
                                        updates by entering you most-used email</p>
                                    
                                    {/* mobile number */}
                                    <input onChange={handleChange} type="tel" name="mobileNumber" placeholder="Mobile Number" />
                                    <p className="email_info">OTP will be sent to the given number</p>
                                    
                                    {/* car number */}
                                    <input onChange={handleChange} type="text" name="carNumber" placeholder="Car Number"/>
                                    
                                    {/* previous insurer */}
                                    <select onChange={handleChange} name="Previous Insurer" >
                                        <option value="#">Previous Insurer</option>
                                        {
                                            previousInsurer.map((e, i) => {
                                                return <option key={i} className="option" value="">{e}</option>
                                            })
                                        }
                                    </select>

                                    {/* when should the policy start */}
                                    <p className="when">When should new policy start?</p>
                                    
                                    <div onChange={handleChange} className="when_input">
                                    <div>
                                        <button onClick={handleButton} className="button">Tomorrow</button>
                                    </div>
                                    <DatePicker onChange = {handleButton} placeholderText="Choose Date" className="date_picker"/>
                                        {/* <button className="button choose_date">Choose Date</button>
                                    </DatePicker> */}
                                    </div>

                                    <div className="bottom_div">

                                        <div className="div_one">
                                            <input onChange={handleChange} name="isComprehensive" className="checkbox" type="checkbox" />
                                            <p className="is_comprehensive">My current policy is a comprehensive policy</p>
                                        </div>

                                        <hr />

                                        <div className="div_two">
                                            <div>You will recieve your policy instantly
                                                as you make the payment,
                                                and your policy will start 
                                                at 12 am, from your choosen date.
                                            </div>
                                            <img className="calendar_svg" src="https://ackoclone-huxly123.vercel.app/static/media/calender.8df16bef.svg" alt=""/>

                                        </div>

                                        <hr />

                                        <div className="div_three">
                                            <img className="previous_policy" src="https://ackoclone-huxly123.vercel.app/static/media/note.1de65e33.svg" alt="" />
                                            <div>
                                            <span className="bold">Please note</span> : Previous year policy document is required in 
                                            case of claim within 30 days of the Acko Policy start date
                                            </div>
                                        </div>
                                    </div>

                                    <p className="terms_conditions">By tapping on continue I declare that i have provided 
                                        correct details and have read Acko’s <a href="#"> T&C.</a></p>

                                    <button className="continue_button">Continue</button>
                                </form>
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
                                    <p className="price_value">&#8377;{odPremium}</p>
                                </div>

                                <div className="item">
                                    <p>NCB Discount</p>
                                    <p className="ncb_discount_text price_value">-&#8377;{ncbDiscount}</p>
                                </div>

                                <div className="item">
                                    <p>Third Party Premium</p>
                                    <p className="price_value">&#8377;{tpPremium}</p>
                                </div>

                                <div className="item">
                                    <p>Consumables Premium</p>
                                    <p className="price_value">&#8377;141</p>
                                </div>

                                <div className="item">
                                    <p>Add ons</p>
                                    <p className="price_value">&#8377;{addOns}</p>
                                </div>

                                <div className="item">
                                    <p>PA Cover</p>
                                    <p className="price_value">&#8377;0</p>
                                </div>

                                <div className="item">
                                    <p>Net Premium</p>
                                    <p className="price_value">&#8377;{+(currentPremium)}</p>
                                </div>

                                <div className="item gst">
                                    <p>GST</p>
                                    <p className="price_value">&#8377;{gst}</p>
                                </div>

                                <div className="item total_div">
                                    <p className="total_tag">Total</p>
                                    <p className="total_value price_value">&#8377;{total}</p>
                                </div>
                            </div>
                        </div>
                </div>
      </div>
    )
}
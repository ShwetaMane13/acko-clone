import { useState } from "react"

export const AdditionalDetails = () => {

    const [form, setForm] = useState({});

    const handleChange = ({target: {name, value}}) => {
        console.log(name, value);
        setForm({...form, [name]:value})
    }

    const handleClick = () => {
        console.log(form)
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
        <div className="main_div_additional">
           <div className="left_div">
               <hr className="tracker_hr"/>
               <div className="tracker_div">
                   {/* <p>Enter Details</p> */}
                   <div className="tracker green">1</div>
                   <div className="tracker">2</div>
                   <div className="tracker">3</div>
               </div>

               <div className="tracker_text">
                   <p className="black">Enter Details</p>
                   <p>Verify Phone</p>
                   <p>Review & Pay</p>
               </div>

                <h2>Answer a few more questions</h2>

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
                            <input onChange={handleChange} type="number" name="mobileNumber" placeholder="Mobile Number" />
                            <p className="email_info">OTP will be sent to the given number</p>
                            
                            {/* car number */}
                            <input onChange={handleChange} type="text" name="carNumber" placeholder="Car Number"/>
                            
                            {/* previous insurer */}
                            <select onChange={handleChange} name="Previous Insurer" >
                                <option value="#">Previous Insurer</option>
                                {
                                    previousInsurer.map((e) => {
                                        return <option className="option" value="">{e}</option>
                                    })
                                }
                            </select>

                            {/* when should the policy start */}
                            <p className="when">When should new policy start?</p>
                            
                            <div onChange={handleChange} className="when_input">
                                <button className="button">Tomorrow</button>
                                <button className="button choose_date">Choose Date</button>
                            </div>

                            <div className="bottom_div">

                                <div className="div_one">
                                    <input onChange={handleChange} name="isComprehensive" className="checkbox" type="checkbox" />
                                    <p>My current policy is a comprehensive policy</p>
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
                </div>
        </div>
    )
}
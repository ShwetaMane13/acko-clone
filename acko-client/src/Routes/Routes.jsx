import { CartypePage } from "../components/Cars/CarType/CartypePage";
import { Route, Routes } from "react-router-dom";
import { CarPincodePage } from "../components/Cars/CarsPincode/CarsPincodePage";
import { CurrentPolicyPage } from "../components/Cars/CurrentPolicy/CurrentPolicyPage";
import { ExpiryDatePage } from "../components/Cars/ExpiryDate/ExpiryDatePage";
import { LastPolicyPage } from "../components/Cars/LastPolicy/LastPolicyPage";

import { NumberPlatePage } from "../components/Cars/NumberPlate/NumberPlatePage";
import { PolicyExpiringPage } from "../components/Cars/Policyexpiring/PolicyExpiringPage";
import { MonthPurchasePage } from "../components/Cars/MonthOfPurchase/MonthPurchasePage";
import { UseofCarPage } from "../components/Cars/Useofcar/UseofCarPage";
import { WhenPolicyPage } from "../components/Cars/WhenPolicyexpired/WhenpolicyPage";
import { YearPurchasePage } from "../components/Cars/YearOfPurchase/YearPurchasePage";
import { Home } from "../components/Homepage/Home";
import { PolicyPlan } from "../components/Cars/PolicyPlan/PolicyPlan";
import { PolicyPlanDetails } from "../components/Cars/PolicyPlan/PolicyPlanDetails";
import { AdditionalDetails } from "../components/Cars/AdditionalDetails/AdditionalDetails";
import { FinalDetails } from "../components/Cars/FinalDetails/FinalDetails";
import Payment from "../components/Paymentpages/Payment";
import { CarDetailPage } from "../components/Cars/CarDetails/CarDetailPage";
import { Otppage } from "../components/Cars/OTP_Page/Otp_page";
const Routepage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/car/car-type" element={<CartypePage />}></Route>
      <Route path="/car/car-pincode" element={<CarPincodePage />}></Route>
      <Route path="/car/car-policy" element={<CurrentPolicyPage />}></Route>
      <Route path="/car/expiry-date" element={<ExpiryDatePage />}></Route>
      <Route path="/car/last-policy" element={<LastPolicyPage />}></Route>
      <Route path="/car/month-purchase" element={<MonthPurchasePage />}></Route>
      <Route path="/car/car-plate" element={<NumberPlatePage />}></Route>
      <Route path="/car/car-details" element={<CarDetailPage />}></Route>
      <Route path="/car/policy-expire" element={<PolicyExpiringPage />}></Route>
      <Route path="/car/car-use" element={<UseofCarPage />}></Route>
      <Route
        path="/car/when-policy-expired"
        element={<WhenPolicyPage />}
      ></Route>
      <Route path="/car/purchased-year" element={<YearPurchasePage />}></Route>
      <Route path="/policyplan" element={<PolicyPlan />}></Route>
      <Route path="/policyplan-details" element={<PolicyPlanDetails />}></Route>
      <Route path="/additionaldetails" element={<AdditionalDetails />}></Route>
      <Route path="/otppage" element={<Otppage />}></Route>
      <Route path="/finaldetails" element={<FinalDetails />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  );
};

export default Routepage;

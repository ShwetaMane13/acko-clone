import  Expiry from "./Expiry";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";

export const ExpiryDatePage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <Expiry/>
        </div>
        <div className="divflex2"></div>
      </div>
    </div>
  );
};
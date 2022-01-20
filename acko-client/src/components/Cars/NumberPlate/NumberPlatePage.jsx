import NumberPlate from "./NumberPlate";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";

export const NumberPlatePage = () => {
    return (
      <div>
        <Header />
        <Middle />
        <div className="divflex">
          <div className="divflex1">
           <NumberPlate/>
          </div>
          <div className="divflex2"></div>
        </div>
      </div>
    );
  };
  
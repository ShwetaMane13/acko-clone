import  CarType from "./CarType";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";

export const CarTypePage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <CarType />
        </div>
        <div className="divflex2"> </div>
      </div>
    </div>
  );
};

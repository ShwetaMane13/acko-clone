import  CarDetails from "./CarDetails";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";

export const CarDetailPage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <CarDetails/>
        </div>
        <div className="divflex2"></div>
      </div>
    </div>
  );
};

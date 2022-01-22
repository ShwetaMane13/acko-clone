import CarsPincode from "./CarsPincode";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";
import { Dynamic } from "../Dynamic/Dynamic";

export const CarPincodePage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <CarsPincode />
        </div>
        <div className="divflex2">
          <Dynamic />{" "}
        </div>
      </div>
    </div>
  );
};

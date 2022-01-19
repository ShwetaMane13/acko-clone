import { Cartype } from "./Cartype";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";

export const CartypePage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <Cartype />
        </div>
        <div className="divflex2"></div>
      </div>
    </div>
  );
};

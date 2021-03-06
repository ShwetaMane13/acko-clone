import Expiry from "./Expiry";
import Header from "../../Headers/Hearder";
import Middle from "../../Middle/Middle";
import "../carstypepage.css";
import { Dynamic } from "../Dynamic/Dynamic";

export const ExpiryDatePage = () => {
  return (
    <div>
      <Header />
      <Middle />
      <div className="divflex">
        <div className="divflex1">
          <Expiry />
        </div>
        <div className="divflex2">
          <Dynamic />
        </div>
      </div>
    </div>
  );
};

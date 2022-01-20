import "./App.css";
import { CarPincodePage } from "./components/Cars/CarsPincode/CarsPincodePage";
import {NumberPlatePage} from "./components/Cars/NumberPlate/NumberPlatePage";
import Cartype from "./components/Cars/CarType/CarType";
import {CarDetailPage} from "./components/Cars/CarDetails/CarDetailPage";
function App() {
  return <div>
   <NumberPlatePage/>
   <CarPincodePage/>
    <CarDetailPage/>
  </div>;

}

export default App;

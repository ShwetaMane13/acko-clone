import "./homepage.css"
import { Navbar } from "./Navbar"
import { CarForm } from "./CarForm";
import { UserReviews } from "./UserReviews";
import HomeMiddle from "./HomeMiddle";

export const Home = () => {
    return (
        <div className="home_home">
            <Navbar />
            <CarForm />
            <UserReviews />
            <HomeMiddle />
        </div>
    )
}
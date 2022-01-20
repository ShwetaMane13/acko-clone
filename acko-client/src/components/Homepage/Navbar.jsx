import { useState } from "react";
import logo from "./images/white-logo.png";
import { NavContentOne } from "./NavContentOne";
import { NavContentThree } from "./NavContentThree";
import { NavContentTwo } from "./NavContentTwo";

export const Navbar = () => {

    const [displayProducts, setDisplayProducts] = useState("none");
    const [displayResources, setDisplayResources] = useState("none");
    const [displayLogin, setDisplayLogin] = useState("none");

    const applyStylesProducts = {
        "display": `${displayProducts}`
    }

    const applyStylesResources = {
        "display": `${displayResources}`
    }

    const applyStylesLogin = {
        "display": `${displayLogin}`
    }

    return (
        <div className="nav_div">

            <div className="nav_left">
                <div >
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div 
                onMouseEnter={() => {setDisplayProducts("block")}} 
                onMouseLeave={() => {setDisplayProducts("none")}}
                className="nav_text products">
                    Products
                </div>
                
                <div  onMouseEnter={() => {setDisplayResources("block")}} 
                      onMouseLeave={() => {setDisplayResources("none")}} 
                      className="nav_text">
                    Resources
                </div>
            </div>

           

            <div className="nav_right">
                <div className="nav_claim">
                    <p className="claim_text">Claim, edit, renew & more</p>
                    <button
                     onMouseEnter={() => {setDisplayLogin("block")}} 
                     onMouseLeave={() => {setDisplayLogin("none")}} 
                     className="login_button">Login</button>
                </div>

                <div className="nav_help">Help</div>
            </div>
            
            <div className="hidden_nav">
            <NavContentOne applyStyles={applyStylesProducts}/>
            <NavContentTwo  applyStyles={applyStylesResources}/>
            <NavContentThree applyStyles={applyStylesLogin}/>
            </div>
        </div>

        
    )
    
}
import React from "react";
import { LOGO_URL } from "../utils/constants" 
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);

    // Subscribing the store using our selector
    const cartItems = useSelector( (store) => store.cart.items );
    // console.log(cartItems);


    return (
        <div className="flex justify-between items-center bg-yellow-100 shadow-lg mb-2 w-full h-20 sm:bg-pink-100">
            
            <div className="logo-container">
                <img className="w-16 m-2 mix-blend-multiply" src= {LOGO_URL} />
            </div>
            
            <div className="text-center">

                <ul className="flex m-2 ">
                    <li className="p-2">
                        OnlineStatus: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="p-2">
                        <Link to= "/">Home</Link>
                    </li>
                    <li className="p-2">
                        <Link to= "/about">About us</Link>
                    </li>
                    <li className="p-2">
                        <Link to = "/contact">Contact</Link>
                    </li>
                    <li className="p-2">
                        <Link to = "/grocery">Grocery</Link>
                    </li>
                    <li className="p-2 font-bold">
                        <Link to = "/cart">Cart - ({cartItems.length} items)</Link>
                    </li>

                    <button 
                    className="px-2" 
                    onClick={() => {
                        btnNameReact === "Login" 
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact("Login"); 
                    }}>{btnNameReact}
                    </button>

                    <li className="p-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>
            
        </div>
 
    );
};

export default Header; 
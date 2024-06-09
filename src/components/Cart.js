import React from "react";
import ItemList from "./itemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-center m-4 p-4">Cart</h1>
            {/* <h2 className="m-4 p-4 text-center">Your item list is here.</h2> */}
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length == 0 && <div className="m-0 flex flex-col items-center justify-center text-center w-full h-[100vh-80px]">
                    <div className="w-[271px] h-[256px] bg-cover">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"/>
                    </div>
                    <div className="m-0 p-0 mt-2 text-center font-bold text-xl">Your cart is empty</div>
                    <div className="m-0 p-0 mt-2 text-center">You can go home page to view more restaurants</div>
                    <button className="bg-orange-500 mt-7 mb-7 py-2 px-5 uppercase font-bold text-white">
                        <Link to= "/">see restaurants near you</Link>
                    </button>
                </div>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;
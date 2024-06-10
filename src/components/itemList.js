import React from "react";
import {  CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";



const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item));
    };
    
    return (
    <div className="m-0 p-0">
        <div>
            {items.map((item) => (
            <div data-testid="foodItems" className="py-2">
            <div className="mx-3 flex flox-row border-b-2">
                <div key = {item.card.info.id} className = "w-9/12 flex flex-col">
                    <div className="flex flex-col">
                        <span className="mt-3 font-bold">{item.card.info.name}</span>
                        <span className="mt-3 font-semibold">₹{item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                        <span className="mt-3">Ratings</span>
                        <p className="mt-3 text-sm">{item.card.info.description}</p>
                    </div>
                </div>
                <div className="p-0 w-3/12 bg-contain">
                    <img src={CDN_URL + item.card.info.imageId} className=" rounded-lg"/>
                    <button className="right-[7px] relative bottom-7 translate-x-2/4 z-[1px]">
                        < div className="flex flex-col justify-center items-center">
                            <div className="mt-2 w-[100px] h-[30px] font-semibold text-center text-green-300 bg-white rounded-lg border" onClick={() => handleAddItem(item)}>Add</div>
                            <p className="text-xs font-light">Customisable</p>
                        </div>
                    </button>
                </div>
            </div>
            </div>
            ))}
        </div>
     </div>
    )
};

export default ItemList;
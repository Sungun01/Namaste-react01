import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { loggedInUser } = useContext(UserContext);

    const {
        cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

    return (
        <div data-testid="rescard"
            className="m-2 w-[300px] overflow-hidden rounded-3xl h-[400px] shadow-2xl border hover:scale-95 duration-300 transition-transform">
            <div className="h-[200px]">
                <div> 
                    <img className="h-[200px] w-full bg-cover bg-center" 
                    alt="res-logo"
                    src={ CDN_URL + cloudinaryImageId}/>
                </div>
            </div>
             
            <div className="p-4 h-[100px] font-sans">
                <h3 className=" text-lg font-bold">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} Stars - {costForTwo}</h4>
                <h5>{sla?.slaString}</h5>
                <h5>User : {loggedInUser}</h5>
            </div>
        </div>
    );

};

export const withPromotedLabel = (RestaurantCard) => {

    return(props) => {
        return(
            <div>
                <label className=" hover:scale-95 duration-300 transition-transform absolute bg-black  text-white p-2 m-3 mx-6 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div> 
        );  
    };
};


export default RestaurantCard;
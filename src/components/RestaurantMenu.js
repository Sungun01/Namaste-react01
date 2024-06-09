import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Link } from "react-router-dom";
import { CYCLE_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {

    // const [ resInfo, setResInfo ] = useState(null);
    
    const {resId} = useParams();

    const resInfo = useRestaurantMenu( resId );

    const [ showIndex, setShowIndex ] = useState(null); 

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch( MENU_API_URL + resId);

    //     const json = await data.json();
    //     setResInfo(json.data);

    // };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, avgRating, costForTwoMessage, sla, totalRatingsString } = 
        resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    const categories = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (C) => 
                C.card?.card?.["@type"] ==
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        // console.log(categories);




    return (
            <div className="">
                <div className=" block m-0 p-0 box-inherit">
                    <div className="max-w-[800px] min-h-[800px] my-4 mx-auto">
                        <div className="h-[60px] w-full">
                            <div className=" flex h-[30px] max-w-[700px] min-w-[700px] ml-0 z-10 items-center relative text-sm">
                            <span className="mx-2">
                                <Link to= "/"> Home</Link>
                            </span>
                            <span>/</span>
                            <span className="mx-2 ">
                                <Link to= "https://www.swiggy.com/city/bangalore">Bengaluru</Link>
                                </span>
                            <span>/</span>
                            <span className="mx-2">
                                <Link to="http://localhost:62912/restaurants/323511">Pizza Hut</Link>
                            </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center ml-4 mb-2 font-bold text-3xl"> 
                            <h1>{name}</h1>
                        </div>
                        <div className="mx-4 border-b-8">
                            <div className="flex flex-col rounded-lg bg-white shadow-xl">
                                <div className="flex mx-4 font-bold">
                                    <div>{avgRating}({totalRatingsString})</div>
                                    <div className="mx-4"> -    {costForTwoMessage}</div>
                                </div>
                                <div className="mx-4">{cuisines.join(", ")}</div>
                                <div className="mx-4"></div>
                            </div>
                        </div>
                        {/* categories accordians */}
                        {categories.map((Category, index) => (
                            <RestaurantCategory 
                            key={Category?.card?.card?.title} 
                            data = {Category?.card?.card} 
                            showItems={index == showIndex ? true : false}
                            setShowIndex = {() => setShowIndex(index)}
                            />
                        ))}
                    </div>
                </div>
             </div>
    );
};



export default RestaurantMenu;
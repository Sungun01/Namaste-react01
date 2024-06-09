import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [ listOfRestaurants, setListOfRestaurants ] = useState([]);
    const [ filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [ searchText, setSearchText ] = useState(" ");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // console.log("Body Rendered")

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9122238&lng=77.5923219&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();


        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus(); 
    
    if( onlineStatus === false) 
        return (
        <h1>
            Look's like you are offline!! Please check your internet connection.
        </h1>
        );

        const { loggedInUser, setUserName } = useContext(UserContext);


    return listOfRestaurants.length === 0 ? (
        < Shimmer /> 
    ) : (
        <div className="body">

            <div data-testid = "searchInput" className="flex items-center justify-center">
                <div className="search m-2 p-2">
                    <input 
                    type="text" 
                    className="border border-solid border-black rounded-md" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    
                    <button 
                    className= "m-2 px-2 border border-solid rounded-md bg-gray-400 transition-colors duration-300 text-white hover:bg-gray-600 shadow-lg" 
                    onClick={() => {
                        // console.log(searchText);
            
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        Search
                    </button>
                </div>

                <div className="m-2">
                <button 
                className=" m-2 px-2 border border-solid rounded-lg bg-green-400 transition-colors duration-300 hover:bg-green-600  text-white shadow-lg" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4    
                    );
                    setListOfRestaurants(filteredList);
                }}
                > 
                    Top Rated Restaurants    
                </button>
                </div>

                <div>
                    <label>Username : </label>
                    <input className="border border-black px-2" 
                    value = {loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>

            </div>

            <div className=" flex flex-wrap items-center justify-center">
                {filteredRestaurant.map((restaurants) => (
                    <Link 
                        key = {restaurants.info.id} 
                        to={"/restaurants/" + restaurants.info.id}>
                            {restaurants.info.aggregatedDiscountInfoV3 ? 
                                (<RestaurantCardPromoted resData = {restaurants} />) 
                                        : (<RestaurantCard resData ={restaurants}/>)
                            } 
                    </Link>
                    ))
                }
            </div>
        </div>
    );
};



export default Body;
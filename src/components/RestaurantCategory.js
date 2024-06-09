import React from "react";
import ItemList from "./itemList";

const ResCategory = ({ data, showItems, setShowIndex }) =>{


    const handleClick = () => {
        setShowIndex();
    };
    return(
        <div>
            <div className="mx-4 shadow-md rounded-lg">
            {/* Accordian Header */}
                <div className="mx-auto h-[40px] flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <span className="mx-4 font-bold">{data.title} ({data.itemCards.length})</span>
                    <span className="mx-4">🔽</span>
                </div>
            {/* Accordian Body */}
                <div className="mx-4 mt-2">
                    {showItems && <ItemList items={data.itemCards}/>}
                </div>
            </div>
        </div>
    )
};

export default ResCategory;
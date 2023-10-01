import React, { useState } from "react";
import ItemDetailsPopup from "./ItemDetailsPopup";

const ItemCard = ({ id, name, category, description, seller_id, condition, created_at, price }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);


    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };


    return (
        <div className="w-[260px] sm:w-[300px] md:w-[340px] h-min m-4 p-4 flex flex-col rounded-[10px] items-center shadow-md">

            <img src="#" className="w-[250px] sm:w-[280px] md:w-[320px] aspect-square object-cover " alt="item image" />


            <div className="my-[10px] mx-[5px] w-[250px] xs:w-[240px sm:w-[280px] md:w-[320px]">
                <div className="">
                    <h4 className="text-[#1faa59] text-xl font-bold">&#8377; {price}</h4>
                    <h4 className="text-2xl">{name}</h4>
                </div>
                <div className="max-w-[260px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {description}
                </div>
            </div>


            <button className="mt-[14px] py-[10px] px-[60px] border border-blue-700 cursor-pointer
             rounded-md text-[18px] font-bold bg-blue-500 hover:bg-blue-600 text-white
             transition-all duration-300 ease-out
             "
                onClick={togglePopup}>
                See Details
            </button>

            {isPopupVisible && (
                <ItemDetailsPopup
                    id={id}
                    name={name}
                    category={category}
                    description={description}
                    seller_id={seller_id}
                    condition={condition}
                    created_at={created_at}
                    price={price}
                    onClose={togglePopup} // Pass the function to close the popup
                />
            )}





        </div>
    )
}

export default ItemCard;
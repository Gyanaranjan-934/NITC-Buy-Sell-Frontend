import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import ProductContext from "../context/product/ProductContext";
import { useEffect } from "react";


const DashboardItemCollection = ({ searchParam }) => {

    const {allProducts} = useContext(ProductContext)
    const [filteredItems, setFilteredItems] = useState([]);


    useEffect(() => {
        // filter the products based on the product name and product category
        if(!searchParam) {
            setFilteredItems(allProducts);
        } else{
            const filteredProducts = allProducts.filter((item) => {
                const nameMatch = item.name.toLowerCase().includes(searchParam.toLowerCase());
                const categoryMatch = item.categoryName.toLowerCase().includes(searchParam.toLowerCase());

                return nameMatch || categoryMatch;
            });

            setFilteredItems(filteredProducts);
        }
        // console.log(items)
        // console.log(searchParam)
    },[searchParam, allProducts])
    // console.log(allProducts);
    // this datafile just pasted here for testing
    const items = allProducts
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="sm:text-xl sm:m-[4vh] md:text-lg md:m-[3vh] lg:text-4xl lg:m-[6vh]">
                Find Your Needs Here..
            </div>
            <div className="flex flex-row flex-wrap justify-center max-w-[1380px] my-0 mx-auto">
                {/* here fetch data from database, and put them all in card one by one using for loop */}

                {/* fetch data */}

                {filteredItems.length === 0 ?
                    (
                        <div>
                            <p>No items available</p>
                        </div>
                    ) :
                    <div className="flex flex-wrap justify-center max-w-[1380px] my-0 mx-auto">
                        {

                            filteredItems.map((item) => (
                                <ItemCard key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    category={item.categoryId}
                                    description={item.description}
                                    sellerId={item.sellerId}
                                    condition={item.pdt_condition}
                                    created_at={item.createdAt}
                                    price={item.item_price}
                                    imageUrl={item.image_url} />
                            ))
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default DashboardItemCollection;
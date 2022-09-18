import React, { useEffect, useState } from "react";
import { api } from "../../api";
import ProductCard from "../ProductCard";

const RelatedAppoinments = ({ category, id }) => {
    const [products, setProducts] = useState();
    useEffect(() => {
        api.getProductsByCategory(category).then((res) => {
            setProducts(res.splice(0, 5));
            console.log(res);
        });
    }, []);

    return (
        <div className="flex flex-col w-full">
            <div className="text-2xl w-full flex mb-4 justify-center font-thin">
                Related Products
            </div>
            <div className="flex overflow-x-visible w-full justify-center">
                <div className="flex items-center ">
                    {products &&
                        products.map((product) => {
                            if (product._id !== id)
                                return <ProductCard data={product} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default RelatedAppoinments;

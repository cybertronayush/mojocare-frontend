import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import { NotificationBannerContext } from "../NotificationBanner/NotificationContext";
import "./index.css";
import RelatedAppoinments from "./RelatedAppoinments";

const ProductDetails = () => {
    
    const { id } = useParams();
    const [productData, setProductData] = useState();
    const { setNotifyMessage } = useContext(NotificationBannerContext);

    const isProductInCart = (productId) => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            return cart.some((item) => item === productId);
        }
        return false;
    };
    const isProductInCartFlag = isProductInCart(id);
    const addToCardBgColor = isProductInCartFlag
        ? "bg-green-500"
        : "bg-blue-500";

    
    console.log(isProductInCartFlag, addToCardBgColor);

    useEffect(() => {
        api.getProductById(id).then((res) => {
            setProductData(res);
        });
    }, [id]);
    return (
        <>
            {productData && (
                <div>
                    <div className="product-container h-full w-full flex items-center">
                        <div className="product-image-container rounded-br relative bg-gray-100 w-2/5 h-full flex items-center justify-center">
                            <div className="product-category absolute top-4 left-8 text-gray-400 capitalize">
                                {productData.category} / {productData.name}
                            </div>
                            <div className="product-image flex justify-center bg-white  w-4/5">
                                <img
                                    className="w-full h-full p-8"
                                    src={productData.image}
                                    alt={productData.name}
                                />
                            </div>
                        </div>
                        <div className="product-info flex justify-around p-20 h-full flex-col w-3/5 p-8 bg-gray-50">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {productData.name}
                                </h1>
                                <div className="text-gray-600 text-base">
                                    Size: {productData.size}
                                </div>
                                <div className="flex justify-between">
                                    <div className="rating-stars my-2">
                                        <span className="star text-xl text-yellow-300">
                                            &#9733;
                                        </span>
                                        <span className="star text-xl text-yellow-300">
                                            &#9733;
                                        </span>
                                        <span className="star text-xl text-yellow-300">
                                            &#9733;
                                        </span>
                                        <span className="star text-xl text-yellow-300">
                                            &#9733;
                                        </span>
                                        <span className="star">&#9733;</span>
                                        <span className="ml-2 text-gray-600 text-sm">
                                            (5)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="product-description text-gray-500 text-sm font-bold my-4">
                                {productData.description}
                            </div>

                            <div className="flex items-end justify-between">
                                <div className="product-price text-2xl font-bold my-4 mr-4">
                                    ₹ {productData.price}
                                    <span className="ml-2 text-red-500 line-through text-base">
                                        {productData.price +
                                            productData.price / 10}
                                    </span>
                                </div>

                                <div className="product-quantity text-green-300 flex items-center text-lg font-bold my-4">
                                    Quantity:
                                    <select className="ml-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="product-add-to-cart text-gray-500 text-sm font-bold my-4">
                                <button
                                    // onClick={addToCart}
                                    className={`${addToCardBgColor} w-full hover:bg-green-400 text-white p-2 capitalize text-lg rounded-full`}
                                >
                                    {isProductInCartFlag ? (
                                        <>Added to Cart</>
                                    ) : (
                                        <>Add to Cart</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-8 flex items-center bg-gray-50">
                        <RelatedAppoinments
                            category={productData.category}
                            id={productData._id}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;

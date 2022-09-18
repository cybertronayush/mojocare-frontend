import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div>
            <div
                className="carousel relative container mx-auto"
                style={{ maxWidth: "1600px" }}
            >
                <div className="carousel-inner relative overflow-hidden w-full">
                    <input
                        className="carousel-open"
                        type="radio"
                        id="carousel-1"
                        name="carousel"
                        aria-hidden="true"
                        hidden
                        defaultChecked="checked"
                    />
                    <div
                        className="carousel-item absolute opacity-0"
                        style={{ height: "50vh" }}
                    >
                        <div
                            className="
                            block
                            h-full
                            w-full
                            mx-auto
                            flex
                            pt-6
                            md:pt-0 md:items-center
                            bg-cover bg-right
                        "
                            style={{
                                backgroundImage:
                                    'url("https://images.unsplash.com/photo-1597764690523-15bea4c581c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
                            }}
                        >
                            <div className="container mx-auto">
                                <div
                                    className="
                                    flex flex-col
                                    w-full
                                    lg:w-1/2
                                    md:ml-16
                                    items-center
                                    md:items-start
                                    px-6
                                    tracking-wide
                                "
                                >
                                    <p className="text-white text-3xl my-4">
                                        {/* Air Jordan 11 RED */}
                                    </p>
                                    <Link
                                        className="
                                        text-xl
                                        inline-block
                                        no-underline
                                        border-b border-gray-600
                                        leading-relaxed
                                        hover:text-gray-100 hover:border-black
                                    "
                                        to={`/product-details/6187b0893e626cf75b7a4c70`}
                                    >
                                       VIEW
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label
                        htmlFor="carousel-3"
                        className="
                        prev
                        control-1
                        w-10
                        h-10
                        ml-2
                        md:ml-10
                        absolute
                        cursor-pointer
                        hidden
                        text-3xl
                        font-bold
                        text-black
                        hover:text-white
                        rounded-full
                        bg-white
                        hover:bg-gray-900
                        leading-tight
                        text-center
                        z-10
                        inset-y-0
                        left-0
                        my-auto
                    "
                    >
                        ‹
                    </label>
                    <label
                        htmlFor="carousel-2"
                        className="
                        next
                        control-1
                        w-10
                        h-10
                        mr-2
                        md:mr-10
                        absolute
                        cursor-pointer
                        hidden
                        text-3xl
                        font-bold
                        text-black
                        hover:text-white
                        rounded-full
                        bg-white
                        hover:bg-gray-900
                        leading-tight
                        text-center
                        z-10
                        inset-y-0
                        right-0
                        my-auto
                    "
                    >
                        ›
                    </label>
                    <input
                        className="carousel-open"
                        type="radio"
                        id="carousel-2"
                        name="carousel"
                        aria-hidden="true"
                        hidden
                    />
                    <div
                        className="carousel-item absolute opacity-0 bg-cover bg-right"
                        style={{ height: "50vh" }}
                    >
                        <div
                            className="
                            block
                            h-full
                            w-full
                            mx-auto
                            flex
                            pt-6
                            md:pt-0 md:items-center
                            bg-cover bg-right
                        "
                            style={{
                                backgroundImage:
                                    'url("https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
                            }}
                        >
                            <div className="container mx-auto">
                                <div
                                    className="
                                    flex flex-col
                                    w-full
                                    lg:w-1/2
                                    md:ml-16
                                    items-center
                                    md:items-start
                                    px-6
                                    tracking-wide
                                "
                                ></div>
                            </div>
                        </div>
                    </div>
                    <label
                        htmlFor="carousel-1"
                        className="
                        prev
                        control-2
                        w-10
                        h-10
                        ml-2
                        md:ml-10
                        absolute
                        cursor-pointer
                        hidden
                        text-3xl
                        font-bold
                        text-black
                        hover:text-white
                        rounded-full
                        bg-white
                        hover:bg-gray-900
                        leading-tight
                        text-center
                        z-10
                        inset-y-0
                        left-0
                        my-auto
                    "
                    >
                        ‹
                    </label>
                    <label
                        htmlFor="carousel-3"
                        className="
                        next
                        control-2
                        w-10
                        h-10
                        mr-2
                        md:mr-10
                        absolute
                        cursor-pointer
                        hidden
                        text-3xl
                        font-bold
                        text-black
                        hover:text-white
                        rounded-full
                        bg-white
                        hover:bg-gray-900
                        leading-tight
                        text-center
                        z-10
                        inset-y-0
                        right-0
                        my-auto
                    "
                    >
                        ›
                    </label>
                    <input
                        className="carousel-open"
                        type="radio"
                        id="carousel-3"
                        name="carousel"
                        aria-hidden="true"
                        hidden
                    />
                    <div
                        className="carousel-item absolute opacity-0"
                        style={{ height: "50vh" }}
                    >
                        <div
                            className="
                            block
                            h-full
                            w-full
                            mx-auto
                            flex
                            pt-6
                            md:pt-0 md:items-center
                            bg-cover bg-bottom
                        "
                            style={{
                                backgroundImage:
                                    'url("https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
                            }}
                        >
                            <div className="container mx-auto">
                                <div
                                    className="
                                    flex flex-col
                                    w-full
                                    lg:w-1/2
                                    md:ml-16
                                    items-center
                                    md:items-start
                                    px-6
                                    tracking-wide
                                "
                                ></div>
                            </div>
                        </div>
                    </div>
                    <label
                        htmlFor="carousel-2"
                        className="
                        prev
                        control-3
                        w-10
                        h-10
                        ml-2
                        md:ml-10
                        absolute
                        cursor-pointer
                        hidden
                        text-3xl
                        font-bold
                        text-black
                        hover:text-white
                        rounded-full
                        bg-white
                        hover:bg-gray-900
                        leading-tight
                        text-center
                        z-10
                        inset-y-0
                        left-0
                        my-auto
                    "
                    >
                        ‹
                    </label>
                    <label
                        htmlFor="carousel-1"
                        className="
                        next
                        control-3
                        w-10
                        h-10
                        mr-2
                        md:mr-10
                        absolute
                        cursor-pointer
                        hidden
                        text-3xl
                        font-bold
                        text-black
                        hover:text-white
                        rounded-full
                        bg-white
                        hover:bg-gray-900
                        leading-tight
                        text-center
                        z-10
                        inset-y-0
                        right-0
                        my-auto
                    "
                    >
                        ›
                    </label>
                    <ol className="carousel-indicators">
                        <li className="inline-block mr-3">
                            <label
                                htmlFor="carousel-1"
                                className="
                                carousel-bullet
                                cursor-pointer
                                block
                                text-4xl text-gray-400
                                hover:text-gray-900
                            "
                            >
                                •
                            </label>
                        </li>
                        <li className="inline-block mr-3">
                            <label
                                htmlFor="carousel-2"
                                className="
                                carousel-bullet
                                cursor-pointer
                                block
                                text-4xl text-gray-400
                                hover:text-gray-900
                            "
                            >
                                •
                            </label>
                        </li>
                        <li className="inline-block mr-3">
                            <label
                                htmlFor="carousel-3"
                                className="
                                carousel-bullet
                                cursor-pointer
                                block
                                text-4xl text-gray-400
                                hover:text-gray-900
                            "
                            >
                                •
                            </label>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Slider;

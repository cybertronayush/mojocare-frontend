import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";

import { NotificationBannerContext } from "../NotificationBanner/NotificationContext";

const Nav = ({ setIsLoggedIn }) => {
    const { searchBox,setSearchBox} = useState('');
    const { setNotifyMessage } = useContext(NotificationBannerContext);

    const patientFlag = 1;

    return (
        <nav id="header" className="w-full z-30 top-0 py-1 bg-black">
            <div
                className="
                    w-full
                    container
                    mx-auto
                    flex flex-wrap
                    items-center
                    justify-between
                    mt-0
                    px-6
                    py-3
                "
            >
                <label
                    for="menu-toggle"
                    className="cursor-pointer md:hidden block"
                >
                    <svg
                        className="fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                    >
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div
                    className="
                        hidden
                        md:flex md:items-center md:w-auto
                        w-full
                        order-3
                        md:order-1
                    "
                    id="menu"
                >
                    <nav>
                        <ul
                            className="
                                md:flex
                               
                                justify-between
                                text-base text-white
                                pt-4
                                md:pt-0
                            "
                        >
                          {patientFlag==1 ?  <li>
                                <Link
                                    className="
                                        inline-block
                                        no-underline
                                        py-0
                                        px-0
                                    "
                                    to="/form"
                                >
                                  Book Appoinment
                                </Link>
                            </li>: "" }
                        </ul>
                    </nav>
                </div>

                {/* <div className=" text-gray-600 lg:block hidden">
                <input
                    className="border-1 border-gray-300 bg-white h-7 pl-2 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" onChange={(e)=>{setSearchBox(e.target.value)}}/>
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                </button>
                </div> */}

                <div className="order-1 md:order-2">
                    <Link to="/">
                        <a
                            className="
                            flex
                            items-center
                            tracking-wide
                            no-underline
                            hover:no-underline
                            font-bold
                            text-white text-xl
                        "
                        >
                            <svg
                                className="fill-current text-white mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                // viewBox="0 0 24 24"
                            >
                                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                            </svg>
                            MOJO-AMS
                        </a>
                    </Link>
                </div>

                <div
                    className="order-2 md:order-3 flex items-center"
                    id="nav-content"
                >
                    <Link
                        className="pl-3 pb-0 inline-block no-underline hover:text-black"
                        to="/cart"
                    >
                        <svg
                            className="fill-current text-white hover:text-grey"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                            <circle cx="10.5" cy="18.5" r="1.5" />
                            <circle cx="17.5" cy="18.5" r="1.5" />
                        </svg>
                    </Link>
                    <div>
                        <a
                            className="
                                inline-block
                                no-underline
                                text-white
                                py-2
                                px-4
                                cursor-pointer
                            "
                            onClick={() => {
                                api.logout().then(() => {
                                    setIsLoggedIn(false);
                                });
                            }}
                        >
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

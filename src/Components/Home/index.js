import React, { useEffect, useState } from "react";
import { api } from "../../api";
import ProductCard from "../ProductCard";
import Slider from "../Slider";
import "./index.css";

const Home = () => {
    const [products, setProducts] = useState();
    const [dummy,setDummy] = useState();

    useEffect(() => {       
        api.getProducts().then((res) => {
            setProducts(res);
        });
    }, []);

    console.log()

    return (
        <div classname="bg-grey">
            <Slider />
            <section className="bg-gray-60 py-6">
              <div
                        className=" block
                        w-full
                        text-center
                        font-bold
                        text-xl
                        bg-gray-50
                        text-gray-700
                        rounded-md
                        underline
                        mt-5
                        p-2"
                    
                    >
                       UPCOMMING APPOINMENTS
                    </div>
            
                <div className="container mx-auto flex items-center flex-wrap pt-2 pb-16 ">
                    {products &&
                        products.map((product) => (
                            <ProductCard data={product} setDummy={setDummy}/>
                        ))}
                    <div
                        className=" block
                        w-full
                        text-center
                        font-bold
                        text-xl
                        bg-gray-50
                        text-gray-700
                        rounded-md
                        p-2"
                    >
                        Show all results
                    </div>
                </div>
            </section>
           
        </div>
    );
};

export default Home;

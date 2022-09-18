import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { NotificationBannerContext } from "../NotificationBanner/NotificationContext";
import "./index.css";

const ProductCard = ({ data, setDummy }) => {
  const { setNotifyMessage } = useContext(NotificationBannerContext);
  const obj = {
    category: "footwear",
    createdAt: "2021-04-30T15:56:09.573Z",
    description: "LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOL",
    image:
      "https://image.goat.com/attachments/product_template_pictures/images/021/545/481/original/509480_00.png.png",
    name: "MALANA CREAM MALANA",
    price: 4000,
    size: "UK 8",
    _id: "6187b4313e626cf75b7a4c76",
  };

  // useEffect(() => {
  //     // data.push(obj);
  //     setDummy(obj);
  //   }, [0]);

      // useEffect(() => {
      //     api.deleteAppoinment(id).then((res) => {
      //     });
      // }, []);

 

  const deleteAppoinment = (id) => {
    alert(id);
    api.deleteAppoinment(id).then((res) => {
      api.getProducts();
    });
  };

  const isProductInCartFlag = 1
  const addToCardBgColor = isProductInCartFlag ? "bg-green-50" : "bg-white";

  return (
    <>
    <div className="flex ">
      <div className="product-card m-1 bg-white w-72 p-6 flex flex-col">
        <Link to={`/product-details/${data._id}`}>
          <a>
            <div className="max-w-md w-full lg:flex-col justify-start">
              <img className="hover:grow hover:shadow-lg" src={data.image} />
              <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg-rounded-b-none lg-rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-grey-dark flex items-center">
                    <svg
                      className="text-grey w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Appoinment
                  </p>
                  <div className="text-black font-bold text-xl mb-2">
                    Appoinment Info
                  </div>
                  <p className="text-grey-darker text-base">
                    {data.description.substring(0, 100) + " " + "Read More..."}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className="text-black leading-none">{data.name}</p>
                    <p className="text-grey-dark">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <button
          onClick={() => deleteAppoinment(data._id)}
          className={`w-full flex justify-center hover:bg-gray-100 border-2 border-red-300 h-6 text-red-300 flex items-center py-2 px-4 rounded`}
        >
          Delete
        </button>
        <div>
          <Link to={`/form/${data._id}`}>
        <button
          className={`w-full flex justify-center my-4 ${addToCardBgColor} hover:bg-gray-100 border-2 border-green-300 h-6 text-green-300 flex items-center py-2 px-4 rounded`} >
          EDIT
        </button>
        </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;

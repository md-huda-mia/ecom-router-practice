import React from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  // console.log(product);
  const { title, price, images, id } = product || {};

  const handleAdd = () => {
    const addCartItems = [];

    const dataSaveStorage = JSON.parse(localStorage.getItem("product-carts"));
    if (!dataSaveStorage) {
      addCartItems.push(product);
      localStorage.setItem("product-carts", JSON.stringify(addCartItems));
      toast.success("Add Product Successfully");
    } else {
      const isExist = dataSaveStorage.find((item) => item.id === id);
      if (!isExist) {
        addCartItems.push(...dataSaveStorage, product);
        localStorage.setItem("product-carts", JSON.stringify(addCartItems));
        toast.success("Add Product Successfully");
      } else {
        toast.error("All Ready Added This Item");
      }
    }
  };

  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-3 w-full h-[300px]  rounded-lg"
          src={images[0]}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex mt-5 items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
            onClick={handleAdd}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

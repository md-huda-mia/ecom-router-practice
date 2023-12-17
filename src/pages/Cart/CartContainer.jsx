import React from "react";

const CartContainer = ({ product }) => {
  const { id, images, title, price } = product || {};
  const handleRemove = () => {
    const dataSaveStorage =
      JSON.parse(localStorage.getItem("product-carts")) || [];
    const findData = dataSaveStorage.filter((item) => item.id !== id);
    localStorage.setItem("product-carts", JSON.stringify(findData));
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img
          src={images[0]}
          className="w-16 md:w-15 max-w-full max-h-[80px]"
          alt="Apple Watch"
        />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {title}
      </td>

      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        ${price}
      </td>
      <td className="px-6 py-4">
        <button
          onClick={handleRemove}
          className="font-medium text-red-600 dark:text-red-500 hover:underline">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartContainer;

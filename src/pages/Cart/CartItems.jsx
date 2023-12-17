import React, { useEffect, useState } from "react";
import CartContainer from "./CartContainer";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [notFound, setNotFound] = useState("");
  const [tax, setTax] = useState(0);
  const [totalAmound, setTotalAmound] = useState(0);

  useEffect(() => {
    const dataSaveStorage = JSON.parse(localStorage.getItem("product-carts"));
    if (dataSaveStorage) {
      setCartItems(dataSaveStorage);
      const total = dataSaveStorage.reduce(
        (prev, curr) => prev + curr.price,
        0
      );
      const totalTax = (total * 2) / 100;
      const totalAmound = total + totalTax;
      setTotalPrice(total.toFixed(2));
      setTax(totalTax);
      setTotalAmound(totalAmound);
    } else {
      setNotFound("Data Is Not Found");
    }
  }, []);

  const allDelete = () => {
    localStorage.clear();
    setCartItems([]);
  };

  return (
    <div className="flex gap-7">
      <div className="grow">
        <div className=" relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <span className="">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((product) => (
                <CartContainer
                  key={product.id}
                  product={product}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex-1">
        <div className="  shadow-md p-10 rounded-xl">
          <h3 className="text-center text-xl font-bold mb-8">
            Cart Items {cartItems.length}
          </h3>
          <div className="">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-normal">Price :</p>
              <span>${totalPrice}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-normal">Tax :</p>
              <span>${tax}</span>
            </div>
          </div>
          <h2 className="flex items-center justify-between mb-2">
            <p className="font-semibold"> Total Price :</p>
            <span className="font-semibold">${totalAmound}</span>
          </h2>
          <div className="mt-5 flex items-center justify-between gap-5">
            <button className="bg-green-500 w-full rounded py-2 text-white">
              Check Out
            </button>
            <button
              onClick={allDelete}
              className="bg-red-500 w-full  rounded py-2  text-white">
              All Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

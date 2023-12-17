import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";

const Home = () => {
  const productdata = useLoaderData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {productdata?.slice(1, 15).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;

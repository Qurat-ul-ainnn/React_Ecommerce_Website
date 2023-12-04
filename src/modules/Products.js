import React, { useEffect, useState } from "react";
import FeatureCard from "../components/FeatureCard";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const Data = await response.json();
      console.log(Data);
      setProducts(Data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1 uppercase">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 uppercase">
          All Products
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div className="h-[60vh] text-red-600 font-bold flex  justify-center items-center text-4xl ">
          {" "}
          Loading...
        </div>
      )}
    </div>
  );
}

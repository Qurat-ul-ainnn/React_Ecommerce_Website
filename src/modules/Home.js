import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Electronics from "../components/Electronics";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const Data = await response.json();
      console.log(Data);
      setProducts(Data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Hero />
      <Electronics />
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-2xl text-red-600 tracking-widest font-medium title-font mb-1">
          Featured products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div className="h-[60vh] text-red-600 font-bold flex  justify-center items-center text-4xl ">
        {" "}
        Loading
      </div>
      )}
      <StatCard />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function ProductCategories() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const Data = await response.json();
      console.log(Data);
      setProducts(Data);
    };
    fetchProducts();
  }, []);

  if (!products.length > 0)
    return (
      <div className="h-[60vh] text-red-600 font-bold flex  justify-center items-center text-4xl ">
        {" "}
        Loading...
      </div>
    );

  return <ProductCard products={products} />;
}

export default ProductCategories;

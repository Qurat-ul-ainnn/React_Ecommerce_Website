import FeatureCard from "./FeatureCard";
import React, { useEffect, useState } from "react";

function Categories() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const Data = await response.json();
      console.log(Data, "Data");
      setCategory(Data);
    };
    fetchProducts();
  }, []);

  return <FeatureCard cards={category} />;
}

export default Categories;

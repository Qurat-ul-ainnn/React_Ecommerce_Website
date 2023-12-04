import React from "react";
import { Link } from "react-router-dom";
import dot from "../images/dot.png";

export default function FeatureCard({ cards = [1, 2, 3] }) {
  return (
    <section className="text-gray-600 body-font cursor-pointer bg-black ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-2xl text-white tracking-widest font-medium title-font mb-1">
            Product Categories
          </h2>
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-red-600">
            Discover Our Classic Collection
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.map((card) => {
            return (
              <Link to={`/categories/${card}`} className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className="text-gray-900 flex justify-center items-center text-lg title-font font-bold uppercase">
                      {card || "Example Card"}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                  </div>
                  <div className="flex-grow mt-3 ">
                    <button
                      className="inline-flex text-white font-medium bg-red-600 border-0 py-2 px-5 rounded-full focus:outline-none hover:bg-black  
                    text-lg"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

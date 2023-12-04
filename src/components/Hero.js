import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font mt-5 ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start  mr-12 pb-5 pt-5 pl-7 pr-5 md:text-left mb-16 md:mb-0 items-center text-center mt-3 ">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-thin text-gray-900 flex justify-center items-center">
            Catch your Own
          </h1>
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-gray-900 flex justify-center items-center">
            Style and Look
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to our exquisite online fashion shopping emporium, where
            style meets sophistication in perfect harmony. Immerse yourself in a
            world of sartorial elegance and timeless trends, meticulously
            curated to elevate your wardrobe to new heights. Discover a
            captivating collection of haute couture, chic essentials, and
            alluring accessories that reflect the essence of modern refinement.
          </p>
          <div className="flex justify-center">
            <Link
              to={`/products`}
              className="inline-flex text-white font-medium bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Discover Now
            </Link>
            <button className="ml-4 inline-flex font-medium text-red-600 bg-white border-2 border-red-600 py-2 px-6 focus:outline-none hover:bg-red-600  rounded text-lg hover:text-white hover:border-0">
              See Collection
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1613464729688-117afd2ed45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          />
        </div>
      </div>
    </section>
  );
}

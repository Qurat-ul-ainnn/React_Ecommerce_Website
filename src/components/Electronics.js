import React from "react";
import electronics from "../images/electronics.jpg";
import jew from "../images/jew.jpg";
export default function Electronics() {
  return (
    <section className="text-gray-600 body-font mt-5 ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg mr-12 ml-5 lg:w-full md:w-1/2 w-5/6 ">
          <h1 className="title-font sm:text-5xl text-3xl mb-8 font-thin text-gray-900 flex justify-center items-center ">
            Our new Collection
          </h1>
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={jew}
          />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start   pb-5 pt-5 pl-7 pr-5 md:text-left mb-16 md:mb-0 items-center text-center mt-3 ">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-gray-900 flex justify-center items-center">
            The new Tech Gift you're waiting for
          </h1>
          <p className="mb-8 leading-relaxed">
            From smartphones and laptops to smart home devices and wearables,
            we've got you covered with the most up-to-date products on the
            market.
          </p>
          <div className="lg:max-w-lg mr-12 ml-5 lg:w-full md:w-1/2 w-5/6 ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={electronics}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

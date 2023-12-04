import React from "react";
import { Link } from "react-router-dom";
import dot from "../../images/dot.png";

function Header() {
  const navigation = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "About",
      path: "/electronics",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <header className="text-gray-600 body-font shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0, cursor-pointer"
        >
          <span className="ml-3 text-xl font-extrabold">COMARO</span>
          <img className="h-3" src={dot} />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigation.map((item) => {
            return (
              <Link
                to={item.path}
                className="mr-5 font-medium  text-1xl text-black hover:text-red-600 hover:font-bold"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <Link
          to={`/cart`}
          className="inline-flex items-center bg-red-600 border-0 text-white py-2 px-4 focus:outline-none hover:bg-black rounded text-base mt-4 md:mt-0"
        >
          Check your Cart
        </Link>
      </div>
    </header>
  );
}

export default Header;

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Home from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import ProductCategories from "./modules/ProductCategories";
import Cart from "./modules/Cart";
import Electronics from "./components/Electronics";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="*"
          element={
            <div className="h-[60vh] text-red-600 font-bold flex  justify-center items-center text-4xl ">
              {" "}
              404 not Found
            </div>
          }
        />
        <Route path="/categories/:name" element={<ProductCategories />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="electronics" element={<Electronics />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

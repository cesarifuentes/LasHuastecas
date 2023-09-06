import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import Payment from "../pages/Payment";

import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";

const Navigation = () => {
  const productsInCart = useSelector(cartProducts);

  return (
    <BrowserRouter>
      <Header></Header>
      <div className="sticky top-0 mb-[-68px]">
        <Navbar cartCount={productsInCart ? productsInCart.length : 0}></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        {/* TODO: stagger here */}
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

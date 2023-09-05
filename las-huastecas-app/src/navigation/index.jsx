import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import Payment from "../pages/Payment";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="sticky top-0">
        <Navbar></Navbar>
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

import React from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";

const Navbar = () => {
  return (
    <nav className="">
      <div className="bg-black/[.4]">
        <div
          id="header"
          className="container flex flex-wrap items-center justify-between w-full py-4 mx-auto "
          // TODO: add extra layer of x padding
          // TODO: turn this into global style set
        >
          {/* Logo - Left */}
          <div className="flex items-center ">
            <img className="" src={logo} alt="logo" />
            <h6 className="mt-1 ml-2 text-white">LAS HUASTECAS</h6>
          </div>
          {/* Navigation - Right */}
          <div className="flex items-center justify-between space-x-10 text-white nav-menu-wrapper">
            <h5>About</h5>
            <h5>Menu</h5>
            <h5>Catering</h5>
            {/* <img className="" src={profile} alt="profile" /> */}
            <img className="" src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

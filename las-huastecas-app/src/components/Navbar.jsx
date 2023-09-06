import React from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
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
          <Link to={"/"}>
            <div className="flex items-center ">
              <img className="" src={logo} alt="logo" />
              <h6 className="mt-1 ml-2 text-white">LAS HUASTECAS</h6>
            </div>
          </Link>

          {/* Navigation - Right */}
          <div className="flex items-center justify-between space-x-10 text-white nav-menu-wrapper">
            <Link to={"/"}>
              <h5>About</h5>
            </Link>
            <Link to={"/menu"}>
              <h5>Menu</h5>
            </Link>
            <Link to={"/"}>
              <h5>Catering</h5>
            </Link>
            {/* <img className="" src={profile} alt="profile" /> */}
            <Link to={"/cart"} className="relative">
              <img src={cart} alt="cart" />
              {cartCount > 0 ? (
                <div className="absolute inline-flex items-center justify-center w-full p-1 bg-red-700 rounded-full left-3 -bottom-2">
                  {cartCount}
                </div>
              ) : null}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

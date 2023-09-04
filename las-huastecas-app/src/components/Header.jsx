import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <nav>
      <div
        id="header"
        className="container flex flex-wrap items-center justify-between w-full mx-auto"
      >
        <div className="flex items-center pl-4 logo-wrapper">
          <img src={logo} alt="logo" />
          <h6>las huastecas</h6>
        </div>
        <div className="flex items-center justify-between space-x-10 nav-menu-wrapper">
          <div>About</div>
          <div>Menu</div>
          <div>Catering</div>
          <div>Profile</div>
          <div>Cart</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

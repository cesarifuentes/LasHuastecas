import React from "react";

const Header = () => {
  return (
    <nav>
      <div
        id="header"
        className="w-full container mx-auto flex flex-wrap items-center justify-between"
      >
        <div className="logo-wrapper">
          <img src="" alt="" />
        </div>
        <div className="nav-menu-wrapper">
          <div>Home</div>
          <div>About</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

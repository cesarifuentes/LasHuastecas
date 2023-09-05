import React from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";

import pinpoint from "../assets/pinpoint.svg";
import phone from "../assets/phone.svg";
import clock from "../assets/clock.svg";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import Button from "../components/Button";
import SmallButton from "./SmallButton";

const Header = () => {
  return (
    <div className="bg-[#26312D]">
      <div
        id="header"
        className="container flex flex-wrap items-center justify-between w-full py-4 mx-auto "
        // TODO: add extra layer of x padding
        // TODO: turn this into global style set
      >
        {/* Logo - Left */}
        <div className="flex items-center space-x-5 text-white">
          <div className="flex items-center">
            <img className="" src={pinpoint} alt="pinpoint" />
            <h5 className="ml-2">2222 Military Pkwy</h5>
          </div>
          <div className="flex items-center">
            <img className="" src={phone} alt="phone" />
            <h5 className="ml-2">(214) 222-2222</h5>
          </div>
          <div className="flex items-center">
            <img className="" src={clock} alt="clock" />
            <h5 className="ml-2">7:30 AM to 11:00 PM</h5>
          </div>
        </div>
        {/* Navigation - Right */}
        <div className="flex items-center justify-between space-x-5 text-white nav-menu-wrapper">
          <SmallButton title="🇺🇸 EN"></SmallButton>

          <div className="flex items-center">
            <img className="" src={facebook} alt="facebook" />
            <img className="ml-2" src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

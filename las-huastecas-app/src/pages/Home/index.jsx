import React from "react";
// import spices from "../../assets/gallery/herbs_and_spices.png";
import Button from "../../components/Button";

const Home = () => {
  return (
    <div>
      {/* <div></div> */}

      <div class="hero-bkgd-img ... flex items-center justify-center w-screen h-screen">
        <div className="text-center text-white drop-shadow-xl">
          <h4>Our Menu</h4>
          <h3 className="mb-4">See What's New Today</h3>
          <Button title="Order Now"></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

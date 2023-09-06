import React from "react";
// import spices from "../../assets/gallery/herbs_and_spices.png";
import Button from "../../components/Button";
import ProductsPreview from "../../components/ProductsPreview";

const Home = () => {
  return (
    <div>
      <section>
        <div class="hero-bkgd-img ... flex items-center justify-center w-screen h-screen">
          <div className="text-center text-white drop-shadow-xl">
            <h4>Our Menu</h4>
            <h3 className="mb-4">See What's New Today</h3>
            <Button title="Order Now"></Button>
          </div>
        </div>
      </section>

      <section className="container flex flex-wrap items-center justify-between w-2/3 py-4 mx-auto ">
        {/* // TODO: add extra layer of x padding 
        // TODO: turn this into global style set */}
        {/* change back to w-full?? */}
        <h1>hello</h1>
        <ProductsPreview></ProductsPreview>
      </section>

      <section className="container flex flex-wrap items-center justify-between w-full py-4 mx-auto ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        neque cupiditate! Rerum fuga quaerat alias totam, aliquid numquam
        temporibus. Laboriosam vel minus facere sunt repellat soluta maxime
        dolorem similique doloribus.
      </section>
    </div>
  );
};

export default Home;

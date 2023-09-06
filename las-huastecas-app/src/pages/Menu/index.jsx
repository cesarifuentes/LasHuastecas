import React from "react";
import Button from "../../components/Button";
// import FoodCard from "../../components/FoodCard";
// import enchiladas from "../../assets/food/enchiladas.png";

const Menu = () => {
  return (
    <div>
      <section>
        <div class="taco-bkgd-img ... flex items-center justify-center w-screen h-[50vh]">
          <div className="text-center text-white drop-shadow-xl">
            <h4>Our Menu</h4>
          </div>
        </div>
      </section>
      <section className="container flex flex-wrap items-center justify-between w-full py-4 mx-auto ">
        {/* // TODO: add extra layer of x padding 
        // TODO: turn this into global style set */}
        {/* buttons */}
        <br /> <br />
        <div className="flex flex-wrap justify-center gap-2">
          <Button title="All"></Button>
          <Button title="Tacos"></Button>
          <Button title="Platters"></Button>
          <Button title="Breakfast"></Button>
          <Button title="Gorditas"></Button>
          <Button title="Tortas"></Button>
          <Button title="Pupusas"></Button>
          <Button title="Quesadillas"></Button>
          <Button title="Drinks"></Button>
          <Button title="Beer"></Button>
          <Button title="Margaritas"></Button>
          <Button title="Weekends"></Button>
          <Button title="Extras"></Button>
          <Button title="Meat"></Button>
        </div>
        <br /> <br />
        {/* items */}
        {/* <FoodCard
          image={enchiladas}
          name="Enchiladas"
          description="5 corn tortillas covered in tomato sauce and cheese. Served with beans & cecina."
          price="6.50"
        ></FoodCard> */}
      </section>
    </div>
  );
};

export default Menu;

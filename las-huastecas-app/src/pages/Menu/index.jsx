import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productSlice";
import FoodCard from "../../components/FoodCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [activeTab, setActiveTab] = useState("");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // only runs when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
  };

  const onTabSwitch = (newActiveTab) => {
    // part 1: tab
    setActiveTab(newActiveTab);
    // part 2: index
    let categories = products.products.map((product) => product.name); // removed .name
    let index = categories.findIndex((category) => newActiveTab === category);
    console.log(index);
    if (index > -1) {
      setActiveTabIndex(index);
    } else {
      setActiveTabIndex(0);
    }
  };

  return (
    <div>
      <section>
        <div class="taco-bkgd-img ... flex items-center justify-center w-screen h-[50vh]">
          <div className="text-center text-white drop-shadow-xl">
            <h4>Our Menu</h4>
          </div>
        </div>
      </section>
      <section className="container w-full py-4 mx-auto ">
        {/* // TODO: add extra layer of x padding 
        // TODO: turn this into global style set */}
        {products.status !== "fulfilled" ? (
          <div>Loading...</div>
        ) : (
          <>
            {/* tabs */}
            <h1>{products.products[0].products.name}</h1>
            {products.products && (
              <Tabs
                list={products.products.map((product) => product.name)} // removed .name // change to category.name
                activeTab={activeTab}
                onTabSwitch={onTabSwitch}
              />
            )}

            {/* products */}
            <div className="flex flex-row mx-3">
              {products.products &&
                products.products[activeTabIndex].products.map(
                  (product, index) => {
                    return (
                      <div className="w-full p-3">
                        <FoodCard
                          key={index}
                          product={product}
                          onAddProduct={onAddProduct}
                        />
                      </div>
                    );
                  }
                )}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Menu;

import React from "react";
import { Tabs } from "../../components/Tabs";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import useTabSwitch from "../../hooks/useTabSwitch";
import { AddressForm } from "../../components/AddressForm";
// import { StripeWrapper } from "../../components/PaymentForm";
import { ProductsSummary } from "../../components/ProductsSummary";

const Cart = () => {
  const cart = useSelector(cartProducts);
  const tabs = ["Summary", "Delivery", "Payment"];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, "Summary");

  if (!cart || cart.length === 0) {
    return (
      <div className="flex justify-center h-full p-4 text-black">
        <h1>Your Cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="h-screen p-4 mx-auto mt-2 text-black bg-white border border-gray-200 rounded-lg shadow-md md:w-2/3 sm:p-6 lg:p-8">
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
      <div className={`tabs ${currentTab !== "Summary" ? "hidden" : ""}`}>
        <ProductsSummary />
        <div className="flex justify-end p-2">
          <Button
            variant="dark"
            className="flex items-center"
            onClick={() => handleTabSwitch("Delivery")}
          >
            <span className="mr-1">Next</span>
          </Button>
        </div>
      </div>
      <div className={`tabs ${currentTab !== "Delivery" ? "hidden" : ""}`}>
        <AddressForm onTabSwitch={handleTabSwitch} />
      </div>
      <div className={`tabs ${currentTab !== "Payment" ? "hidden" : ""}`}>
        {/* <StripeWrapper /> */}
      </div>
    </div>
  );
};

export default Cart;

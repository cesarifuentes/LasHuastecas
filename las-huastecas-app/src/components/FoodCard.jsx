import React from "react";
import AddProduct from "./AddProduct";

const FoodCard = ({ product, onAddProduct }) => {
  const addProduct = () => {
    onAddProduct(product);
  };

  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full h-[200px] object-cover"
          src={product.image}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{product.name}</div>
          <p class="text-gray-700 text-base">{product.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <p>${product.price}</p>
          </span>
          <AddProduct onAddProduct={addProduct}></AddProduct>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

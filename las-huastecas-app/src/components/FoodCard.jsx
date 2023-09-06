import React from "react";

const FoodCard = (props) => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full h-[200px] object-cover"
          src={props.image}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.name}</div>
          <p class="text-gray-700 text-base">{props.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <p>${props.price}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
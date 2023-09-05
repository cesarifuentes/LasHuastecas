import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-2 text-black border border-black rounded-lg">
        <h5>{props.title}</h5>
      </button>
    </div>
  );
};

export default Button;

// TODO: border-white text-white

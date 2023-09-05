import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-2 border border-white rounded-lg">
        <h5>{props.title}</h5>
      </button>
    </div>
  );
};

export default Button;

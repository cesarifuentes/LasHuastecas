import React from "react";

const SmallButton = (props) => {
  return (
    <div>
      <button className="px-3 py-0 border border-white rounded-lg">
        <h5 className="text-sm">{props.title}</h5>
      </button>
    </div>
  );
};

export default SmallButton;

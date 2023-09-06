import React from "react";
import Button from "../components/Button";

const AddProduct = ({ onAddProduct }) => {
  return (
    <div onClick={onAddProduct}>
      <Button title="Add +"></Button>
    </div>
  );
};

export default AddProduct;

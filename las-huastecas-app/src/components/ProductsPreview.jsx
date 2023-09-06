import React, { useState, useEffect } from "react";
import FoodCard from "../components/FoodCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductsPreview = () => {
  const [products, setProducts] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // only runs when component mounts
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data?.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Carousel responsive={responsive}>
      {products.length > 0 &&
        products.map((product, index) => {
          return (
            <div className="w-full p-3">
              <FoodCard
                key={index}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              ></FoodCard>
            </div>
          );
        })}
    </Carousel>
  );
};

export default ProductsPreview;

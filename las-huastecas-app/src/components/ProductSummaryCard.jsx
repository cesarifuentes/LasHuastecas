import { useDispatch } from "react-redux";
import {
  incrementProductAmount,
  decrementProductAmount,
} from "../stores/cart/cartSlice";

export const ProductsSummaryCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex p-1 border-b sm:p-2 border-b-gray-200">
      <div className="w-full mr-2 border rounded-lg product-image border-grey-200 sm:w-1/3">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="text-gray-600">{product.desciption}</p>
      </div>
      <div className="flex flex-col items-center justify-center product-price-qt">
        <div className="price">{`${product.price}$`}</div>
        <div className="flex quantity">
          <button
            className="p-1"
            disabled={product.price <= 0}
            onClick={() => dispatch(decrementProductAmount(product))}
          >
            -
          </button>
          <span className="p-1">{product.amount}</span>
          <button
            className="p-1"
            onClick={() => dispatch(incrementProductAmount(product))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

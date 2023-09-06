import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice";
import productReducer from "./menu/productSlice";
// import addressReducer from "./userInfo/addressSlice";

// reduce (previous state + action) to (new state)

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  //   address: addressReducer,
});

export default rootReducer;

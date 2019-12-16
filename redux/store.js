import { createStore, combineReducers } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";

import productsReducer from "./reducers/products";
import cartReducer from "./reducers/cart";
import ordersReducer from "./reducers/orders";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

export default createStore(rootReducer, composeWithDevTools());

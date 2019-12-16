import { createStore, combineReducers } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";

import productsReducer from "./reducers/products";
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

export default createStore(rootReducer, composeWithDevTools());

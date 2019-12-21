import { PRODUCTS } from "../../data/mock.data";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
  availableProducts: PRODUCTS || [],
  userProducts: PRODUCTS.filter(({ ownerId }) => ownerId === "u1") || []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          ({ id }) => id !== action.productId
        ),
        availableProducts: state.availableProducts.filter(
          ({ id }) => id !== action.productId
        )
      };

    default:
      return state;
  }
};

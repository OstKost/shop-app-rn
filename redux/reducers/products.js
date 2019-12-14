import { PRODUCTS } from "../../data/mock.data";

const initialState = {
  availableProducts: PRODUCTS || [],
  userProducts: PRODUCTS.filter(({ ownerId }) => ownerId === "u1") || []
};

export default (state = initialState, action) => {
  return state;
};

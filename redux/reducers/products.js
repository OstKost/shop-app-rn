import { PRODUCTS } from "../../data/mock.data";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT
} from "../actions/products";
import Product from "../../models/product";

const initialState = {
  availableProducts: PRODUCTS || [],
  userProducts: PRODUCTS.filter(({ ownerId }) => ownerId === "u1") || []
};

export default (state = initialState, action) => {
  const { availableProducts, userProducts } = state;
  let product;

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

    case CREATE_PRODUCT:
      product = new Product(
        new Date().toString(),
        "u1",
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        action.payload.price
      );
      return {
        ...state,
        availableProducts: [...availableProducts, product],
        userProducts: [...userProducts, product]
      };

    case UPDATE_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const findedProduct = userProducts.find(
        item => item.id === action.productId
      );
      product = new Product(
        action.productId,
        findedProduct.ownerId,
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        findedProduct.price
      );
      return {
        ...state,
        availableProducts: availableProducts.map(item => {
          if (item.id === action.productId) return product;
          return item;
        }),
        userProducts: userProducts.map(item => {
          if (item.id === action.productId) return product;
          return item;
        })
      };

    default:
      return state;
  }
};

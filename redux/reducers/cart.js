/* eslint-disable no-case-declarations */
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cartItem";
import { ADD_ORDER } from "../actions/orders";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
  items: [],
  totalAmount: 0
};

export default (state = initialState, action) => {
  const { items, totalAmount } = state;
  let updatedCartItem;
  let itemInCart;
  let productId;
  switch (action.type) {
    // ADD
    case ADD_TO_CART:
      const { product = {} } = action;
      const { id, title, price } = product;
      itemInCart = items.find(item => item.id === id);
      if (itemInCart) {
        updatedCartItem = new CartItem(
          id,
          title,
          itemInCart.quantity + 1,
          price,
          itemInCart.sum + price
        );
        return {
          ...state,
          items: items.map(item => {
            if (item.id === id) {
              return updatedCartItem;
            }
            return item;
          }),
          totalAmount: totalAmount + price
        };
      }
      const newCartItem = new CartItem(id, title, 1, price, price);
      return {
        ...state,
        items: [...items, newCartItem],
        totalAmount: totalAmount + price
      };
    // REMOVE
    case REMOVE_FROM_CART:
      productId = action.productId;
      itemInCart = items.find(item => item.id === productId);
      if (itemInCart.quantity > 1) {
        updatedCartItem = new CartItem(
          itemInCart.id,
          itemInCart.title,
          itemInCart.quantity - 1,
          itemInCart.price,
          itemInCart.sum - itemInCart.price
        );
        return {
          ...state,
          items: items.map(item => {
            if (item.id === productId) {
              return updatedCartItem;
            }
            return item;
          }),
          totalAmount: totalAmount - itemInCart.price
        };
      }
      return {
        ...state,
        items: items.filter(item => item.id !== productId),
        totalAmount: totalAmount - itemInCart.price
      };
    // Clear ORDER
    case ADD_ORDER:
      return initialState;
    // Delete product from everywhere
    case DELETE_PRODUCT:
      productId = action.productId;
      itemInCart = items.find(item => item.id === productId);
      if (!itemInCart) return state;
      return {
        ...state,
        items: items.filter(item => item.id !== productId),
        totalAmount: totalAmount - itemInCart.sum
      };
    default:
      return state;
  }
};

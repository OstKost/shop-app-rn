/* eslint-disable no-case-declarations */
import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cartItem";

const initialState = {
  items: [],
  totalAmount: 0
};

export default (state = initialState, action) => {
  const product = action.payload || {};
  const { id, title, price } = product;
  const { items, totalAmount } = state;
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = items.find(item => item.id === id);
      if (itemInCart) {
        const updatedCartItem = new CartItem(
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

    default:
      return state;
  }
};

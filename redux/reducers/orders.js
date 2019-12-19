import { ADD_ORDER } from "../actions/orders";
import Order from "../../models/order";
import { ORDERS } from "../../data/mock.data";

const initialState = {
  orders: ORDERS || []
};

export default (state = initialState, action) => {
  const { orders } = state;
  let newOrder;
  switch (action.type) {
    case ADD_ORDER:
      // eslint-disable-next-line no-case-declarations
      const { cartItems, totalAmount } = action.payload;
      newOrder = new Order(
        new Date().toString(),
        cartItems,
        totalAmount,
        new Date()
      );
      return { ...state, orders: [...orders, newOrder] };

    default:
      return state;
  }
};

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";

import * as cartActions from "../../redux/actions/cart";
import * as ordersActions from "../../redux/actions/orders";

const CartScreen = () => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <View style={styles.summaryText}>
          <Text style={styles.summaryTitle}>Total: </Text>
          <Text style={styles.summaryAmount}>
            {`$${Math.round((cartTotalAmount.toFixed(2) * 100) / 100)}`}
          </Text>
        </View>
        <Button
          title="Order Now"
          color={Colors.accent}
          disabled={cartItems.length === 0}
          onPress={() => {
            dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
          }}
        />
      </View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem
            {...item}
            onRemove={() => dispatch(cartActions.removeFromCart(item.id))}
          />
        )}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    margin: 24
  },
  summary: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginVertical: 16,
    padding: 16,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white"
  },
  summaryText: {
    flexDirection: "row",
    alignContent: "center"
  },
  summaryTitle: {
    fontSize: 24,
    color: "#888",
    fontFamily: "roboto-slab"
  },
  summaryAmount: {
    fontSize: 24,
    fontFamily: "roboto-slab",
    color: Colors.primary
  }
});

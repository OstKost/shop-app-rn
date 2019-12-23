import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Colors from "../../constants/Colors";
import CartItem from "./CartItem";
import Card from "../UI/Card";

const OrderItem = ({ date, totalAmount, items }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Card style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>
          {`$${totalAmount && totalAmount.toFixed(2)}`}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Button
        color={Colors.primary}
        title={isOpened ? "Hide Details" : "Show Details"}
        onPress={() => setIsOpened(!isOpened)}
      />

      {isOpened && (
        <View style={styles.items}>
          {items.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </View>
      )}
    </Card>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 16,
    alignItems: "center"
  },
  summary: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16
  },
  totalAmount: {
    fontSize: 16,
    fontFamily: "roboto-slab"
  },
  date: {
    fontSize: 16,
    fontFamily: "ubuntu",
    color: "#888"
  },
  items: {
    width: "100%"
  }
});

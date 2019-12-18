import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Colors from "../../constants/Colors";

const OrderItem = ({ date, totalAmount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>
          {`$${totalAmount && totalAmount.toFixed(2)}`}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Button color={Colors.primary} title="Show details" />
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 24,
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
  }
});

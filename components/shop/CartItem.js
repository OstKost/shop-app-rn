import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ title, quantity, onRemove, sum }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{`${quantity}  `}</Text>
        <Text style={styles.mainText}>{title}</Text>
      </Text>

      <View style={styles.itemData}>
        <Text style={styles.mainText}>{`$${sum && sum.toFixed(2)}`}</Text>
        {onRemove && (
          <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
            <Ionicons
              size={24}
              color="red"
              name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginHorizontal: 16,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  quantity: {
    fontSize: 16,
    fontFamily: "ubuntu",
    color: "#888"
  },
  mainText: {
    fontSize: 16,
    fontFamily: "roboto-slab"
  },
  deleteButton: {
    marginLeft: 16
  }
});

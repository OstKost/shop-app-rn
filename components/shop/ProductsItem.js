import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const ProductsItem = ({
  title,
  price = 0,
  imageUrl,
  goToDetails,
  addToCart
}) => {
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <Button color={Colors.primary} title="Details" onPress={goToDetails} />
        <Button
          color={Colors.primary}
          title="Add to cart"
          onPress={addToCart}
        />
      </View>
    </View>
  );
};

export default ProductsItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 24
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  detailsContainer: {
    alignItems: "center",
    height: "15%"
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: "#888"
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 16
  }
});

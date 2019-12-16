import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";

import * as cartActions from "../../redux/actions/cart";

const ProductDetailScreen = ({ navigation }) => {
  const productId = navigation.getParam("productId");
  const product = useSelector(state =>
    state.products.availableProducts.find(({ id }) => id === productId)
  );
  const dispatch = useDispatch();

  return (
    <View>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to cart"
          onPress={() => dispatch(cartActions.addToCart(product))}
        />
      </View>
      <Text style={styles.price}>{`$${product.price.toFixed(2)}`}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = navData => ({
  title: navData.navigation.getParam("productTitle")
});

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  price: {
    fontSize: 24,
    color: "#888",
    textAlign: "center",
    marginVertical: 24,
    fontFamily: "roboto-slab"
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 16,
    fontFamily: "ubuntu"
  }
});

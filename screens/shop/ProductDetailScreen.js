import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const ProductDetailScreen = ({ navigation }) => {
  const productId = navigation.getParam("productId");
  const product = useSelector(state =>
    state.products.availableProducts.find(({ id }) => id === productId)
  );

  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = navData => ({
  title: navData.navigation.getParam("productTitle")
});

export default ProductDetailScreen;

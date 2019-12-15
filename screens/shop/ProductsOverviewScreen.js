import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductsItem";

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductItem
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          goToDetails={() => {
            navigation.navigate("ProductDetail", {
              productId: item.id,
              productTitle: item.title
            });
          }}
          addToCart={() => {}}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  title: "All products"
};

export default ProductsOverviewScreen;

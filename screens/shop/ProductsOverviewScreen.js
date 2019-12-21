import React from "react";
import { FlatList, Platform, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import * as cartActions from "../../redux/actions/cart";

import ProductItem from "../../components/shop/ProductsItem";
import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectItemHandler = item => {
    navigation.navigate("ProductDetail", {
      productId: item.id,
      productTitle: item.title
    });
  };

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductItem
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          onSelect={() => selectItemHandler(item)}
        >
          <Button
            color={Colors.primary}
            title="Details"
            onPress={() => selectItemHandler(item)}
          />
          <Button
            color={Colors.primary}
            title="Add to cart"
            onPress={() => dispatch(cartActions.addToCart(item))}
          />
        </ProductItem>
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData => ({
  headerTitle: "All products",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Cart"
        iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
        onPress={() => navData.navigation.navigate("Cart")}
      />
    </HeaderButtons>
  )
});

export default ProductsOverviewScreen;

import React from "react";
import { FlatList, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import * as cartActions from "../../redux/actions/cart";

import ProductItem from "../../components/shop/ProductsItem";
import HeaderButton from "../../components/UI/HeaderButton";

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

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
          addToCart={() => dispatch(cartActions.addToCart(item))}
        />
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

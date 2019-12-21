import React from "react";
import { FlatList, Platform, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";

import * as productsActions from "../../redux/actions/products";

import ProductsItem from "../../components/shop/ProductsItem";
import HeaderButton from "../../components/UI/HeaderButton";

const UserProductsScreen = () => {
  const dispatch = useDispatch();
  const userProducts = useSelector(({ products }) => products.userProducts);

  return (
    <FlatList
      data={userProducts}
      renderItem={({ item }) => (
        <ProductsItem {...item}>
          <Button color={Colors.primary} title="Edit" onPress={() => {}} />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => dispatch(productsActions.deleteProduct(item.id))}
          />
        </ProductsItem>
      )}
    />
  );
};

UserProductsScreen.navigationOptions = navData => ({
  headerTitle: "User products",
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

export default UserProductsScreen;

import React from "react";
import { FlatList, Platform, Button, Alert } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";

import * as productsActions from "../../redux/actions/products";

import ProductsItem from "../../components/shop/ProductsItem";
import HeaderButton from "../../components/UI/HeaderButton";

const UserProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userProducts = useSelector(({ products }) => products.userProducts);

  const selectItemHandler = item => {
    navigation.navigate("EditProduct", {
      productId: item.id,
      productTitle: item.title
    });
  };

  const deleteHandler = productId =>
    Alert.alert("Are you sure?", "Do you really want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => dispatch(productsActions.deleteProduct(productId))
      }
    ]);

  return (
    <FlatList
      data={userProducts}
      renderItem={({ item }) => (
        <ProductsItem {...item}>
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => selectItemHandler(item)}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => deleteHandler(item.id)}
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
        iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
        onPress={() => navData.navigation.navigate("EditProduct")}
      />
    </HeaderButtons>
  )
});

export default UserProductsScreen;

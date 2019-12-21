import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  android: {
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTintColor: "white"
  },
  default: {
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: Colors.primary
  },
  headerTitleStyle: {
    fontFamily: "ubuntu"
  },
  headerBackTitleStyle: {
    fontFamily: "ubuntu"
  }
});

const ProductsStack = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={24}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: config
  }
);

const OrdersStack = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={24}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: config
  }
);

const UserStack = createStackNavigator(
  {
    UserProducts: UserProductsScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === "android" ? "md-create" : "ios-create"}
          size={24}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: config
  }
);

const ShopDrawer = createDrawerNavigator(
  {
    Products: ProductsStack,
    Orders: OrdersStack,
    User: UserStack
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary
    }
  }
);

export default ShopDrawer;

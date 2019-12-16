import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

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
  }
});

const ProductsStack = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: {
      ...config,
      headerTitleStyle: {
        fontFamily: "ubuntu"
      },
      headerBackTitleStyle: {
        fontFamily: "ubuntu"
      }
    }
  }
);

export default ProductsStack;

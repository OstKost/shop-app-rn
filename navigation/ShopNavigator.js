import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

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
    ProductsOverview: ProductsOverviewScreen
  },
  {
    defaultNavigationOptions: config
  }
);

export default ProductsStack;

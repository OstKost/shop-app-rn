import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import ShopNavigator from "./ShopNavigator";

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Shop: ShopNavigator
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });

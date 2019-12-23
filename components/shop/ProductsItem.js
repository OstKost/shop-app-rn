import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const ProductsItem = ({ title, price = 0, imageUrl, onSelect, children }) => {
  let TouchableWrapper = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableWrapper = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchableContainer}>
        <TouchableWrapper onPress={onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
            </View>

            <View style={styles.actionsContainer}>{children}</View>
          </View>
        </TouchableWrapper>
      </View>
    </View>
  );
};

export default ProductsItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 24
  },
  touchableContainer: {
    borderRadius: 10,
    overflow: "hidden"
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "20%"
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: "ubuntu"
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: "roboto-slab"
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 16
  }
});

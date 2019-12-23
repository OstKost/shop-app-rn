import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Platform
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import * as productsActions from "../../redux/actions/products";

import HeaderButton from "../../components/UI/HeaderButton";

const EditProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const productId = navigation.getParam("productId");
  const editedProduct = useSelector(({ products }) =>
    products.userProducts.find(({ id }) => id === productId)
  );

  const [formData, setFormData] = useState({
    title: editedProduct ? editedProduct.title : "",
    imageUrl: editedProduct ? editedProduct.imageUrl : "",
    price: "",
    description: editedProduct ? editedProduct.description : ""
  });

  const submitHandler = useCallback(() => {
    const { title, imageUrl, price, description } = formData;
    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(editedProduct.id, {
          title,
          imageUrl,
          description
        })
      );
    } else {
      dispatch(
        productsActions.createProduct({
          title,
          imageUrl,
          description,
          price
        })
      );
    }
    navigation.goBack();
  }, [dispatch, formData]);

  useEffect(() => {
    navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={formData.title}
            onChangeText={value => {
              setFormData({ ...formData, title: value });
            }}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image</Text>
          <TextInput
            style={styles.input}
            value={formData.imageUrl}
            onChangeText={value => {
              setFormData({ ...formData, imageUrl: value });
            }}
          />
        </View>
        {!editedProduct && (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={formData.price}
              onChangeText={value => {
                setFormData({ ...formData, price: value });
              }}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={formData.description}
            onChangeText={value => {
              setFormData({ ...formData, description: value });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = navData => {
  const sibmitHandler = navData.navigation.getParam("submit");
  return {
    headerTitle:
      navData.navigation.getParam("productTitle") || "Add New Product",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={sibmitHandler}
        />
      </HeaderButtons>
    )
  };
};

export default EditProductScreen;

const styles = StyleSheet.create({
  form: {
    margin: 24
  },
  formControl: {
    width: "100%"
  },
  label: {
    fontFamily: "ubuntu",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});

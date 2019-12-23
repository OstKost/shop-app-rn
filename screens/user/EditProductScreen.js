import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Platform
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

const EditProductScreen = ({ navigation }) => {
  const [formData, setFormData] = useState(initialState);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = navData => ({
  headerTitle: navData.navigation.getParam("productTitle") || "Add New Product",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Save"
        iconName={Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"}
        onPress={() => {}}
      />
    </HeaderButtons>
  )
});

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
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});

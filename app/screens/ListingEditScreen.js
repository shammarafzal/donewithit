import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import AppScreen from "../components/AppScreen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppForm,
  AppFormField,
  AppSubmitButton,
  AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "blue", icon: "close" },
  { label: "Camera", value: 3, backgroundColor: "pink", icon: "edit" },
];

function ListingEditScreen() {
  return (
    <AppScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} placeholder="Title" name="title" />
        <AppFormField
          maxLength={8}
          placeholder="Price"
          name="price"
          keyboardType="numeric"
          width={120}
        />
        <AppFormPicker
          items={categories}
          placeholder="Categories"
          PickerItemComponent={CategoryPickerItem}
          name="categories"
          numberOfColumns={3}
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          placeholder="Description"
          name="description"
          numberOfLines={3}
        />
        <AppSubmitButton title="Submit"></AppSubmitButton>
      </AppForm>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;

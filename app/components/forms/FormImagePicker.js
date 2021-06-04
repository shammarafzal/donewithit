import React from "react";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import AppErrorMessage from "./AppErrorMessage";

function FormImagePicker({ name }) {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      ></ImageInputList>
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;

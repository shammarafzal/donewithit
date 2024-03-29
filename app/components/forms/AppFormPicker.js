import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  numberOfColumns,
  placeholder,
  width,
}) {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;

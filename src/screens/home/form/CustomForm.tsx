import { StyleSheet } from "react-native";
import React from "react";
import CustomBox from "../../../core/form/CustomBox";
import CustomTextInput from "../../../core/textinput/CustomTextInput";
import CustomButton from "../../../core/button/CustomButton";
import { Formik } from "formik";
import { OWNER, REPO, STATE } from "../../../utils/constants";

const CustomForm = () => {
  return (
    <Formik
      initialValues={{ [OWNER]: "", [REPO]: "", [STATE]: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <CustomBox>
          <CustomTextInput
            label="Owner"
            textInputProps={{
              accessibilityLabel: "Owner of the repository",
              onChangeText: handleChange(OWNER),
              onBlur: handleBlur(OWNER),
              value: values[OWNER],
            }}
            style={{ marginBottom: 16 }}
          />
          <CustomTextInput
            label="Repository"
            textInputProps={{ accessibilityLabel: "Name of the repository" }}
            style={{ marginBottom: 16 }}
          />
          <CustomButton title="Search" onPress={handleSubmit as any} />
        </CustomBox>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({});

export default CustomForm;

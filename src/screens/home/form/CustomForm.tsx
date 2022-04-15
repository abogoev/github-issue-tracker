import { StyleSheet } from "react-native";
import React, { VFC } from "react";
import CustomBox from "../../../core/form/CustomBox";
import CustomTextInput from "../../../core/textinput/CustomTextInput";
import CustomButton from "../../../core/button/CustomButton";
import { Formik } from "formik";
import { OWNER, REPO, STATE } from "../../../utils/constants";
import CustomDropdown from "../../../core/dropdown/CustomDropdown";
import { FetchIssueSearchParams } from "../../../types";

interface Props {
  onSubmit: (values: Omit<FetchIssueSearchParams, "page">) => void;
}

const CustomForm: VFC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ [OWNER]: "", [REPO]: "", [STATE]: "open" }}
      onSubmit={onSubmit}
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
            style={styles.marginBottom}
          />
          <CustomTextInput
            label="Repository"
            textInputProps={{
              accessibilityLabel: "Name of the repository",
              onChangeText: handleChange(REPO),
              onBlur: handleBlur(REPO),
              value: values[REPO],
            }}
            style={styles.marginBottom}
          />
          <CustomDropdown
            data={["open", "closed", "all"]}
            onSelect={handleChange(STATE)}
            buttonTextAfterSelection={(selectedItem) => selectedItem}
            rowTextForSelection={(item) => item}
          />
          <CustomButton title="Search" onPress={handleSubmit as any} />
        </CustomBox>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 16,
  },
});

export default CustomForm;

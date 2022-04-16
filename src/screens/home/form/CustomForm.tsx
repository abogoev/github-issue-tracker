import { StyleSheet } from "react-native";
import React, { VFC } from "react";
import CustomBox from "../../../core/form/CustomBox";
import CustomTextInput from "../../../core/textinput/CustomTextInput";
import CustomButton from "../../../core/button/CustomButton";
import { Formik } from "formik";
import {
  ALL,
  CLOSED,
  OPEN,
  OWNER,
  REPO,
  STATE,
} from "../../../utils/constants";
import CustomDropdown from "../../../core/dropdown/CustomDropdown";
import { FetchIssueSearchParams } from "../../../types";
import { fetchIssuesValidationSchema } from "../../../utils/validationSchemas";
import theme from "../../../theme/theme";

interface Props {
  onSubmit: (values: FetchIssueSearchParams) => void;
}

const CustomForm: VFC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ [OWNER]: "", [REPO]: "", [STATE]: OPEN }}
      validationSchema={fetchIssuesValidationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <CustomBox>
          <CustomTextInput
            label="Owner"
            textInputProps={{
              accessibilityLabel: "Owner of the repository",
              onChangeText: handleChange(OWNER),
              onBlur: handleBlur(OWNER),
              value: values[OWNER],
            }}
            error={touched[OWNER] && errors[OWNER]}
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
            error={touched[REPO] && errors[REPO]}
            style={styles.marginBottom}
          />
          <CustomDropdown
            label="State"
            data={[OPEN, CLOSED, ALL]}
            onSelect={handleChange(STATE)}
            buttonTextAfterSelection={(selectedItem) => selectedItem}
            rowTextForSelection={(item) => item}
            defaultValue={values[STATE]}
            style={styles.marginBottom}
            error={errors[STATE]}
          />
          <CustomButton title="Search" onPress={handleSubmit as any} />
        </CustomBox>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: theme.spacing.medium,
  },
});

export default CustomForm;

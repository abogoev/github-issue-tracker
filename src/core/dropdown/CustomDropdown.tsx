import { StyleSheet, View, ViewStyle } from "react-native";
import React, { VFC } from "react";
import SelectDropdown, {
  SelectDropdownProps,
} from "react-native-select-dropdown";
import theme from "../../theme/theme";

interface Props extends SelectDropdownProps {
  style?: ViewStyle;
}

const CustomDropdown: VFC<Props> = ({ style, ...props }) => {
  return (
    <View style={style}>
      <SelectDropdown
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonTextStyle}
        rowStyle={styles.rowStyle}
        rowTextStyle={styles.rowTextStyle}
        dropdownOverlayColor={theme.palette.transparent}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 31,
    borderRadius: theme.borderRadius,
    borderColor: theme.palette.neutral,
    borderWidth: 1,
    backgroundColor: theme.palette.white,
  },
  buttonTextStyle: {
    ...theme.typography.regularText,
    color: theme.palette.veryDarkGrey,
    textAlign: "left",
    marginHorizontal: 4,
  },
  rowStyle: {
    height: 31,
    borderColor: theme.palette.neutral,
    borderWidth: 1,
    backgroundColor: theme.palette.white,
  },
  rowTextStyle: {
    ...theme.typography.regularText,
    color: theme.palette.veryDarkGrey,
    textAlign: "left",
    marginHorizontal: 12,
  },
});

export default CustomDropdown;

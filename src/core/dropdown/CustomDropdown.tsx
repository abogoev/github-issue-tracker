import { StyleSheet, View, ViewStyle, Text } from "react-native";
import React, { useRef, VFC } from "react";
import SelectDropdown, {
  SelectDropdownProps,
} from "react-native-select-dropdown";
import theme from "../../theme/theme";

interface Props extends SelectDropdownProps {
  style?: ViewStyle;
  label: string;
  error?: string | boolean;
}

const CustomDropdown: VFC<Props> = ({ style, label, error, ...props }) => {
  const ref = useRef<SelectDropdown>(null);

  return (
    <View style={style}>
      <Text onPress={() => ref?.current?.openDropdown()} style={styles.label}>
        {label}
      </Text>
      <SelectDropdown
        ref={ref}
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonTextStyle}
        rowStyle={styles.rowStyle}
        rowTextStyle={styles.rowTextStyle}
        dropdownOverlayColor={theme.palette.transparent}
        {...props}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    ...theme.typography.regularText,
    color: theme.palette.veryDarkGrey,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
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
  error: {
    ...theme.typography.smallText,
    color: theme.palette.red,
  },
});

export default CustomDropdown;

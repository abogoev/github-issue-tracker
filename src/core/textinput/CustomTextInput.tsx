import React, { FC, useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ViewProps,
  TextInputProps,
} from "react-native";
import theme from "../../theme/theme";

interface Props extends ViewProps {
  label: string;
  textInputProps?: TextInputProps;
  error?: string | boolean;
}

const CustomTextInput: FC<Props> = ({
  label,
  textInputProps,
  error = "",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const ref = useRef<TextInput>(null);

  return (
    <View {...props}>
      <Text onPress={() => ref?.current?.focus()} style={[styles().label]}>
        {label}
      </Text>
      <View>
        {isFocused && <View style={styles().focusedContainer} />}
        <TextInput
          ref={ref}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles(isFocused).input}
          selectionColor={theme.palette.veryDarkGrey}
          onFocus={() => setIsFocused(true)}
          {...textInputProps}
          onBlur={(e) => {
            setIsFocused(false);
            textInputProps?.onBlur?.(e);
          }}
        />
      </View>
      {!!error && <Text style={styles().error}>{error}</Text>}
    </View>
  );
};

const styles = (isFocused?: boolean) =>
  StyleSheet.create({
    focusedContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.palette.darkBlue,
      margin: -3,
      borderRadius: theme.borderRadius,
    },
    label: {
      ...theme.typography.regularText,
      color: theme.palette.veryDarkGrey,
      marginBottom: 8,
      alignSelf: "flex-start",
    },
    input: {
      ...theme.typography.regularText,
      lineHeight: 17,
      color: theme.palette.veryDarkGrey,
      borderRadius: theme.borderRadius,
      borderColor: isFocused ? theme.palette.blue : theme.palette.neutral,
      borderWidth: 1,
      paddingHorizontal: 12,
      paddingVertical: 7,
      backgroundColor: theme.palette.white,
    },
    error: {
      ...theme.typography.smallText,
      color: theme.palette.red,
    },
  });

export default CustomTextInput;

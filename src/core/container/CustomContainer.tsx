import {
  Keyboard,
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";

interface Props extends PressableProps {
  style?: ViewStyle;
}

const CustomContainer: FC<Props> = ({ style, ...props }) => {
  return (
    <Pressable
      style={[styles.container, style]}
      accessibilityLabel="Keyboard Dismiss Container"
      accessibilityHint="Press anywhere to dismiss keyboard"
      onPress={Keyboard.dismiss}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomContainer;

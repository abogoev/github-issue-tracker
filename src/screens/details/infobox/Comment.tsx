import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import theme from "../../../theme/theme";

const asd =
  "### Summary\n\nSee https://github.com/expo/expo-cli/issues/4276. If a repo has a yarn.lock file, the tool will use `yarn`, and crash hard when it can't find it. This should be more gracefully handled, including a nice user facing message.\n\n### Environment\n\n-\n\n### Please specify your device/emulator/simulator platform, model and version\n\n-\n\n### Error output\n\n-\n\n### Reproducible demo or steps to reproduce from a blank project\n\n-";

const Comment = () => {
  return (
    <View style={styles.container}>
      <Image
        accessibilityIgnoresInvertColors
        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        style={styles.image}
      />
      <View style={styles.messageContainer}>
        <View style={styles.topMessageContainer}>
          <Text>InfoBox</Text>
          <Text>InfoBox</Text>
        </View>
        <View style={styles.bottomMessageContainer}>
          <Text>{asd}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  messageContainer: {
    flex: 1,
    borderColor: theme.palette.neutral,
    borderWidth: 1,
    borderRadius: theme.borderRadius,
  },
  topMessageContainer: {
    height: 39,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.palette.lightGrey,
    paddingHorizontal: 16,
    borderTopLeftRadius: theme.borderRadius,
    borderTopRightRadius: theme.borderRadius,
    borderBottomWidth: 1,
    borderColor: theme.palette.neutral,
  },
  bottomMessageContainer: {
    minHeight: 53,
    padding: 16,
  },
});

export default Comment;

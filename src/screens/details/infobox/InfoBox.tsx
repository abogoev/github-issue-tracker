import React, { VFC } from "react";
import { StyleSheet, Text, View, Image, ViewProps } from "react-native";
import theme from "../../../theme/theme";
import { Issue, WithoutChildren } from "../../../types";

interface Props
  extends WithoutChildren<ViewProps>,
    Pick<Issue, "body" | "user"> {
  createdAt: Date;
}

const Comment: VFC<Props> = ({ body, user, style, createdAt, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Image
        accessibilityIgnoresInvertColors
        source={{ uri: user.avatar_url }}
        style={styles.image}
      />
      <View style={styles.messageContainer}>
        <View style={styles.topMessageContainer}>
          <Text>{user.login}</Text>
          <Text>commented on {createdAt.toLocaleString()}</Text>
        </View>
        <View style={styles.bottomMessageContainer}>
          <Text>{body}</Text>
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
    marginRight: theme.spacing.medium,
  },
  messageContainer: {
    flex: 1,
    borderColor: theme.palette.neutral,
    borderWidth: 1,
    borderRadius: theme.borderRadius,
  },
  topMessageContainer: {
    minHeight: 39,
    backgroundColor: theme.palette.lightGrey,
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    borderTopLeftRadius: theme.borderRadius,
    borderTopRightRadius: theme.borderRadius,
    borderBottomWidth: 1,
    borderColor: theme.palette.neutral,
  },
  bottomMessageContainer: {
    minHeight: 53,
    padding: theme.spacing.medium,
  },
});

export default Comment;

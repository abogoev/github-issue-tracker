import React from "react";
import { VFC } from "react";
import { StyleSheet, Text, View } from "react-native";
import OpenIssueIcon from "../../../assets/svg/open-issue.svg";
import ClosedIssueIcon from "../../../assets/svg/closed-issue.svg";
import theme from "../../theme/theme";
import CustomTouchableOpacity, {
  CustomTouchableOpacityProps,
} from "../touchableopacity/CustomTouchableOpacity";
// import Bookmark from "../bookmark/Bookmark";
import { Issue, WithoutChildren } from "../../types";

const IssueItem: VFC<WithoutChildren<CustomTouchableOpacityProps> & Issue> = ({
  style,
  title,
  createdAt,
  closedAt,
  user,
  number,
  ...props
}) => {
  return (
    <CustomTouchableOpacity style={[styles.container, style]} {...props}>
      <View style={styles.topContainer}>
        {closedAt ? (
          <ClosedIssueIcon style={styles.icon} />
        ) : (
          <OpenIssueIcon style={styles.icon} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text
            style={styles.description}
          >{`#${number} opened on ${createdAt.toLocaleString()} by ${
            user.login
          }`}</Text>
        </View>
        {/* <Bookmark owner={owner} repo={repo} number={number} /> */}
      </View>
    </CustomTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: theme.palette.white,
    borderColor: theme.palette.neutral,
    borderWidth: 1,
    minHeight: 62,
  },
  topContainer: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    ...theme.typography.largeText,
    color: theme.palette.veryDarkGrey,
  },
  description: {
    ...theme.typography.smallText,
    marginTop: 4,
    color: theme.palette.darkGrey,
  },
});

export default IssueItem;
import React from "react";
import { VFC } from "react";
import { StyleSheet, Text, View } from "react-native";
import OpenIssueIcon from "../../../assets/svg/open-issue.svg";
import ClosedIssueIcon from "../../../assets/svg/closed-issue.svg";
import BookIcon from "../../../assets/svg/book.svg";
import BookYellowIcon from "../../../assets/svg/book-yellow.svg";
import theme from "../../theme/theme";
import CustomTouchableOpacity, {
  CustomTouchableOpacityProps,
} from "../touchableopacity/CustomTouchableOpacity";
import Bookmark from "../bookmark/Bookmark";

interface Props extends Omit<CustomTouchableOpacityProps, "children"> {
  title: string;
  issueNumber: number;
  createdAt: Date;
  closedAt: Date | null;
  username: string;
}

const IssueItem: VFC<Props> = ({
  style,
  title,
  issueNumber,
  createdAt,
  closedAt,
  username,
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
          >{`#${issueNumber} opened on ${createdAt.toLocaleString()} by ${username}`}</Text>
        </View>
        <Bookmark />
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

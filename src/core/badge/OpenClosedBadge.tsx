import React, { VFC } from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import theme from "../../theme/theme";
import OpenIssueSvg from "../../../assets/svg/open-issue-white.svg";
import ClosedIssueSvg from "../../../assets/svg/closed-issue-white.svg";

interface Props extends ViewProps {
  isClosed?: boolean;
}

const OpenClosedBadge: VFC<Props> = ({ isClosed, style }) => {
  return (
    <View style={[styles(isClosed).container, style]}>
      {isClosed ? <ClosedIssueSvg /> : <OpenIssueSvg />}
      <Text style={styles().label}>{isClosed ? " Closed" : " Open"}</Text>
    </View>
  );
};

const styles = (isClosed?: Props["isClosed"]) =>
  StyleSheet.create({
    container: {
      height: 32,
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12,
      backgroundColor: isClosed ? theme.palette.purple : theme.palette.green,
      borderRadius: 28,
    },
    label: {
      ...theme.typography.regularTextBold,
      color: theme.palette.white,
    },
  });

export default OpenClosedBadge;

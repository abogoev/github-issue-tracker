import React, { useState, useEffect, VFC } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Comment from "./infobox/Comment";
import theme from "../../theme/theme";
import OpenClosedBadge from "./badge/OpenClosedBadge";
import BackIcon from "../../../assets/svg/back.svg";
import { getIssue } from "../../http/get";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../router/Router";
import { DETAILS_SCREEN } from "../../utils/constants";
import { Issue } from "../../types";

interface Props
  extends NativeStackScreenProps<RootStackParamList, typeof DETAILS_SCREEN> {
  a: boolean;
}

const Details: VFC<Props> = ({ route, navigation }) => {
  const { owner, repo, number } = route.params;
  const [issue, setIssue] = useState<Issue>();

  useEffect(() => {
    (async () => {
      try {
        const currentIssue = await getIssue({ owner, repo, number });
        setIssue(currentIssue);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(issue);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.goBack()}
        style={styles.back}
      >
        <BackIcon width={32} height={32} />
      </TouchableOpacity>
      {issue && (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{issue.title}</Text>
          <OpenClosedBadge isClosed={!!issue.closed_at} />
          <View style={styles.hr} />
          <Comment
            body={issue.body}
            user={issue.user}
            createdAt={new Date(issue.created_at)}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back: {
    alignSelf: "flex-start",
    marginLeft: 14,
    marginBottom: theme.spacing.medium,
  },
  container: {
    paddingHorizontal: 20,
  },
  title: {
    ...theme.typography.verylargeText,
    color: theme.palette.veryDarkGrey,
    marginBottom: theme.spacing.medium,
  },
  hr: {
    height: 1,
    backgroundColor: theme.palette.neutral,
    marginVertical: theme.spacing.medium,
  },
});

export default Details;

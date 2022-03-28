import React, { useState, useEffect } from "react";
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
import { DetailsNavigationProps } from "../../types";
import { VFC } from "react";
import OpenClosedBadge from "./badge/OpenClosedBadge";
import BackIcon from "../../../assets/svg/back.svg";
import { fetchIssuesByOwnerAndRepo } from "../../http/get";

interface Props extends DetailsNavigationProps {
  a: boolean;
}

const Details: VFC<Props> = ({ route, navigation }) => {
  // console.log(route.params);
  const { number, owner, repo } = route.params;
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        await fetchIssuesByOwnerAndRepo("octocat", "hello-world");
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.goBack()}
        style={styles.back}
      >
        <BackIcon width={32} height={32} />
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>About</Text>
        <OpenClosedBadge />
        <View style={styles.hr} />
        <Comment />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back: {
    alignSelf: "flex-start",
    marginLeft: 14,
    marginBottom: 16,
  },
  container: {
    paddingHorizontal: 20,
  },
  title: {
    ...theme.typography.verylargeText,
    color: theme.palette.veryDarkGrey,
    marginBottom: 16,
  },
  hr: {
    height: 1,
    backgroundColor: theme.palette.neutral,
    marginVertical: 16,
  },
});

export default Details;

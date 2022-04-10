import React, { useCallback, useEffect, useState, VFC } from "react";
import { ListRenderItem, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getIssue } from "../../http/get";
import { getAllIssueSearchParamsFromStorage } from "../../utils/utils";
import IssueItem from "../../core/issueitem/IssueItem";
import { BOOKMARKS_SCREEN, DETAILS_SCREEN } from "../../utils/constants";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../router/Router";
import { Issue, IssueSearchParams } from "../../types";

type IssueIntersept = Issue & IssueSearchParams;

const Bookmarks: VFC<
  NativeStackScreenProps<RootStackParamList, typeof BOOKMARKS_SCREEN>
> = ({ navigation }) => {
  const [bookmarkedIssues, setBookmarkedIssues] = useState<IssueIntersept[]>(
    []
  );

  useEffect(() => {
    (async () => {
      try {
        const issueSearchParams = await getAllIssueSearchParamsFromStorage();

        issueSearchParams.forEach(async (isp) => {
          const currentIssue = await getIssue(isp.owner, isp.repo, isp.number);
          setBookmarkedIssues((prev) => [...prev, { ...currentIssue, ...isp }]);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const renderItem: ListRenderItem<IssueIntersept> = useCallback(
    ({ item }) => (
      <IssueItem
        title={item.title}
        number={item.number}
        createdAt={item.createdAt}
        closedAt={item.closedAt}
        user={item.user.login}
        onPress={() =>
          navigation.navigate(DETAILS_SCREEN, {
            owner: item.owner,
            repo: item.repo,
            number: item.number,
          })
        }
      />
    ),
    []
  );

  return (
    <SafeAreaView>
      <FlatList
        data={bookmarkedIssues}
        renderItem={renderItem}
        // keyExtractor={}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Bookmarks;

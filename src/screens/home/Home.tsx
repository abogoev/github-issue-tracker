import React, { useState, VFC } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomContainer from "../../core/container/CustomContainer";
import Logo from "@assets/svg/logo.svg";
import theme from "../../theme/theme";
import { fetchIssuesByOwnerAndRepo } from "../../http/get";
import Pagination from "./pagination/Pagination";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HOME_SCREEN } from "../../utils/constants";
import { RootStackParamList } from "../../router/Router";
import { FetchIssueSearchParams, IssueIntercept } from "../../types";
import IssueList from "./issuelist/IssueList";
import CustomForm from "./form/CustomForm";
import { extractSubpages, getPieceFromArray } from "./homeHelper";

const BATCH = 10;

const Home: VFC<
  NativeStackScreenProps<RootStackParamList, typeof HOME_SCREEN>
> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [issues, setIssues] = useState<IssueIntercept[]>([]);
  const [index, setIndex] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useState<FetchIssueSearchParams>();

  const search = async ({ owner, repo, state }: FetchIssueSearchParams) => {
    try {
      setSearchParams({ owner, repo, state });

      const currentIssues = await fetchIssuesByOwnerAndRepo({
        owner,
        repo,
        state,
        page: 1,
      });

      setIssues(currentIssues.map((c) => ({ ...c, owner, repo, state })));
      setCurrentPage(2);
      const nums = extractSubpages(currentIssues.length, BATCH, 1);
      setNumbers(nums);
      setIndex(0);
    } catch (error) {
      console.log(error);
    }
  };

  const prevOrNext = async (isNext: boolean) => {
    try {
      const { owner, repo, state } = searchParams as FetchIssueSearchParams;

      const currentIssues = await fetchIssuesByOwnerAndRepo({
        owner,
        repo,
        state,
        page: currentPage,
      });

      setIssues(currentIssues.map((c) => ({ ...c, owner, repo, state })));
      const nums = extractSubpages(currentIssues.length, BATCH, currentPage);
      setNumbers(nums);
      setIndex(0);
      setCurrentPage((prev) => (isNext ? prev + 1 : prev - 1));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomContainer>
        <IssueList
          contentContainerStyle={{ paddingTop: "10%", paddingHorizontal: 20 }}
          ListHeaderComponent={
            <>
              <Logo style={styles.logo} />
              <Text style={styles.title}>Github Issue Tracker</Text>
              <CustomForm onSubmit={search} />
            </>
          }
          ListHeaderComponentStyle={{ marginBottom: theme.spacing.large }}
          issues={getPieceFromArray(issues, index, BATCH)}
          ListFooterComponent={
            numbers.length > 0 ? (
              <Pagination
                numbers={numbers}
                activeIndex={index}
                onPrev={() => prevOrNext(false)}
                onNext={() => prevOrNext(true)}
                onChangeActiveNumber={setIndex}
              />
            ) : null
          }
          ListFooterComponentStyle={{ marginTop: theme.spacing.large }}
        />
      </CustomContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: "center",
    marginBottom: theme.spacing.large,
  },
  title: {
    ...theme.typography.verylargeText,
    color: theme.palette.veryDarkGrey,
    alignSelf: "center",
    marginBottom: theme.spacing.medium,
  },
});

export default Home;

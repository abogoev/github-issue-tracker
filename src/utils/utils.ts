import AsyncStorage from "@react-native-async-storage/async-storage";
import { IssueSearchParams } from "../types";
import { ISSUE_SEARCH_PARAMS } from "./constants";

afterEach(() => {
  jest.clearAllMocks();
});

export const getAllIssueSearchParamsFromStorage = async () => {
  const issueSearchParamsJSON = await AsyncStorage.getItem(ISSUE_SEARCH_PARAMS);
  let issueSearchParams: IssueSearchParams[] = [];
  if (issueSearchParamsJSON) {
    issueSearchParams = JSON.parse(issueSearchParamsJSON);
  }

  return issueSearchParams;
};

export const setIssueSearchParamsInStorage = async (
  issueSearchParams: IssueSearchParams[]
) => {
  await AsyncStorage.setItem(
    ISSUE_SEARCH_PARAMS,
    JSON.stringify(issueSearchParams)
  );
};

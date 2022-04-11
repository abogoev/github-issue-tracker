import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetIssueSearchParams } from "../types";
import { ISSUE_SEARCH_PARAMS } from "./constants";

afterEach(() => {
  jest.clearAllMocks();
});

export const getAllIssueSearchParamsFromStorage = async () => {
  const issueSearchParamsJSON = await AsyncStorage.getItem(ISSUE_SEARCH_PARAMS);
  let issueSearchParams: GetIssueSearchParams[] = [];
  if (issueSearchParamsJSON) {
    issueSearchParams = JSON.parse(issueSearchParamsJSON);
  }

  return issueSearchParams;
};

export const setIssueSearchParamsInStorage = async (
  issueSearchParams: GetIssueSearchParams[]
) => {
  await AsyncStorage.setItem(
    ISSUE_SEARCH_PARAMS,
    JSON.stringify(issueSearchParams)
  );
};

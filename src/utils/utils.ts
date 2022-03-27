import AsyncStorage from "@react-native-async-storage/async-storage";
import { IssueSearchParams } from "../types";
import { ISSUE_SEARCH_PARAMS } from "./constants";

export const issueSearchParamsExistInStorage = async (
  { owner, repo, number }: IssueSearchParams,
  addIfMissing?: boolean
) => {
  let exists = false;
  const issueSearchParams = await getAllIssueSearchParamsFromStorage();

  const filtered = issueSearchParams.filter(
    (isp) => isp.owner !== owner && isp.repo !== repo && isp.number !== number
  );
  exists = filtered.length !== issueSearchParams.length;

  if (!exists && addIfMissing) {
    filtered.push({ owner, repo, number });
    await setIssueSearchParamsInStorage(filtered);
    exists = true;
  }

  return exists;
};

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

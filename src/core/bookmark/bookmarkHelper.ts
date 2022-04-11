import { GetIssueSearchParams } from "../../types";
import {
  getAllIssueSearchParamsFromStorage,
  setIssueSearchParamsInStorage,
} from "../../utils/utils";

export const issueSearchParamsExistInStorage = async (
  { owner, repo, number }: GetIssueSearchParams,
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

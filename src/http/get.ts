import { Issue, FetchIssueSearchParams, GetIssueSearchParams } from "../types";
import axiosInstance from "./axiosInstance";

export const fetchIssuesByOwnerAndRepo = async ({
  owner,
  repo,
  state,
  page,
}: FetchIssueSearchParams) => {
  const res = await axiosInstance.get<Issue[]>(
    `/repos/${owner}/${repo}/issues`,
    { params: { state, per_page: 50, page } }
  );
  return res.data;
};

export const getIssue = async ({
  owner,
  repo,
  number,
}: GetIssueSearchParams) => {
  const res = await axiosInstance.get<Issue>(
    `/repos/${owner}/${repo}/issues/${number}`
  );
  return res.data;
};

import { Issue, FetchIssueSearchParams, GetIssueSearchParams } from "../types";
import axiosInstance from "./axiosInstance";

export const fetchIssuesByOwnerAndRepo = async ({
  owner,
  repo,
  page,
}: FetchIssueSearchParams) => {
  const res = await axiosInstance.get<Issue[]>(
    `/repos/${owner}/${repo}/issues`,
    { params: { per_page: 50, page } }
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

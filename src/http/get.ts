import { Issue } from "../types";
import axiosInstance from "./axiosInstance";

export const getIssuesByOwnerAndRepo = async (
  owner: string,
  repo: string,
  page: number
) => {
  const res = await axiosInstance.get<Issue[]>(
    `/repos/${owner}/${repo}/issues`,
    { params: { per_page: 50, page } }
  );
  return res.data;
};

export const getIssue = async (owner: string, repo: string, number: number) => {
  const res = await axiosInstance.get<Issue>(
    `/repos/${owner}/${repo}/issues/${number}`
  );
  return res.data;
};

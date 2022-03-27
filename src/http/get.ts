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
  console.log(res.data.length);
  return res.data;
};

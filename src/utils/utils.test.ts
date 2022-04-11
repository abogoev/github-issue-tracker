import { GetIssueSearchParams } from "../types";
import {
  getAllIssueSearchParamsFromStorage,
  setIssueSearchParamsInStorage,
} from "./utils";

const issueSearchParams: GetIssueSearchParams[] = [
  { owner: "vanko", repo: "rep", number: 1 },
];

describe("getAllIssueSearchParamsFromStorage and setIssueSearchParamsInStorage", () => {
  it("should work correctly", async () => {
    let result = await getAllIssueSearchParamsFromStorage();

    expect(result).toHaveLength(0);

    await setIssueSearchParamsInStorage(issueSearchParams);
    result = await getAllIssueSearchParamsFromStorage();

    expect(result).toEqual(issueSearchParams);
  });
});

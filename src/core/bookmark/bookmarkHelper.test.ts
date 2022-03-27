import { getAllIssueSearchParamsFromStorage } from "../../utils/utils";
import { issueSearchParamsExistInStorage } from "./bookmarkHelper";

const issueSearchParams = [{ owner: "vanko", repo: "rep", number: 1 }];

describe("issueSearchParamsExistInStorage", () => {
  it("should work correctly", async () => {
    let result = await issueSearchParamsExistInStorage(issueSearchParams[0]);

    expect(result).toBe(false);

    result = await issueSearchParamsExistInStorage(issueSearchParams[0], true);
    expect(result).toBe(true);

    console.log(await getAllIssueSearchParamsFromStorage());
    result = await issueSearchParamsExistInStorage(issueSearchParams[0]);
    expect(result).toBe(true);
  });
});

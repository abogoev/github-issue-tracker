import {
  getAllIssueSearchParamsFromStorage,
  setIssueSearchParamsInStorage,
  issueSearchParamsExistInStorage,
} from "./utils";

afterEach(() => {
  jest.resetAllMocks();
});

const issueSearchParams = [{ owner: "vanko", repo: "rep", number: 1 }];

describe("getAllIssueSearchParamsFromStorage and setIssueSearchParamsInStorage", () => {
  it("should work correctly", async () => {
    let result = await getAllIssueSearchParamsFromStorage();

    expect(result).toHaveLength(0);

    await setIssueSearchParamsInStorage(issueSearchParams);
    result = await getAllIssueSearchParamsFromStorage();

    expect(result).toEqual(issueSearchParams);
  });
});

describe("issueSearchParamsExistInStorage", () => {
  it("should work correctly", async () => {
    let result = await issueSearchParamsExistInStorage(issueSearchParams[0]);

    expect(result).toBe(false);

    result = await issueSearchParamsExistInStorage(issueSearchParams[0], true);
    expect(result).toBe(true);
  });
});

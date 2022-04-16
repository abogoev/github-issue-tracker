import { FetchIssueSearchParams } from "../types";
import * as validationSchemas from "./validationSchemas";

describe("fetchIssuesValidationSchema", () => {
  it("should validate data correctly", () => {
    const validInput: FetchIssueSearchParams = {
      owner: "owner",
      repo: "repo",
      state: "all",
    };
    expect(
      validationSchemas.fetchIssuesValidationSchema.validateSync(validInput)
    ).toBe(validInput);

    const invalidInput: FetchIssueSearchParams = {
      owner: "",
      repo: "",
      state: "all",
    };
    expect(() => {
      validationSchemas.fetchIssuesValidationSchema.validateSync(invalidInput);
    }).toThrow();
  });
});

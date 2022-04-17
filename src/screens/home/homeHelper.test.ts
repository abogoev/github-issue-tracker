import * as homeHelper from "./homeHelper";

describe("extractSubpages", () => {
  it("should calculate correctly", () => {
    expect(homeHelper.extractSubpages(12, 5, 4, false)).toEqual([1, 2, 3]);
    expect(homeHelper.extractSubpages(12, 5, 4, true)).toEqual([5, 6, 7]);
  });
});

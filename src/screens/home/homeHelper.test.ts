import * as homeHelper from "./homeHelper";

describe("extractSubpages", () => {
  it("should calculate correctly", () => {
    expect(homeHelper.extractSubpages(12, 5, 4, false)).toEqual([1, 2, 3]);
    expect(homeHelper.extractSubpages(12, 5, 4, true)).toEqual([5, 6, 7]);
  });
});

describe("getPieceFromArray", () => {
  it("should return a piece correctly", () => {
    expect(homeHelper.getPieceFromArray([1, 2, 3], 0, 2)).toEqual([1, 2]);
    expect(homeHelper.getPieceFromArray([1, 2, 3], 2, 2)).toEqual([3]);
  });
});

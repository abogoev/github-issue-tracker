import * as constants from "./constants";

describe("constants", () => {
  it("should match snapshot", () => {
    expect(constants).toMatchSnapshot();
  });
});

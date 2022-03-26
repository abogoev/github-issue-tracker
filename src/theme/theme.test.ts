import theme from "./theme";

describe("theme", () => {
  it("should match snapshot", () => {
    expect(theme).toMatchSnapshot();
  });
});

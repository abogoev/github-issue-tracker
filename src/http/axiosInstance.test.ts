import axiosInstance from "./axiosInstance";

describe("axiosInstance", () => {
  it("should match snapshot", () => {
    expect(axiosInstance.defaults).toMatchSnapshot();
  });
});

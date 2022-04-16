import React from "react";
import InfoBox from "./InfoBox";
import { create } from "react-test-renderer";

describe("InfoBox", () => {
  it("should render correctly", () => {
    const component = create(
      <InfoBox
        body="Body"
        user={{ avatar_url: "", login: "username" }}
        createdAt={new Date("2000-01-01")}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

import React from "react";
import IssueItem from "./IssueItem";
import { create } from "react-test-renderer";

describe("OpenClosedBadge", () => {
  it("should render correctly", () => {
    const mockOnPress = jest.fn();

    const component = create(
      <IssueItem
        title="Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti dolorem est eius cum tempora id "
        number={5}
        createdAt={new Date("2000-01-01")}
        closedAt={null}
        user={{ avatar_url: "", login: "vanko" }}
        onPress={mockOnPress}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

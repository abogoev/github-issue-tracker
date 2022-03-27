import React from "react";
import IssueItem from "./IssueItem";
import { create } from "react-test-renderer";

describe("OpenClosedBadge", () => {
  it("should render correctly", () => {
    const mockOnPress = jest.fn();

    const component = create(
      <IssueItem
        title="Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti dolorem est eius cum tempora id "
        issueNumber={5}
        createdAt={new Date()}
        closedAt={null}
        username="vanko"
        onPress={mockOnPress}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

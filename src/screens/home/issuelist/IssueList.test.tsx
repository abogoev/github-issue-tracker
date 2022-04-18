import React from "react";
import "react-native";
import IssueList from "./IssueList";
import { create } from "react-test-renderer";
import { IssueIntercept } from "../../../types";

jest.mock("@react-navigation/core");

describe("IssueList", () => {
  it("should render correctly", () => {
    const issues: IssueIntercept[] = [
      {
        title: "Title",
        number: 1,
        created_at: "2012-04-23T18:25:43.511Z",
        closed_at: null,
        owner: "Owner",
        repo: "Repo",
        body: "asd",
        user: { avatar_url: "", login: "username" },
      },
    ];
    const component = create(<IssueList data={issues} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

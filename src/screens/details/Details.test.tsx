import React from "react";
import "react-native";
import { act, create, ReactTestRenderer } from "react-test-renderer";
import Details from "./Details";
import { getIssue } from "../../http/get";
import { Issue } from "../../types";
import CustomTouchableOpacity from "../../core/touchableopacity/CustomTouchableOpacity";

jest.mock("@react-navigation/core");

jest.mock("../../http/get");

const mockedGetIssue = getIssue as jest.MockedFunction<typeof getIssue>;

describe("Details", () => {
  it("should match snapshot and call back correctly", async () => {
    const goBackMock = jest.fn();
    const props: any = {
      navigation: {
        goBack: goBackMock,
      },
      route: {
        params: { owner: "owner", repo: "repo", number: 1 },
      },
    };
    const data: Issue = {
      number: 1,
      title: "title",
      user: {
        login: "login",
        avatar_url: "",
      },
      body: "body",
      created_at: "2012-04-23T18:25:43.511Z",
      closed_at: null,
    };

    mockedGetIssue.mockResolvedValueOnce(data);

    let component: ReactTestRenderer | undefined;
    await act(async () => {
      component = await create(<Details {...props} />);
    });

    expect(goBackMock).not.toHaveBeenCalled();
    component?.root.findByType(CustomTouchableOpacity).props.onPress();
    expect(goBackMock).toHaveBeenCalledTimes(1);

    expect(component).toMatchSnapshot();
  });
});

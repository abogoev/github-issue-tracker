import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { act, create, ReactTestRenderer } from "react-test-renderer";
import { AppStack } from "./Router";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";

describe("Router", () => {
  it("should have Home as initial screen", () => {
    let component: ReactTestRenderer | undefined;
    act(() => {
      component = create(
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      );
    });

    component?.root.findByType(Home);
    expect(() => {
      component?.root.findByType(Details);
    }).toThrow();
  });
});

import React from "react";
import "react-native";
import { create } from "react-test-renderer";
import App from "./App";
import { useFonts } from "expo-font";
import Router from "./src/router/Router";
import AppLoading from "expo-app-loading";

jest.mock("expo-font");

const mockedUseFonts = useFonts as jest.MockedFunction<typeof useFonts>;

describe("App", () => {
  it("should match snapshot", () => {
    mockedUseFonts.mockReturnValueOnce([false, null]);

    let component = create(<App />);

    component.root.findByType(AppLoading);

    mockedUseFonts.mockReturnValueOnce([true, null]);

    component = create(<App />);

    component.root.findByType(Router);
  });
});

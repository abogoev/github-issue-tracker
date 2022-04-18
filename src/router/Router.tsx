import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";
import theme from "../theme/theme";
import {
  BOOKMARKS_SCREEN,
  DETAILS_SCREEN,
  HOME_SCREEN,
} from "../utils/constants";

export type RootStackParamList = {
  [HOME_SCREEN]: undefined;
  [DETAILS_SCREEN]: { owner: string; repo: string; number: number };
  [BOOKMARKS_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const containerTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.palette.white,
  },
};

export const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={HOME_SCREEN} component={Home} />
    <Stack.Screen name={DETAILS_SCREEN} component={Details} />
  </Stack.Navigator>
);

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={containerTheme}>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;

import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";
import { CurrentRoute, StackParams } from "../types";
import theme from "../theme/theme";

const Stack = createNativeStackNavigator<StackParams>();

const containerTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.palette.white,
  },
};

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={containerTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={CurrentRoute.Home} component={Home} />
          <Stack.Screen name={CurrentRoute.Details} component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;

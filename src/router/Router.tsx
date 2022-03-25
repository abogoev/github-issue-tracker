import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../screens/home/Home";
import Details from "../screens/about/Details";
import { CurrentRoute, StackParams } from "../types.d";

const Stack = createNativeStackNavigator<StackParams>();

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
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

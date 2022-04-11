import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Router from "./src/router/Router";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Router />;
};

export default App;

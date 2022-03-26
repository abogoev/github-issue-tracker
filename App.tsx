import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import MainApp from "./MainApp";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <MainApp />;
};

export default App;

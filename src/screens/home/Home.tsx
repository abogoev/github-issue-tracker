import { Button, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CurrentRoute, HomeNavigationProps } from "../..";

const Home = ({ navigation }: HomeNavigationProps) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title="To Details"
        onPress={() => navigation.navigate(CurrentRoute.Details)}
      />
    </SafeAreaView>
  );
};

export default Home;

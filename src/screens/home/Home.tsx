import { Button, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CurrentRoute, HomeNavigationProps } from "../../types.d";

interface Props extends HomeNavigationProps {
  a: boolean;
}

const Home: React.FC<Props> = ({ navigation, a }) => {
  console.log(a);
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

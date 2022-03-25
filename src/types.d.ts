import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum CurrentRoute {
  Home = "Home",
  Details = "Details",
}

export type StackParams = {
  [CurrentRoute.Home]: undefined;
  [CurrentRoute.Details]: undefined;
};

type HomeNavigationProps = NativeStackScreenProps<
  StackParams,
  typeof CurrentRoute.Home
>;

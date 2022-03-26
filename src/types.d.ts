import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

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

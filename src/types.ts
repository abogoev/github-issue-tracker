import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export enum CurrentRoute {
  Home = "Home",
  Details = "Details",
}

export type StackParams = {
  [CurrentRoute.Home]: undefined;
  [CurrentRoute.Details]: { owner: string; repo: string; number: number };
};

export type HomeNavigationProps = NativeStackScreenProps<
  StackParams,
  typeof CurrentRoute.Home
>;

export type DetailsNavigationProps = NativeStackScreenProps<
  StackParams,
  typeof CurrentRoute.Details
>;

export type Issue = {
  number: number;
  title: string;
  user: {
    avatar_url: string;
  };
  body: string;
};

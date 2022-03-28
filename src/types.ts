import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export enum CurrentRoute {
  Home = "Home",
  Details = "Details",
  Bookmarks = "Bookmarks",
}

export type StackParams = {
  [CurrentRoute.Home]: undefined;
  [CurrentRoute.Details]: { owner: string; repo: string; number: number };
  [CurrentRoute.Bookmarks]: undefined;
};

export type HomeNavigationProps = NativeStackScreenProps<
  StackParams,
  typeof CurrentRoute.Home
>;

export type DetailsNavigationProps = NativeStackScreenProps<
  StackParams,
  typeof CurrentRoute.Details
>;

export type BookmarksNavigationProps = NativeStackScreenProps<
  StackParams,
  typeof CurrentRoute.Bookmarks
>;

export type Issue = {
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  body: string;
  createdAt: Date;
  closedAt: Date | null;
};

export interface IssueSearchParams {
  owner: string;
  repo: string;
  number: number;
}

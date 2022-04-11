export interface Issue {
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  body: string;
  createdAt: Date;
  closedAt: Date | null;
}

export interface GetIssueSearchParams {
  owner: string;
  repo: string;
  number: number;
}

export interface FetchIssueSearchParams {
  owner: string;
  repo: string;
  page: number;
}

export type WithoutChildren<T> = Omit<T, "children">;

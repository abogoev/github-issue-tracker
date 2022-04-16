export interface Issue {
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  body: string;
  created_at: string;
  closed_at: string | null;
}

export type IssueIntercept = Issue & GetIssueSearchParams;

export interface GetIssueSearchParams {
  owner: string;
  repo: string;
  number: number;
}

export interface FetchIssueSearchParams {
  owner: string;
  repo: string;
  state: "open" | "closed" | "all";
  page?: number;
}

export type WithoutChildren<T> = Omit<T, "children">;

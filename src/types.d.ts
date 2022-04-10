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

export interface IssueSearchParams {
  owner: string;
  repo: string;
  number: number;
}

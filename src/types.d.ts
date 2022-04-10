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

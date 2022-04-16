import { Issue, FetchIssueSearchParams, GetIssueSearchParams } from "../types";
import axiosInstance from "./axiosInstance";
import { fetchIssuesByOwnerAndRepo, getIssue } from "./get";

jest.mock("./axiosInstance.ts");

const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe("fetchIssuesByOwnerAndRepo", () => {
  const issueSearchParams: FetchIssueSearchParams = {
    owner: "vanko",
    repo: "asd",
    state: "all",
    page: 1,
  };

  it("should return correct response", async () => {
    const data: Issue[] = [
      {
        number: 1,
        title: "title",
        user: {
          login: "login",
          avatar_url: "",
        },
        body: "body",
        created_at: "2012-04-23T18:25:43.511Z",
        closed_at: null,
      },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data });

    const result = await fetchIssuesByOwnerAndRepo(issueSearchParams);

    expect(mockedAxios.get).toBeCalledWith(
      `/repos/${issueSearchParams.owner}/${issueSearchParams.repo}/issues`,
      {
        params: {
          page: issueSearchParams.page,
          state: issueSearchParams.state,
          per_page: 50,
        },
      }
    );

    expect(result).toEqual(data);
  });

  it("should throw error", async () => {
    const message = "something";
    mockedAxios.get.mockRejectedValueOnce(message);

    try {
      await fetchIssuesByOwnerAndRepo(issueSearchParams);
    } catch (error) {
      expect(error).toBe(message);
    }
  });
});

describe("getIssue", () => {
  const issueSearchParams: GetIssueSearchParams = {
    owner: "vanko",
    repo: "asd",
    number: 123,
  };

  it("should return correct response", async () => {
    const data: Issue = {
      number: 123,
      title: "title",
      user: {
        login: "login",
        avatar_url: "",
      },
      body: "body",
      created_at: "2012-04-23T18:25:43.511Z",
      closed_at: null,
    };
    mockedAxios.get.mockResolvedValueOnce({ data });

    const result = await getIssue(issueSearchParams);

    expect(mockedAxios.get).toBeCalledWith(
      `/repos/${issueSearchParams.owner}/${issueSearchParams.repo}/issues/${issueSearchParams.number}`
    );

    expect(result).toEqual(data);
  });

  it("should throw error", async () => {
    const message = "something";
    mockedAxios.get.mockRejectedValueOnce(message);

    try {
      await getIssue(issueSearchParams);
    } catch (error) {
      expect(error).toBe(message);
    }
  });
});

import { Issue, FetchIssueSearchParams } from "../types";
import axiosInstance from "./axiosInstance";
import { fetchIssuesByOwnerAndRepo } from "./get";

jest.mock("./axiosInstance.ts");

const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe("fetchIssuesByOwnerAndRepo", () => {
  const issueSearchParams: FetchIssueSearchParams = {
    owner: "vanko",
    repo: "asd",
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
        createdAt: new Date("2012-04-23T18:25:43.511Z"),
        closedAt: null,
      },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data });

    const result = await fetchIssuesByOwnerAndRepo(issueSearchParams);

    expect(mockedAxios.get).toBeCalledWith(
      `/repos/${issueSearchParams.owner}/${issueSearchParams.repo}/issues`,
      {
        params: { page: issueSearchParams.page, per_page: 50 },
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

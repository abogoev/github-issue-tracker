import axiosInstance from "./axiosInstance";
import { fetchIssuesByOwnerAndRepo } from "./get";

jest.mock("./axiosInstance.ts");

const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe("fetchIssuesByOwnerAndRepo", () => {
  const owner = "vanko";
  const repo = "asd";
  const page = 1;

  it("should return correct response", async () => {
    const data = [
      {
        number: 1,
        title: "title",
        user: {
          login: "login",
          avatar_url: "",
        },
        body: "body",
        createdAt: "2012-04-23T18:25:43.511Z",
        closedAt: null,
      },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data });

    const result = await fetchIssuesByOwnerAndRepo(owner, repo, page);

    expect(mockedAxios.get).toBeCalledWith(`/repos/${owner}/${repo}/issues`, {
      params: { page, per_page: 50 },
    });

    expect(result).toEqual(data);
  });

  it("should throw error", async () => {
    const message = "something";
    mockedAxios.get.mockRejectedValueOnce(message);

    try {
      await fetchIssuesByOwnerAndRepo(owner, repo, page);
    } catch (error) {
      expect(error).toBe(message);
    }
  });
});

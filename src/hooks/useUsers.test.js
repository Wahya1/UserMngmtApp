import { waitFor } from "@testing-library/dom";
import { customRenderHook } from "../helpers/customRenderHook";
import useUsers from "./useUsers";

// we need to mock three things fetch, useSelector, usedispatchedaction

global.fetch = jest.fn();

describe("useUsers", () => {
  const mockedData = [
    {
      id: 1,
      name: "driss",
      username: "foo",
      email: "foo@bar.com",
      address: {},
      phone: "",
      website: "",
      company: {},
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetched successfuly", async () => {
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockedData),
    });

    const result = customRenderHook(useUsers);

    console.log({ result });
    // expect(result.result.current.isLoading).toBeTruthy();
    // // to compare simple types use toEqual(type) and for objects , boolean use toBe(obj)

    // await waitFor(() => {
    //   expect(result.result.current.isLoading).toBeFalsy();
    //   expect(result.result.current.users).toStrictEqual(mockedData);
    // });
  });

  test("fetching error", async () => {
    const error = "fetching error";

    // Mock a failed fetch
    global.fetch = jest.fn().mockRejectedValue(new Error(error));

    const result = customRenderHook(useUsers);

    // Initially users array should be empty
    expect(result.result.current).toStrictEqual([]);

    // await waitFor(() => {
    //   expect(result.result.current.isLoading).toBeTruthy();
    // });

    // // Wait until fetch finishes (loading stops) and error is set
    // await waitFor(() => {
    //   expect(result.current.usersData.isLoading).toBeFalsy();
    //   expect(result.current.usersData.error).toBe(error);
    // });
  });
});

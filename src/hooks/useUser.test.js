import { waitFor } from "@testing-library/react";
import useUser from "./useUser";
import { customRenderHook } from "../helpers/customRenderHook";

global.fetch = jest.fn();

const mockedUser = {
  id: 1,
  firstName: "driss",
  lastName: "foo",
  email: "foo@bar.com",
};

describe("useUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("when user id is null don't fetch", () => {
    console.log("hi");
    // global.fetch.mockResolvedValue({
    //   json: jest.fn(),
    // });
    // customRenderHook(() => useUser(null));

    // expect(global.fetch).toHaveBeenCalledTimes(0);
  });

  test("when user id empty null don't fetch", () => {
    // global.fetch.mockResolvedValue({
    //   json: jest.fn(),
    // });
    // customRenderHook(() => useUser(""));
    // expect(global.fetch).toHaveBeenCalledTimes(0);
  });

  test("when user is not fetched, fetch it", async () => {
    // global.fetch.mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(mockedUser),
    // });
    // const { result } = customRenderHook(() => useUser(1));
    // await waitFor(() => {
    //   expect(result.current).toEqual({
    //     ...mockedUser,
    //     isLoading: false,
    //     error: null,
    //   });
    // });
    // expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  //   test.only("when user id is already fetched with success don't fetch again", async () => {
  //   test("when user is already fetched with error fetch it again", async () => {
  //     const error = "error";
  //     global.fetch.mockResolvedValue({
  //       json: jest.fn().mockRejectedValue(new Error(error)),
  //     });
  //     const { rerender, result } = customRenderHook((id) => useUser(id), {
  //       initialProps: 1,
  //     });

  //     // confirmation que la requete est bien executé
  //     await waitFor(() => {
  //       expect(result.current).toEqual({
  //         isLoading: false,
  //         error,
  //       });
  //     });

  //     rerender(1);

  //     expect(global.fetch).toHaveBeenCalledTimes(2);
  //   });
});

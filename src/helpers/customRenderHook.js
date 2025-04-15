import { renderHook } from "@testing-library/react";
import store from "../test-utils/setupTestStore";
import { Provider } from "react-redux";

export const customRenderHook = (hook) =>
  renderHook(hook, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  });

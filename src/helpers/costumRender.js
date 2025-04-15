import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import store from "../test-utils/setupTestStore";

export const customRender = (comp) =>
  render(<Provider store={store}>{comp}</Provider>);

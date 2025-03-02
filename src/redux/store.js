import { createStore, combineReducers } from "redux";

import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;

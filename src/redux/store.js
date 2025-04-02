import { createStore, combineReducers } from "redux";

import usersReducer from "./UsersReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;

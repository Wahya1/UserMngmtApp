import { combineReducers, createStore } from "redux";

import usersReducer from "../redux/UsersReducer";
import userReducer from "../redux/UserReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
});

export const setupTestStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const store = setupTestStore();

export default store;

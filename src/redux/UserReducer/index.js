import {
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  UPDATE_USER,
} from "./action";

const initialState = {
  loading: true,
  users: [],
  erro: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: payload };

    case ADD_USER:
      return {};
    case DELETE_USER:
      return {};
    case UPDATE_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
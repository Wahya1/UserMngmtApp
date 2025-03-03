import {
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./action";

const initialState = {
  loading: true,
  users: [],
  error: null,
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
      return { ...state, users: [...state.users, payload.user] };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => payload.id !== user.id),
      };

    default:
      return state;
  }
};

export default userReducer;

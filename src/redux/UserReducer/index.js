import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./action";

const initialState = {
  loading: true,
  user: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default userReducer;

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const FILTER_USERS_SEARCH = "FILTER_USERS_SEARCH";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: { user },
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: { id },
});

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });

export const fetchUsersSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error.message,
});

export const filterUsersSearch = (filtredUsers) => ({
  type: FILTER_USERS_SEARCH,
  payload: filtredUsers,
});

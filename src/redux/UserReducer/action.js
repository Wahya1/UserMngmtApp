export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: { user },
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: { id },
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: { user },
});



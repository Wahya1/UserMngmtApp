import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { Box } from "@mui/material";

import UserList from "./component";
import AddUserDialogContainer from "../AddUserDialog";

import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../../redux/UserReducer/action";

const UserListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersRequest());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("error when users fetching ");
      })
      .then((data) => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  }, [dispatch]);

  return (
    <Box sx={{ padding: 2 }}>
      <AddUserDialogContainer />
      <UserList />
    </Box>
  );
};

export default UserListContainer;

import { connect } from "react-redux";
import React, { Component } from "react";

import { Box } from "@mui/material";

import UserList from "./component";
import AddUserDialogContainer from "../AddUserDialog";
import { addUser } from "../../redux/UserReducer/action";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../../redux/UserReducer/action";
const mapStateToProps = ({ user: { loading, users, error } }) => ({
  loading,
  users,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
  fetchUsers: () => {
    dispatch({ type: FETCH_USERS_REQUEST });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Erreur lors du chargement des utilisateurs");
      })
      .then((data) => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
      });
  },
});

class UserListContainer extends Component {
  render() {
    const { fetchUsers, loading, users, error } = this.props;

    return (
      <Box sx={{ padding: 2 }}>
        <AddUserDialogContainer />

        <UserList
          fetchUsers={fetchUsers}
          loading={loading}
          users={users}
          error={error}
        />
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);

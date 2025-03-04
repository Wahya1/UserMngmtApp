import { connect } from "react-redux";
import React, { Component } from "react";

import UserList from "./component";
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
  handleAddUser = () => {
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      name: "New User",
      username: "newuser",
      email: "newuser@example.com",
      address: { city: "Unknown" },
      phone: "000-000-0000",
    };

    this.props.addUser(newUser);
  };

  render() {
    const { fetchUsers, loading, users, error } = this.props;

    return (
      <UserList
        fetchUsers={fetchUsers}
        handleAddUser={this.handleAddUser}
        loading={loading}
        users={users}
        error={error}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);

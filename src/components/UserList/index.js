import { connect } from "react-redux";
import React, { Component } from "react";

import { Button, Box } from "@mui/material";

import UserList from "./component";
import AddUserDialog from "../AddUserDialog/component";
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
  state = {
    open: false,
    newUser: {
      name: "",
      username: "",
      email: "",
      address: { city: "" },
      phone: "",
    },
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newUser: {
        ...prevState.newUser,
        ...(name === "city"
          ? { address: { ...prevState.newUser.address, city: value } }
          : { [name]: value }),
      },
    }));
  };

  handleSubmit = () => {
    const { newUser } = this.state;
    console.log({ newUser });
    const userWithId = { ...newUser, id: Math.floor(Math.random() * 1000) };
    this.props.addUser(userWithId);
    this.handleClose();

    this.setState({
      newUser: {
        name: "",
        username: "",
        email: "",
        address: { city: "" },
        phone: "",
      },
    });
  };

  render() {
    const { fetchUsers, loading, users, error } = this.props;
    const { open, newUser } = this.state;

    return (
      <Box sx={{ padding: 2 }}>
        <Button variant="contained" color="primary" onClick={this.handleOpen}>
          Add User
        </Button>

        <UserList
          fetchUsers={fetchUsers}
          loading={loading}
          users={users}
          error={error}
        />

        <AddUserDialog
          open={open}
          handleClose={this.handleClose}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newUser={newUser}
        />
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);

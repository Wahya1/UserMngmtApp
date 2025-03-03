import React, { Component } from "react";

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../../redux/UserReducer/action";
import UserItemContainer from "../UserItems";

import { Button, Container, Grid, Typography } from "@mui/material";

class UserList extends Component {
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const { dispatch } = this.props;

    dispatch({ type: FETCH_USERS_REQUEST });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
      });
  };

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
    const { loading, users, error, addUser } = this.props;

    if (loading) return <Typography variant="h6">Chargement...</Typography>;
    if (error)
      return (
        <Typography variant="h6" color="error">
          Erreur : {error}
        </Typography>
      );

    return (
      <Container sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={this.handleAddUser}
        >
          Add User
        </Button>
        <Grid sx={{ padding: "2px" }} />
        <Grid container spacing={2}>
          {users.map((user) => (
            <UserItemContainer
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default UserList;

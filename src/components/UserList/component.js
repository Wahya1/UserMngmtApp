import React, { Component } from "react";

import UserItemContainer from "../UserItems";

import { Button, Container, Grid, Typography } from "@mui/material";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { loading, users, error, handleAddUser } = this.props;

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
          onClick={handleAddUser}
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

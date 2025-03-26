import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import UserItems from "../UserItems/component";

const UserList = () => {
  const { loading, users, error } = useSelector((state) => state.user);

  if (loading) return <Typography variant="h6">Chargement...</Typography>;
  if (error)
    return (
      <Typography variant="h6" color="error">
        Erreur : {error}
      </Typography>
    );

  return (
    <Container sx={{ mt: 3 }}>
      <Grid sx={{ padding: "2px" }} />
      <Grid container spacing={2}>
        {users.map((user) => (
          <UserItems
            key={user.id}
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
};

export default UserList;

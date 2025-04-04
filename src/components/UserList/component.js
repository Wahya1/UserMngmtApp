import React from "react";

import { Container, Grid, Typography } from "@mui/material";

import UserItems from "../UserItems/component";
import useUsers from "../../hooks/useUsers";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useUsers();
  const { loading, error } = useSelector((state) => state.users);

  if (loading) return <Typography variant="h6">Chargement...</Typography>;
  if (error)
    return (
      <Typography variant="h6" color="error">
        Erreur : {error}
      </Typography>
    );

  return (
    <Container sx={{ mb: 10 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          fontSize: "1.8rem",
          fontWeight: 600,
          color: "black",
          letterSpacing: "0.5px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Users List
      </Typography>
      <Grid container spacing={2}>
        {users?.map((user) => (
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

import React from "react";

import { Box } from "@mui/material";

import UserList from "./component";
import useUsers from "../../hooks/useUsers";

const UserListContainer = () => {
  const users = useUsers();

  //search logic here

  return (
    <Box sx={{ padding: 2 }}>
      <UserList users={users} />
    </Box>
  );
};

export default UserListContainer;

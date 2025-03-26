import React from "react";
import { useState } from "react";

import { Box, Button } from "@mui/material";

import AddUserDialog from "./component";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/UserReducer/action";

const AddUserDialogContainer = () => {
  const dispatch = useDispatch();

  const [dialogState, setDialogState] = useState({
    open: false,
    newUser: {
      name: "",
      username: "",
      email: "",
      address: { city: "" },
      phone: "",
    },
  });

  const handleOpen = () => {
    setDialogState((prevState) => ({ ...prevState, open: true }));
  };

  const handleClose = () => {
    setDialogState((prevState) => ({ ...prevState, open: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDialogState((prevState) => ({
      ...prevState,
      newUser: {
        ...prevState.newUser,
        ...(name === "city"
          ? { address: { ...prevState.newUser.address, city: value } }
          : { [name]: value }),
      },
    }));
  };

  const handleSubmit = () => {
    const { newUser } = dialogState;
    const userWithId = { ...newUser, id: Math.floor(Math.random() * 1000) };

    dispatch(addUser(userWithId));

    handleClose();

    setDialogState((prevState) => ({
      ...prevState,
      newUser: {
        name: "",
        username: "",
        email: "",
        address: { city: "" },
        phone: "",
      },
    }));
  };

  const { open, newUser } = dialogState;
  return (
    <Box sx={{ padding: 2 }}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add User
      </Button>
      <AddUserDialog
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newUser={newUser}
      />
    </Box>
  );
};

export default AddUserDialogContainer;

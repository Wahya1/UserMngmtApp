import React, { Component } from "react";

import { Box, Button } from "@mui/material";

import AddUserDialog from "./component";
import { addUser } from "../../redux/UserReducer/action";
import { connect } from "react-redux";

const mapDispatchToProps = { addUser };

class AddUserDialogContainer extends Component {
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
    const { open, newUser } = this.state;

    return (
      <Box sx={{ padding: 2 }}>
        <Button variant="contained" color="primary" onClick={this.handleOpen}>
          Add User
        </Button>
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

export default connect(null, mapDispatchToProps)(AddUserDialogContainer);

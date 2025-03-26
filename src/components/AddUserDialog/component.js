import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Grid,
} from "@mui/material";

const UserDialog = ({
  open,
  handleClose,
  handleChange,
  handleSubmit,
  newUser,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              name="name"
              value={newUser.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Username"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="City"
              name="city"
              value={newUser.address.city}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              name="phone"
              value={newUser.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;

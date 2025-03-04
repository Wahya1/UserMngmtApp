import { Component } from "react";

import { TextField, Box, Grid, IconButton } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";

class UserItems extends Component {
  handleDelete = () => {
    this.props.deleteUser(this.props.id);
  };

  render() {
    const { id, name, username, email, address, phone } = this.props;

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 2,
          borderBottom: "1px solid #fff",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={1}>
            <TextField
              label="ID"
              value={id}
              variant="outlined"
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Name"
              value={name}
              variant="outlined"
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Username"
              value={username}
              variant="outlined"
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="City"
              value={address?.city || "Unknown"} 
              variant="outlined"
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Email"
              value={email}
              variant="outlined"
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Phone"
              value={phone}
              variant="outlined"
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={1} sx={{ display: "flex", gap: 1 }}>
            <IconButton color="primary" size="small" aria-label="Update">
              <Edit />
            </IconButton>

            <IconButton
              color="error"
              size="small"
              aria-label="Delete"
              onClick={this.handleDelete}
            >
              <Delete />
            </IconButton>

            <IconButton color="secondary" size="small" aria-label="See">
              <Visibility />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default UserItems;

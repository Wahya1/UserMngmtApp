import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import AddUserDialogContainer from "../AddUserDialog";
import Search from "../SearchBar/component";

const Navbar = () => {
  const menuItems = [
    { text: "Login", path: "/login" },
    { text: "Signup", path: "/signup" },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: "primary.main", px: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={Link}
              to={item.path}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Search />
          <AddUserDialogContainer />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

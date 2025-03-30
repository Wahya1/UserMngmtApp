import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="body2"
                  component={Link}
                  to="/"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  Home
                </Typography>
                <Typography
                  variant="body2"
                  component={Link}
                  to="/about"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  About
                </Typography>
                <Typography
                  variant="body2"
                  component={Link}
                  to="/contact"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  Contact
                </Typography>
              </Box>
            </Grid>

            <Grid item>
              <Box>
                <IconButton
                  color="inherit"
                  href="https://facebook.com"
                  target="_blank"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://twitter.com"
                  target="_blank"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;

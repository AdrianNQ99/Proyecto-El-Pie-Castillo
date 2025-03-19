import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

import { useNavigate } from "react-router";
import { routesConfig } from "../routes/routesConfig";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#424242" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            El Pie Castillo
          </Typography>

          <Box sx={{ flexGrow: 1,gap:2, display: { xs: "none", md: "flex" } }}>
            {routesConfig.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: "white" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <WhatsAppIcon />
            <FacebookIcon />
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {routesConfig.map((page) => (
            <ListItem key={page.name} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(page.path);
                  setMobileOpen(false);
                }}
              >
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default ResponsiveAppBar;

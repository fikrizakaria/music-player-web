// src/components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer
        sx={{
          width: open ? drawerWidth : 56,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 56,
            boxSizing: "border-box",
            overflowX: "hidden", // Ensure the drawer doesn't overflow when collapsed
          },
        }}
        variant="permanent"
        anchor="left"
        open={open}
      >
        <Toolbar sx={{ paddingLeft: "6px !important" }}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <Tooltip
            title="Library"
            placement="right"
            disableHoverListener={open}
          >
            <ListItem
              button
              sx={{ minHeight: 50 }}
              component={Link}
              to="/library"
            >
              <ListItemIcon>
                <LibraryMusicIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Library" />}
            </ListItem>
          </Tooltip>
          <Tooltip
            title="Playlists"
            placement="right"
            disableHoverListener={open}
          >
            <ListItem
              button
              sx={{ minHeight: 50 }}
              component={Link}
              to="/playlists"
            >
              <ListItemIcon>
                <PlaylistPlayIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Playlists" />}
            </ListItem>
          </Tooltip>
          <Tooltip
            title="Settings"
            placement="right"
            disableHoverListener={open}
          >
            <ListItem
              button
              sx={{ minHeight: 50 }}
              component={Link}
              to="/settings"
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Settings" />}
            </ListItem>
          </Tooltip>
          <Tooltip
            title="Account"
            placement="right"
            disableHoverListener={open}
          >
            <ListItem
              button
              sx={{ minHeight: 50 }}
              component={Link}
              to="/account"
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Account" />}
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;

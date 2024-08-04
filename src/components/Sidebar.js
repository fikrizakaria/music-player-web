// src/components/Sidebar.js
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;
const collapsedDrawerWidth = 72;

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const menuItems = [
    { text: "Library", icon: <LibraryMusicIcon /> },
    { text: "Playlists", icon: <PlaylistPlayIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Account", icon: <AccountCircleIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? drawerWidth : collapsedDrawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? drawerWidth : collapsedDrawerWidth,
          boxSizing: "border-box",
          transition: "width 0.3s",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "10px !important",
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} sx={{ minHeight: 48 }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {isOpen && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

// src/components/BottomPlayer.js
import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const BottomPlayer = ({ isPlaying, onPlayPause }) => {
  return (
    <AppBar position="fixed" color="primary" style={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Now Playing: Song Title
        </Typography>
        <IconButton edge="end" color="inherit" onClick={onPlayPause}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BottomPlayer;

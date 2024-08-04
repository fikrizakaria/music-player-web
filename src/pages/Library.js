// src/pages/Library.js
import React from "react";
import { Box, Button } from "@mui/material";
import SongItem from "../components/SongItem";

const Library = () => {
  const songs = [
    {
      title: "Song 1",
      singer: "Singer 1",
      image: "https://via.placeholder.com/150",
      playlists: ["Playlist 1", "Playlist 2"],
    },
    {
      title: "Song 2",
      singer: "Singer 2",
      image: "https://via.placeholder.com/150",
      playlists: ["Playlist 1", "Playlist 2"],
    },
    {
      title: "Song 3",
      singer: "Singer 3",
      image: "https://via.placeholder.com/150",
      playlists: ["Playlist 1", "Playlist 2"],
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
        Import Music/Playlist
      </Button>
      <Box sx={{ width: "100%" }}>
        {songs.map((song, index) => (
          <SongItem key={index} song={song} />
        ))}
      </Box>
    </Box>
  );
};

export default Library;

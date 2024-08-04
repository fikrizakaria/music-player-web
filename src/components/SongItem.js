import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  Box,
  Button,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const SongItem = ({ song }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  const handlePlay = () => {
    // Add logic to play the song
    console.log(`Playing ${song.title}`);
  };

  const handleAddToPlaylist = () => {
    setModalOpen(true);
  };

  const handlePlaylistChange = (playlist) => {
    setSelectedPlaylists((prev) =>
      prev.includes(playlist)
        ? prev.filter((item) => item !== playlist)
        : [...prev, playlist]
    );
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = () => {
    // Add logic to add song to selected playlists
    console.log(
      `Adding ${song.title} to playlists: ${selectedPlaylists.join(", ")}`
    );
    setModalOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 2,
          width: "calc(100% - 40px)",
          marginLeft: 1,
          marginRight: 1,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 64, height: 64 }}
          image={song.image}
          alt={song.title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingLeft: 1,
          }}
        >
          <CardContent sx={{ flex: "1 0 auto", padding: "8px 0" }}>
            <Typography
              component="div"
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              {song.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ fontSize: "12px" }}
            >
              {song.singer}
            </Typography>
          </CardContent>
        </Box>
        <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
          <PlaylistAddIcon />
        </IconButton>
        <IconButton aria-label="play/pause" onClick={handlePlay}>
          <PlayArrowIcon />
        </IconButton>
      </Card>
      <Dialog open={isModalOpen} onClose={handleModalClose}>
        <DialogTitle>Add to Playlist</DialogTitle>
        <DialogContent>
          <List>
            {song.playlists.map((playlist, index) => (
              <ListItem key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedPlaylists.includes(playlist)}
                      onChange={() => handlePlaylistChange(playlist)}
                    />
                  }
                  label={playlist}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleModalSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SongItem;

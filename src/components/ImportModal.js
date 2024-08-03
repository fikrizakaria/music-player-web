// src/components/ImportModal.js
import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ImportModal = ({ open, onClose, onImport }) => {
  const [url, setUrl] = React.useState("");

  const handleImport = () => {
    onImport(url);
    setUrl("");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Import Music or Playlist
        </Typography>
        <TextField
          fullWidth
          label="YouTube URL"
          variant="outlined"
          margin="normal"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleImport}>
          Import
        </Button>
      </Box>
    </Modal>
  );
};

export default ImportModal;

// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import BottomPlayer from "./components/BottomPlayer";
import ImportModal from "./components/ImportModal";
import { CssBaseline, Container, Box, Button, Toolbar } from "@mui/material";

const drawerWidth = 240;
const collapsedDrawerWidth = 72;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isImportModalOpen, setImportModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleImportMusic = (url) => {
    console.log("Importing music from URL:", url);
    setImportModalOpen(false);
  };

  const toggleDrawer = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <CssBaseline />
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
      <main
        style={{
          flexGrow: 1,
          marginLeft: isSidebarOpen ? drawerWidth : collapsedDrawerWidth,
          transition: "margin-left 0.3s",
          paddingBottom: "64px", // Ensure space for bottom player
        }}
      >
        <Toolbar />
        <Container>
          <Box display="flex" justifyContent="flex-end" m={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setImportModalOpen(true)}
            >
              Import Music/Playlist
            </Button>
          </Box>
          {/* Add your main content here */}
        </Container>
        <BottomPlayer isPlaying={isPlaying} onPlayPause={handlePlayPause} />
      </main>
      <ImportModal
        open={isImportModalOpen}
        onClose={() => setImportModalOpen(false)}
        onImport={handleImportMusic}
      />
    </div>
  );
}

export default App;

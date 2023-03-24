import React from "react";
import { MediaPlayerProvider } from "./contexts/MediaPlayerContext";
import SongList from "./components/SongList";
import MediaPlayer from "./components/MediaPlayer";

export default function App() {
  return (
    <MediaPlayerProvider>
      <MediaPlayer />
      <SongList />
    </MediaPlayerProvider>
  );
}

import React from "react";
import { MediaPlayerProvider } from "./contexts/MediaPlayerContext";
import SongList from "./components/SongList";
import MediaPlayer from "./components/MediaPlayer";

export default function App() {
  return (
    <MediaPlayerProvider>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen">
        <MediaPlayer />
        <SongList />
      </div>
    </MediaPlayerProvider>
  );
}

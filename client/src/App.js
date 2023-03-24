import React from "react";
import { MediaPlayerProvider } from "./contexts/MediaPlayerContext";

export default function App() {
  return (
    <MediaPlayerProvider>
      <h1>Hello</h1>
    </MediaPlayerProvider>
  );
}

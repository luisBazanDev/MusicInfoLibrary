import { createContext, useState } from "react";

const MediaPlayerContext = createContext();

import React from "react";

export default function MediaPlayerProvider(props) {
  const value = {
    songs: [],
    currentSong:
  };
  return (
    <MediaPlayerContext.Provider value={value}>
      {props.children}
    </MediaPlayerContext.Provider>
  );
}

export { MediaPlayerContext, MediaPlayerProvider };

import { useState } from "react";
import { MediaPlayerContext } from "../../contexts/MediaPlayerContext";

function TimeLine() {
  return (
    <MediaPlayerContext.Consumer>
      {(context) => {
        const handleChange = (e) => {
          context.handleTimeUpdate(
            (e.target.value * context.currentSong.length) / 100
          );
        };
        return (
          <div className="flex justify-between w-full items-center">
            <div>
              {formatTime(Math.round(context.playerSettings.currentTime))}
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={
                (100 * context.playerSettings.currentTime) /
                context.currentSong.length
              }
              onChange={handleChange}
              className="w-full h-1 rounded-lg bg-musicplayer_darkness mx-3"
            ></input>
            <div>{formatTime(context.currentSong.length)}</div>
          </div>
        );
      }}
    </MediaPlayerContext.Consumer>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

export default TimeLine;

import { useContext, useEffect } from "react";
import { MediaPlayerContext } from "../../contexts/MediaPlayerContext";
import config from "../../config.json";

function AudioContainer() {
  return (
    <MediaPlayerContext.Consumer>
      {(context) => {
        var audioElement = document.getElementById("song");

        if (context.currentSong == null) return null;
        if (audioElement != null && !context.playerSettings.paused)
          audioElement.play();

        const handleTimeUpdate = (e) => {
          if (audioElement == null) audioElement = e.target;
          audioElement.muted = context.playerSettings.muted;
          audioElement.volume = context.playerSettings.volume / 100;
          context.playerSettings.paused
            ? audioElement.pause()
            : audioElement.play();

          if (
            Math.abs(
              audioElement.currentTime - context.playerSettings.currentTime
            ) < 1
          ) {
            context.handleTimeUpdate(audioElement.currentTime);
          } else {
            audioElement.currentTime = context.playerSettings.currentTime;
          }
        };

        const handleStop = () => {
          if (audioElement.current) context.setCurrentSong(null);
        };

        const song = context.currentSong;

        return (
          <audio
            id="song"
            autoPlay
            src={`${config.api}/api/song?id=${song.songId}`}
            muted={context.playerSettings.muted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleStop}
          ></audio>
        );
      }}
    </MediaPlayerContext.Consumer>
  );
}

export default AudioContainer;

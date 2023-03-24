import { useContext } from "react";
import { MediaPlayerContext } from "../contexts/MediaPlayerContext";

function MediaPlayer() {
  const context = useContext(MediaPlayerContext);

  return (
    <div className="sticky bg-musicplayer_darkness_dark text-musicplayer_aqua">
      <div>MediaPlayer</div>
      <div>img</div>
      <div>info</div>
      <div>timeline</div>
      <div>controllers</div>
    </div>
  );
}

export default MediaPlayer;

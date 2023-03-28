import { useContext } from "react";
import { MediaPlayerContext } from "../contexts/MediaPlayerContext";
import SongListItem from "./SongListItem";

function SongList() {
  const mediaPlayer = useContext(MediaPlayerContext);
  var index = 1;

  return (
    <div className="flex flex-col bg-musicplayer_darkness text-musicplayer_light text-xs">
      {mediaPlayer.songs.map((song) => (
        <SongListItem song={song} index={index++} key={song.songId} />
      ))}
    </div>
  );
}

export default SongList;

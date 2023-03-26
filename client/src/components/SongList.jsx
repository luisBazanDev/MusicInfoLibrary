import { useContext } from "react";
import { MediaPlayerContext } from "../contexts/MediaPlayerContext";
import SongListItem from "./SongListItem";

function SongList() {
  const mediaPlayer = useContext(MediaPlayerContext);
  var index = 1;

  return (
    <div className="container flex flex-col w-full bg-musicplayer_darkness text-musicplayer_light text-xs">
      {mediaPlayer.songs.map((song) => (
        <SongListItem song={song} index={index++} key={song.songId} />
      ))}
    </div>
  );
}

export default SongList;

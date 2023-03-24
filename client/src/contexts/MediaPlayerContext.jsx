import { createContext, useState, useEffect } from "react";
import { requestSongs } from "../utils/RequestSongs";

const MediaPlayerContext = createContext();

export default function MediaPlayerProvider(props) {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [songsData, setSongsData] = useState({
    size: 0,
    date: Date.UTC(),
  });

  useEffect(() => {
    reloadSongs();
  }, []);

  const reloadSongs = async () => {
    const data = await requestSongs();
    setSongsData({
      size: data.size,
      date: data.date,
    });
    setSongs(data.songs);
  };

  const value = {
    songsData,
    songs,
    setSongs,
    reloadSongs,
    currentSong,
    setCurrentSong,
  };
  return (
    <MediaPlayerContext.Provider value={value}>
      {props.children}
    </MediaPlayerContext.Provider>
  );
}

export { MediaPlayerContext, MediaPlayerProvider };

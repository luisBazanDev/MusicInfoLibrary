import { createContext, useState, useEffect } from "react";
import { requestSongs } from "../utils/RequestSongs";

const MediaPlayerContext = createContext();

export default function MediaPlayerProvider(props) {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [playerSettings, setPlayerSettings] = useState({
    volume: 100,
    currentTime: 0,
    mode: "sequential", // sequential | random
    paused: false,
    muted: false,
    loop: false,
    history: [],
  });
  const [history, setHistory] = useState([]);

  const [songsData, setSongsData] = useState({
    size: 0,
    date: Date.UTC(),
  });

  const handleTimeUpdate = (time) => {
    setPlayerSettings({ ...playerSettings, currentTime: time });
    if (currentSong != null && currentSong.length - time < 1) {
      handleNextSound();
    }
  };

  const handleNextSound = () => {
    if (playerSettings.loop) {
      handleTimeUpdate(0);
      return;
    }
    if (playerSettings.mode === "sequential") {
      const index = songs.indexOf(currentSong);
      let song = null;
      if (index === songs.length - 1) {
        song = songs[0];
      } else {
        song = songs[index + 1];
      }
      handleHistoryAdd(song);
      handleCurrentSong(song);
    } else if (playerSettings.mode === "random") {
      const song = songs[Math.floor(Math.random() * songs.length)];
      handleCurrentSong(song);
    }
  };

  const handlePaused = (value) => {
    setPlayerSettings({ ...playerSettings, paused: value });
  };

  const handleCurrentSong = (value) => {
    setPlayerSettings({ ...playerSettings, paused: false, currentTime: 0 });
    setCurrentSong(value);
  };

  const handleHistoryAdd = (newItem) => {
    setHistory([...history, newItem]);
  };

  const handleHistoryRemoveLast = () => {
    history.pop();
    setHistory(history);
  };

  const handleMode = (newMode) => {
    setPlayerSettings({
      ...playerSettings,
      mode: newMode,
    });
  };
  const handleLoop = (loop) => {
    setPlayerSettings({
      ...playerSettings,
      loop: loop,
    });
  };

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
    playerSettings,
    setPlayerSettings,
    handleTimeUpdate,
    handlePaused,
    handleCurrentSong,
    history,
    handleHistoryAdd,
    handleHistoryRemoveLast,
    handleMode,
    handleNextSound,
    handleLoop,
  };

  return (
    <MediaPlayerContext.Provider value={value}>
      {props.children}
    </MediaPlayerContext.Provider>
  );
}

export { MediaPlayerContext, MediaPlayerProvider };

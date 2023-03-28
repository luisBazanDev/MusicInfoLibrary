import { useContext } from "react";
import { MediaPlayerContext } from "../contexts/MediaPlayerContext";
import SongController from "./controllers/SongController";
import AudioContainer from "./controllers/AudioContainer";
import TimeLine from "./controllers/TimeLine";
import RandomController from "./controllers/RandomController";
import Volume from "./controllers/Volume";
import config from "../config.json";

function MediaPlayer() {
  const context = useContext(MediaPlayerContext);
  if (context.currentSong == null)
    return (
      <div className="sticky flex flex-col items-center bg-musicplayer_darkness_dark text-musicplayer_aqua">
        <div>Media Player</div>
      </div>
    );

  const song = context.currentSong;

  return (
    <div className="sticky top-0 grid grid-cols-1 items-center bg-musicplayer_darkness_dark text-musicplayer_high_light text-xs max-h-screen md:text-sm md:grid-cols-2 lg:grid-cols-1 lg:text-lg">
      <AudioContainer />
      {/* Mobile data */}
      <div className="block">
        <div className="flex justify-center">
          <div className="w-1/3">
            <img
              className="object-cover"
              src={`${config.api}/api/image?id=${song.songId}`}
              alt={song.songId}
            />
          </div>
          <div className="flex flex-col mr-4 w-2/3 justify-between items-end py-2">
            <div className="flex flex-col items-end">
              <div className="whitespace-nowrap truncate font-bold">
                {song.title}
              </div>
              <div className="whitespace-nowrap truncate">
                De {song.artists.join(", ")}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-bold">Album</div>
              <div className="whitespace-nowrap truncate">
                {song.album} - {song.year}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  text-xl px-2 md:text-xl lg:text-3xl lg:px-5">
        <div className="grid grid-cols-3 items-center">
          <RandomController />
          <SongController />
          <Volume />
        </div>
        <TimeLine />
      </div>
    </div>
  );
}

export default MediaPlayer;

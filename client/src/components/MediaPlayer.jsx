import { useContext } from "react";
import { MediaPlayerContext } from "../contexts/MediaPlayerContext";
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
    <div className="sticky flex flex-col items-center bg-musicplayer_darkness_dark text-musicplayer_high_light text-xs">
      {/* Mobile data */}
      <div className="block md:hidden">
        <div className="flex justify-center ">
          <div className="w-1/3">
            <img
              className="object-cover"
              src={`${config.api}/api/image?id=${song.imgId}`}
              alt={song.imgId}
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
      <div className="flex justify-between w-full">
        <div>
          <button>random</button>
        </div>
        <div className="flex gap-x-2">
          <button>a</button>
          <button>b</button>
          <button>c</button>
        </div>
        <div>sound</div>
      </div>
      <div className="flex justify-between w-full items-center">
        <div>02:04</div>
        <div className="w-full h-1 rounded-lg bg-musicplayer_darkness mx-3">
          <div
            id="current"
            className="w-1/3 bg-musicplayer_high_light h-full"
          ></div>
        </div>
        <div>06:20</div>
      </div>
    </div>
  );
}

export default MediaPlayer;

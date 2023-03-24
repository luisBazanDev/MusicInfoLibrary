import config from "../config.json";

function SongListItem({ song, index }) {
  const playSong = () => {
    // play song logic
    console.log(song);
  };

  return (
    <div
      className="grid grid-cols-12 h-auto border-b-musicplayer_aqua border-b-[1px] py-2"
      onClick={playSong}
    >
      <div className="col-span-1 flex items-center justify-center">{index}</div>
      <div className="col-span-9 grid grid-cols-6">
        <div className="grid-cols-1 flex">
          <img
            className="object-cover"
            src={`${config.api}/api/image?id=${song.imgId}`}
            alt={song.imgId}
          />
        </div>
        <div className="grid-cols-5 flex flex-col ml-3 justify-center w-40">
          <div className="whitespace-nowrap truncate font-bold">
            {song.title}
          </div>
          <div className="whitespace-nowrap truncate">
            {song.artists.join(", ")}
          </div>
        </div>
      </div>
      <div className="hidden whitespace-nowrap truncate">{song.album}</div>
      <div className="hidden">{song.year}</div>
      <div className="col-span-2">{formatTime(song.length)}</div>
    </div>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

export default SongListItem;
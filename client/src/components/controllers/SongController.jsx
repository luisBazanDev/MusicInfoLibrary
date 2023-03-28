import { useContext } from "react";
import { MediaPlayerContext } from "../../contexts/MediaPlayerContext";

// Icons
import { BiSkipPrevious } from "@react-icons/all-files/bi/BiSkipPrevious";
import { BiSkipNext } from "@react-icons/all-files/bi/BiSkipNext";
import { BiPause } from "@react-icons/all-files/bi/BiPause";
import { BiPlay } from "@react-icons/all-files/bi/BiPlay";

function SongController() {
  const context = useContext(MediaPlayerContext);

  const togglePause = () => {
    context.handlePaused(!context.playerSettings.paused);
  };

  const handleNext = () => {
    context.handleNextSound();
  };

  const handlePrev = () => {
    const history = context.history;
    if (history.length < 1 || context.playerSettings.currentTime > 3) {
      context.handleTimeUpdate(0);
    } else if (history.length === 1) {
      const song = history[0];
      context.handleCurrentSong(song);
    } else {
      const song = history[history.length - 2];
      context.handleHistoryRemoveLast();
      context.handleCurrentSong(song);
    }
  };

  return (
    <div className="flex gap-x-2">
      <button onClick={handlePrev}>
        <BiSkipPrevious />
      </button>
      <button onClick={togglePause}>
        {context.playerSettings.paused ? <BiPlay /> : <BiPause />}
      </button>
      <button onClick={handleNext}>
        <BiSkipNext />
      </button>
    </div>
  );
}

export default SongController;

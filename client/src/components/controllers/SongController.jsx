import { useContext, useState } from "react";
import { MediaPlayerContext } from "../../contexts/MediaPlayerContext";

// Icons
import { BiSkipPrevious } from "@react-icons/all-files/bi/BiSkipPrevious";
import { BiSkipNext } from "@react-icons/all-files/bi/BiSkipNext";
import { BiPause } from "@react-icons/all-files/bi/BiPause";
import { BiPlay } from "@react-icons/all-files/bi/BiPlay";

function SongController() {
  const context = useContext(MediaPlayerContext);
  const [paused, setPaused] = useState(context.playerSettings.paused);

  const togglePause = () => {
    const settings = context.playerSettings;
    settings.paused = !settings.paused;
    setPaused(settings.paused);
  };

  return (
    <div className="flex gap-x-2">
      <button>
        <BiSkipPrevious />
      </button>
      <button onClick={togglePause}>{paused ? <BiPlay /> : <BiPause />}</button>
      <button>
        <BiSkipNext />
      </button>
    </div>
  );
}

export default SongController;

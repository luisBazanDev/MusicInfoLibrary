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

  return (
    <div className="flex gap-x-2">
      <button>
        <BiSkipPrevious />
      </button>
      <button onClick={togglePause}>
        {context.playerSettings.paused ? <BiPlay /> : <BiPause />}
      </button>
      <button>
        <BiSkipNext />
      </button>
    </div>
  );
}

export default SongController;

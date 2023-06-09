import { useContext, useState } from "react";
import { MediaPlayerContext } from "../../contexts/MediaPlayerContext";

// Icons
import { IoIosVolumeOff } from "@react-icons/all-files/io/IoIosVolumeOff";
import { IoIosVolumeMute } from "@react-icons/all-files/io/IoIosVolumeMute";
import { IoIosVolumeLow } from "@react-icons/all-files/io/IoIosVolumeLow";
import { IoIosVolumeHigh } from "@react-icons/all-files/io/IoIosVolumeHigh";

function Volume() {
  const context = useContext(MediaPlayerContext);
  const [volume, setVolume] = useState(context.playerSettings.volume);
  const [muted, setMuted] = useState(context.playerSettings.muted);

  const toggleMuted = () => {
    const settings = context.playerSettings;
    settings.muted = !settings.muted;
    context.setPlayerSettings(settings);
    setMuted(settings.muted);
  };

  const changeVolume = (e) => {
    const settings = context.playerSettings;
    settings.volume = e.target.value;
    context.setPlayerSettings(settings);
    setVolume(settings.volume);
  };

  var icon = <IoIosVolumeHigh />;

  if (volume <= 50) icon = <IoIosVolumeLow />;
  if (volume <= 0) icon = <IoIosVolumeMute />;
  if (muted) icon = <IoIosVolumeOff />;

  return (
    <MediaPlayerContext.Consumer>
      {() => (
        <div className="flex items-center justify-end">
          <div onClick={toggleMuted}>{icon}</div>
          <div className="flex items-center">
            <input
              className="w-full"
              type="range"
              min={0}
              max={100}
              defaultValue={volume}
              onChangeCapture={changeVolume}
            />
          </div>
        </div>
      )}
    </MediaPlayerContext.Consumer>
  );
}

export default Volume;

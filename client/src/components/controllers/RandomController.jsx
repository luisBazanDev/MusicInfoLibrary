import { useContext, useState } from "react";
import { MediaPlayerContext } from "../../contexts/MediaPlayerContext";
import { FaRandom } from "@react-icons/all-files/fa/FaRandom";
import { ImLoop } from "@react-icons/all-files/im/ImLoop";

function RandomController() {
  const context = useContext(MediaPlayerContext);
  const [mode, setMode] = useState(context.playerSettings.mode);

  const handleRandom = () => {
    const newMode = mode === "random" ? "sequential" : "random";
    setMode(newMode);
    context.handleMode(newMode);
  };

  const handleLoop = () => {
    context.handleLoop(!context.playerSettings.loop);
  };

  const LoopIcon = () => {
    return context.playerSettings.loop ? (
      <ImLoop className="text-blue-500" />
    ) : (
      <ImLoop />
    );
  };

  return (
    <div className="flex gap-x-2">
      <button
        onClick={handleRandom}
        className={`${mode === "random" ? "text-blue-500" : ""}`}
      >
        <FaRandom />
      </button>
      <button onClick={handleLoop}>
        <LoopIcon />
      </button>
    </div>
  );
}

export default RandomController;

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

  return (
    <div className="flex gap-x-2 text-sm">
      <button
        onClick={handleRandom}
        className={`${mode === "random" ? "text-blue-500" : ""}`}
      >
        <FaRandom />
      </button>
      <button>
        <ImLoop />
      </button>
    </div>
  );
}

export default RandomController;

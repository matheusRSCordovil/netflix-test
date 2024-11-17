import React, { useState } from "react";
import ReactPlayer from "react-player";
import useAlert from "../Hooks/AlertHook";
import { findDOMNode } from "react-dom";

const PlayPage: React.FC = () => {
  const [fullscreenMode, setFullscreenMode] = useState(true);
  const { setAlert } = useAlert();

  let player: React.ReactInstance | null | undefined = null;

  const ref = (p: React.ReactInstance | null | undefined) => {
    player = p;
  };

  const onStart = () => {
    if (fullscreenMode)
      findDOMNode(player)
        .requestFullscreen()
        .catch(() =>
          setAlert("Error attempting to enable full-screen mode", "error")
        );
  };

  const onEnded = () => {
    setFullscreenMode(document.fullscreenElement !== null);
  };

  return (
    <div style={{ padding: "4rem 2rem" }}>
      <ReactPlayer
        ref={ref}
        url="https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
        controls
        playing={true}
        width={"100%"}
        height={"100%"}
        onStart={onStart}
        onEnded={onEnded}
      />
    </div>
  );
};

export default PlayPage;

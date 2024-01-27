import React from "react";
import "./watch.scss";
import { ArrowBack } from "@material-ui/icons";
import videobg from "../../assets/videobg.mp4";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBack />
        Home
      </div>
      <video
        className="video"
        src={videobg}
        autoPlay
        loop
        muted
        progress
        controls
      />
    </div>
  );
};

export default Watch;

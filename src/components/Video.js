import React, { useRef, useState } from "react";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const Video = () => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  //Permet de lancer ou pas la vidéo
  const handleVideo = () => {
    setPlayVideo(!playVideo);

    if (!playVideo) videoRef.current.play();
    else videoRef.current.pause();
  };

  return (
    <div className="video-container">
      <video
        src="./assets/meal.mp4"
        type="video/mp4"
        ref={videoRef}
        loop
        controls={false}
        muted
      ></video>
      <div className="play-video">
        {playVideo ? (
          <AiOutlinePauseCircle onClick={(e) => handleVideo()} />
        ) : (
          <AiOutlinePlayCircle onClick={(e) => handleVideo()} />
        )}
      </div>
    </div>
  );
};

export default Video;

import React from "react";

import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import CommentSection from "./CommentSection";

const WatchVideo = () => {
  return (
    <div className='video-container'>
      <VideoDetail />
      <CommentSection />
      <VideoList />
    </div>
  );
};

export default WatchVideo;

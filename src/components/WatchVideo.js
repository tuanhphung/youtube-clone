import React from "react";
import { connect } from "react-redux";

import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import CommentSection from "./CommentSection";
import LandingPage from "./LandingPage";

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

const WatchVideo = (props) => {
  //if there is no selected video - render Landing Page component
  const renderSelectedVideo = () => {
    if (!props.selectedVideo) {
      return <LandingPage />;
    }
    return (
      <div className='video-container'>
        <VideoDetail />
        <CommentSection />
        <VideoList />
      </div>
    );
  };

  return <React.Fragment>{renderSelectedVideo()}</React.Fragment>;
};

export default connect(mapStateToProps)(WatchVideo);

import React from "react";
import VideoItem from "./VideoItem";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

const VideoList = (props) => {
  const renderList = (list) => {
    if (list.items === undefined) {
      return null;
    } else {
      return list.items.map((video) => <VideoItem video={video} />);
    }
  };

  return <div className='video-list-container'>{renderList(props.videos)}</div>;
};

export default connect(mapStateToProps)(VideoList);

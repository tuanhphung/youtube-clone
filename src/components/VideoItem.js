import React from "react";
import { connect } from "react-redux";
import { selectVideo, getHistory } from "../actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

const VideoItem = (props) => {
  //make clciked video selected (to show on /watch and add to history state)
  const makeSelectedandAddtoHistory = () => {
    props.selectVideo(props.video);
    props.getHistory(props.video);
  };

  return (
    <Link to='/watch'>
      <div className='video-item' onClick={() => makeSelectedandAddtoHistory()}>
        <div>
          <img
            alt={props.video.snippet.title}
            src={props.video.snippet.thumbnails.high.url}
          />
        </div>
        <h4 className='video-item__title'>{props.video.snippet.title}</h4>
      </div>
    </Link>
  );
};

export default connect(mapStateToProps, { selectVideo, getHistory })(VideoItem);

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

const VideoDetail = (props) => {
  // converts the json date format into date object to format
  const date = new Date(props.selectedVideo.snippet.publishedAt);
  var myDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <div className='video-detail-container'>
      {props.selectedVideo ? (
        <iframe
          title={props.selectedVideo.snippet.title}
          src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`}
        />
      ) : null}
      <h1>{props.selectedVideo ? props.selectedVideo.snippet.title : null}</h1>
      <p>Published at {myDate}</p>
      <hr />
    </div>
  );
};

export default connect(mapStateToProps)(VideoDetail);

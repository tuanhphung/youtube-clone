import React from "react";
import { connect } from "react-redux";

import { favouriteVideo } from "../actions";

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
    favourites: state.favourites,
  };
};

const VideoDetail = (props) => {
  // converts the json date format into date object to format
  const getDate = () => {
    if (!props.selectedVideo) {
      return null;
    }
    const date = new Date(props.selectedVideo.snippet.publishedAt);
    var myDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return myDate;
  };

  // Add video to favourites list in redux store, if it is already inside favourites - show 'favourited'
  const checkFavourites = () => {
    const favourited = props.favourites.some(
      (obj) => obj.id.videoId === props.selectedVideo.id.videoId
    );
    if (favourited == true) {
      return <div>Favourited!</div>;
    } else
      return (
        <button
          className='favourite-btn'
          onClick={() => props.favouriteVideo(props.selectedVideo)}
        >
          Favourite
        </button>
      );
  };

  return (
    <div className='video-detail-container'>
      {props.selectedVideo ? (
        <iframe
          title={props.selectedVideo.snippet.title}
          src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`}
        />
      ) : null}
      <h1>{props.selectedVideo ? props.selectedVideo.snippet.title : null}</h1>
      <p>Published at {getDate()}</p>
      {checkFavourites()}
      <hr />
    </div>
  );
};

export default connect(mapStateToProps, { favouriteVideo })(VideoDetail);

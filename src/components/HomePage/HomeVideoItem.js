import React from "react";
import { connect } from "react-redux";
import { selectVideo, getHistory } from "../../actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

const HomeVideoItem = (props) => {
  const date = new Date(props.video.snippet.publishedAt);
  let myDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  //make clciked video selected (to show on /watch and add to history state)
  const makeSelectedandAddtoHistory = () => {
    props.selectVideo(props.video);
    props.getHistory(props.video);
  };

  return (
    <Link to='/watch'>
      <div className='home__video-item' onClick={() => makeSelectedandAddtoHistory()}>
        <div className='home__video-item__img-container'>
          <img
            alt={props.video.snippet.title}
            src={props.video.snippet.thumbnails.high.url}
          />
        </div>
        <div className='home__video-item__text'>
          <h3 className='video-item__title'>{props.video.snippet.title}</h3>
          <hr />
          <p>{props.video.snippet.channelTitle}</p>
          <p>{myDate}</p>
          <p>{props.video.snippet.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default connect(mapStateToProps, { selectVideo, getHistory })(HomeVideoItem);

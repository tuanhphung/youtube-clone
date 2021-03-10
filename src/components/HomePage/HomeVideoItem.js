import React from "react";
import { connect } from "react-redux";
import { selectVideo } from "../../actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

const HomeVideoItem = (props) => {
  return (
    <Link to='/watch'>
      <div className='home__video-item'>
        <div>
          <img
            alt={props.video.snippet.title}
            src={props.video.snippet.thumbnails.high.url}
            onClick={() => props.selectVideo(props.video)}
          />
        </div>
        <h4 className='video-item__title'>{props.video.snippet.title}</h4>
      </div>
    </Link>
  );
};

export default connect(mapStateToProps, { selectVideo })(HomeVideoItem);

import React from "react";

import HomeVideoItem from "./HomeVideoItem";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

const HomeList = (props) => {
  console.log(props.videos);

  const renderList = (list) => {
    if (list.items === undefined) {
      return null;
    } else {
      return list.items.map((video, index) => {
        // if result is a youtube channel, dont render
        if (video.id.kind !== "youtube#channel") {
          return <HomeVideoItem video={video} key={index} />;
        }
      });
    }
  };

  return <div className='home__list'>{renderList(props.videos)}</div>;
};

export default connect(mapStateToProps)(HomeList);

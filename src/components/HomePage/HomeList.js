import React from "react";

import HomeVideoItem from "./HomeVideoItem";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

const HomeList = (props) => {
  const renderList = (list) => {
    if (list.items === undefined) {
      return null;
    } else {
      return list.items.map((video) => <HomeVideoItem video={video} />);
    }
  };

  return <div className='home__list'>{renderList(props.videos)}</div>;
};

export default connect(mapStateToProps)(HomeList);

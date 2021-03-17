import React from "react";
import { connect } from "react-redux";

import VideoItem from "../components/HomePage/HomeVideoItem";

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  };
};

const Favourites = (props) => {
  //render favourites list from redux store
  const renderList = (list) => {
    if (list.length <= 0) {
      return <div>No Favourited Videos</div>;
    }
    return list.map((video, index) => <VideoItem video={video} key={index} />);
  };

  return (
    <div className='favourites-container'>
      {renderList(props.favourites)}
      <h1>Favourites</h1>
    </div>
  );
};

export default connect(mapStateToProps)(Favourites);

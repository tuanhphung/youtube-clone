import React from "react";
import { connect } from "react-redux";
import VideoItem from "./HomePage/HomeVideoItem";

const mapStateToProps = (state) => {
  return {
    history: state.history,
  };
};

const History = (props) => {
  const renderList = () => {
    if (props.history <= 0) {
      return <div>No History</div>;
    }
    return props.history.map((video, index) => <VideoItem video={video} key={index} />);
  };

  return (
    <div className='history-container'>
      {renderList()}
      <h1>Watch History</h1>
    </div>
  );
};

export default connect(mapStateToProps)(History);

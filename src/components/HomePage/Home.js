import React from "react";
import { connect } from "react-redux";

import HomeList from "./HomeList";
import LandingPage from "../LandingPage";

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

const Home = (props) => {
  //show landing page when there is no results in videos on redux store.
  const showLandingPage = () => {
    if (props.videos.length <= 0) {
      return <LandingPage />;
    }
    return <HomeList />;
  };

  return <div className='home_container'>{showLandingPage()}</div>;
};

export default connect(mapStateToProps)(Home);

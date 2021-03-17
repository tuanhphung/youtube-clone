import React from "react";

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <h1>YouTube Clone</h1>
      <p>
        Web app developed by React using the Redux library, React Router and YouTube API.
      </p>
      <p>Start searching for videos using the search bar above.</p>
      <p>
        Features :
        <ul>
          <li>Burger menu navigation to favourites and history</li>
          <li>Add videos to favourites list</li>
          <li>Add comments</li>
          <li>Videos watched will be added to the watch history</li>
          <li>Responsiveness to smaller windows</li>
        </ul>
      </p>
      <p>
        Note : YouTube API has limited calls. API will stop retrieving videos if limit is
        reached.
      </p>
    </div>
  );
};

export default LandingPage;

import { combineReducers } from "redux";

const videosReducer = (videos = [], action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return action.payload;
    default:
      return videos;
  }
};

const selectedVideoReducer = (selectedVideo = null, action) => {
  switch (action.type) {
    case "SELECT_VIDEO":
      return action.payload;
    default:
      return selectedVideo;
  }
};

const commentsReducer = (comments = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...comments, action.payload];
    default:
      return comments;
  }
};

const favouritesReducer = (favourites = [], action) => {
  switch (action.type) {
    case "FAVOURITE_VIDEO":
      return [...favourites, action.payload];
    default:
      return favourites;
  }
};

const historyReducer = (history = [], action) => {
  switch (action.type) {
    case "GET_HISTORY":
      return [...history, action.payload];
    default:
      return history;
  }
};

//combine reducers to create redux store
const allReducers = combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer,
  comments: commentsReducer,
  favourites: favouritesReducer,
  history: historyReducer,
});

export default allReducers;

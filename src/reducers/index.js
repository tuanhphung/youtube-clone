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

//combine reducers to create redux store
const allReducers = combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer,
  comments: commentsReducer,
});

export default allReducers;

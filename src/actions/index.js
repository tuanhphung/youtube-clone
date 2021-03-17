import api, { KEY } from "../api";

//Action Creators
export const getVideos = (videos) => {
  return {
    type: "GET_VIDEOS",
    payload: videos,
  };
};

export const selectVideo = (video) => {
  return {
    type: "SELECT_VIDEO",
    payload: video,
  };
};

export const addComment = (comment) => {
  return {
    type: "ADD_COMMENT",
    payload: comment,
  };
};

export const favouriteVideo = (video) => {
  return {
    type: "FAVOURITE_VIDEO",
    payload: video,
  };
};

export const getHistory = (video) => {
  return {
    type: "GET_HISTORY",
    payload: video,
  };
};
//Redux-Thunk
export const fetchVideos = (query) => {
  return async (dispatch) => {
    const response = await api.get("/search", {
      params: { q: query, part: "snippet", key: KEY, maxResults: 15 },
    });
    dispatch(getVideos(response.data));
  };
};

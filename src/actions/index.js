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

//Redux-Thunk
export const fetchVideos = (query) => {
  return async (dispatch) => {
    const response = await api.get("/search", {
      params: { q: query, part: "snippet", key: KEY, maxResults: 15 },
    });
    dispatch(getVideos(response.data));
  };
};

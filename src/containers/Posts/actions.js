import types from "./actionTypes";

export const getPostsRequest = () => ({
  type: types.GET_ALL_POSTS_REQUEST
});

export const getPostsError = () => ({
  type: types.GET_ALL_POSTS_ERROR
});

export const getPostsSuccess = posts => ({
  type: types.GET_ALL_POSTS_SUCCESS,
  payload: posts
});

export const deletePost = id => ({
  type: types.DELETE_SELECTED_POST_SUCCESS,
  payload: id
});

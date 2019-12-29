import types from "./actionTypes";

export const getPostByIdRequest = id => ({
  type: types.GET_SELECTED_POST_REQUEST
});

export const getPostByIdError = () => ({
  type: types.GET_SELECTED_POST_ERROR
});

export const getPostsByIdSuccess = ({ title, body, id, comments }) => ({
  type: types.GET_SELECTED_POST_SUCCESS,
  payload: { title, body, id, comments }
});

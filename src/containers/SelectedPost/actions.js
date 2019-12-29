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

export const postCommentByIdSuccess = ({id, body}) => ({
  type: types.POST_COMMENT_BY_ID_SUCCESS,
  payload: {id, body}
})

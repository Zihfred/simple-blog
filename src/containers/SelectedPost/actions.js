import types from './actionTypes';
import API from '../../api/requests';

export const getPostByIdRequest = () => ({
  type: types.GET_SELECTED_POST_REQUEST,
});

export const getPostByIdError = () => ({
  type: types.GET_SELECTED_POST_ERROR,
});

export const getPostByIdSuccess = ({
  title, body, id, comments,
}) => ({
  type: types.GET_SELECTED_POST_SUCCESS,
  payload: {
    title, body, id, comments,
  },
});

export const getPostById = (id) => async (dispatch) => {
  dispatch(getPostByIdRequest());
  API.getPostById(id)
    .then((data) => dispatch(getPostByIdSuccess(data)))
    .catch(() => dispatch(getPostByIdError()));
};

export const postCommentByIdSuccess = ({ id, body }) => ({
  type: types.POST_COMMENT_BY_ID_SUCCESS,
  payload: { id, body },
});

export const postCommentById = (id, body) => async (dispatch) => {
  API.postComment(id, body)
    .then(() => dispatch(postCommentByIdSuccess({ id, body })));
};

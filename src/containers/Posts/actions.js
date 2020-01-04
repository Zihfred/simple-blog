import types from './actionTypes';
// eslint-disable-next-line import/no-named-as-default
import API from '../../api/requests';

export const getPostsRequest = () => ({
  type: types.GET_ALL_POSTS_REQUEST,
});

export const getPostsSuccess = (posts) => ({
  type: types.GET_ALL_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsError = () => ({
  type: types.GET_ALL_POSTS_ERROR,

});


export const getPosts = () => async (dispatch) => {
  dispatch(getPostsRequest());
  API.getAllPosts()
    .then((data) => dispatch(getPostsSuccess(data)))
    .catch(() => dispatch(getPostsError()));
};


export const deletePost = (id) => ({
  type: types.DELETE_SELECTED_POST_SUCCESS,
  payload: id,
});

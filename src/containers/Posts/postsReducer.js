import types from './actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_ALL_POSTS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case types.GET_ALL_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false,
      };
    }
    case types.DELETE_SELECTED_POST_SUCCESS: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    }
    default:
      return { ...state };
  }
};

export default postsReducer;

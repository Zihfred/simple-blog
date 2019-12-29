import types from "./actionTypes";

const initialState = {
  title: null,
  body: null,
  id: null,
  comments: [],
  loading: false,
  error: null
};

export const selectedPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SELECTED_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case types.GET_SELECTED_POST_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case types.GET_SELECTED_POST_SUCCESS: {
      console.log(action)
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body,
        id: action.payload.id,
        comments: action.payload.comments,
        loading: false,
        error: null
      };
    }
    default:
      return { ...state };
  }
};

export default selectedPostsReducer;

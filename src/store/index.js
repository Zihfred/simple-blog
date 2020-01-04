import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import postsReducer from '../containers/Posts/postsReducer';
import { selectedPostsReducer } from '../containers/SelectedPost/selectedPostReducer';

const reducer = combineReducers({
  postsReducer,
  selectedPostsReducer,
});

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger)),
  );
  return store;
}

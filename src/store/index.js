import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import { postsReducer } from '../containers/Posts/postsReducer';
import { selectedPostsReducer } from '../containers/SelectedPost/selectedPostReducer';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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

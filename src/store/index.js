import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import { postsReducer } from "../containers/Posts/postsReducer";
import { selectedPostsReducer } from "../containers/SelectedPost/selectedPostReducer";

const reducer = combineReducers({
  postsReducer,
  selectedPostsReducer
});

export default function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(logger));
  return store;
}

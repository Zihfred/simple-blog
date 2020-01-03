import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import Posts from './containers/Posts';
import configureStore from './store';
import SelectedPost from './containers/SelectedPost';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <Provider store={store}>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/:postid" component={SelectedPost} />
      </Provider>
    </SnackbarProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

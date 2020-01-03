import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import P from 'prop-types';
import { getPosts } from './actions';
import {
  errorVariant,
  headerTitle,
  maxWidth,
  successFetchPosts,
  successVariant,
  errorFetchText,
} from '../../components/constants';

import PostList from './components/PostList';
import Header from '../../components/Header';

const Posts = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    loading,
    fetchData,
    error,
    posts,
    history,
  } = props;

  const handleReadMore = (id) => {
    history.push(`posts/${id}`);
  };

  const fetchPosts = () => {
    fetchData();
  };
  const notifications = () => {
    if (error) {
      enqueueSnackbar(errorFetchText, { variant: errorVariant });
    }
    if (posts.length) {
      enqueueSnackbar(successFetchPosts, { variant: successVariant });
    }
  };
  useEffect(() => {
    notifications();
  }, [error, posts]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container maxWidth={maxWidth}>
      <Header title={headerTitle} />
      <PostList
        posts={posts}
        isLoading={loading}
        isFull={false}
        readMore={handleReadMore}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
  loading: state.postsReducer.loading,
  error: state.postsReducer.error,
});

const mapDispatchToProps = {
  fetchData: getPosts,
};

Posts.propTypes = {
  posts: P.arrayOf(P.object).isRequired,
  loading: P.bool.isRequired,
  error: P.bool.isRequired,
  history: P.objectOf(P.object),
  fetchData: P.func.isRequired,
};

Posts.defaultProps = {
  history: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

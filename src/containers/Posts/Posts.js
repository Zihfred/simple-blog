import React, { useEffect } from "react";
import API from "./../../api/requests";
import { getPostsError, getPostsRequest, getPostsSuccess } from "./actions";
import { connect } from "react-redux";
import PostList from "./components/PostList";
import { Container } from "@material-ui/core";
import Header from "../../components/Header";
import {
  errorVariant,
  headerTitle,
  maxWidth,
  successDeletePost,
  successFetchPosts,
  successVariant
} from "../../components/constants";
import { useSnackbar } from "notistack";

const Posts = props => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    loading,
    getPostsError,
    getPostsRequest,
    getPostsSuccess,
    posts,
    history
  } = props;

  const handleReadMore = id => {
    history.push(`posts/${id}`);
  };

  const fetchPosts = () => {
    getPostsRequest();
    API.getAllPosts()
      .then(data => {
        getPostsSuccess(data);
        enqueueSnackbar(successFetchPosts, { variant: successVariant });
      })
      .catch(error => {
        getPostsError(error);
        enqueueSnackbar(error.message, { variant: errorVariant });
      });
  };

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

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  loading: state.postsReducer.loading,
  error: state.postsReducer.error
});

const mapDispatchToProps = {
  getPostsSuccess: getPostsSuccess,

  getPostsError: getPostsError,
  getPostsRequest: getPostsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

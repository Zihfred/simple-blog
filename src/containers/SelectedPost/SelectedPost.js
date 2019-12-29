import React, { useEffect } from "react";
import API from "./../../api/requests";
import {
  getPostByIdError,
  getPostByIdRequest,
  getPostsByIdSuccess
} from "./actions";
import { connect } from "react-redux";
import Header from "../../components/Header";
import {
  errorVariant,
  headerTitle,
  maxWidth,
  successDeletePost,
  successFetchPost,
  successVariant
} from "../../components/constants";

import { useSnackbar } from "notistack";
import Container from "@material-ui/core/Container";
import OnePost from "../../components/OnePost";
import { deletePost } from "../Posts/actions";

const SelectedPost = props => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    title,
    body,
    id,
    comments,
    loading,
    getPostByIdRequest,
    getPostByIdError,
    getPostByIdSuccess,
    history
  } = props;

  const handleDelete = id => {
    API.deletePost(id)
      .then(res => {
        deletePost(id);
        history.push(`/`);
        enqueueSnackbar(successDeletePost, { variant: successVariant });
        return res;
      })
      .catch(err => {
        enqueueSnackbar(err.message, { variant: errorVariant });
      });
  };

  const fetchPost = () => {
    getPostByIdRequest(props.match.params.postid);
    API.getPostById(props.match.params.postid)
      .then(data => {
        getPostByIdSuccess(data);
        enqueueSnackbar(successFetchPost, { variant: successVariant });
      })
      .catch(error => {
        getPostByIdError(error);
        enqueueSnackbar(error.message, { variant: errorVariant });
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Container maxWidth={maxWidth}>
      <Header title={headerTitle} history={history} />
      <OnePost
        isLoading
        title={title}
        body={body}
        id={id}
        isFull={true}
        deletePost={handleDelete}
        isLoading={loading}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  title: state.selectedPostsReducer.title,
  body: state.selectedPostsReducer.body,
  id: state.selectedPostsReducer.id,
  comments: state.selectedPostsReducer.comments,
  loading: state.selectedPostsReducer.loading,
  error: state.selectedPostsReducer.error
});

const mapDispatchToProps = {
  getPostByIdRequest: getPostByIdRequest,
  getPostByIdError: getPostByIdError,
  deletePost: deletePost,
  getPostByIdSuccess: getPostsByIdSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPost);

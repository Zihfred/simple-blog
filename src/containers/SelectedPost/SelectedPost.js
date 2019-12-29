import React, { useEffect } from "react";
import API from "./../../api/requests";
import {
  getPostByIdError,
  getPostByIdRequest,
  getPostsByIdSuccess,
  postCommentByIdSuccess
} from "./actions";
import { connect } from "react-redux";
import Header from "../../components/Header";
import {
  errorVariant,
  headerTitle,
  maxWidth, successCommentPost,
  successDeletePost,
  successFetchPost,
  successVariant
} from "../../components/constants";

import { useSnackbar } from "notistack";
import Container from "@material-ui/core/Container";
import OnePost from "../../components/OnePost";
import { deletePost } from "../Posts/actions";
import Comments from "./components/Comments";

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
    postCommentByIdSuccess,
    history
  } = props;

  const handleDelete = id => {
    API.deletePost(id)
      .then(res => {
        deletePost(id);
        history.push(`/`);
        enqueueSnackbar(successDeletePost, { variant: successVariant });
        return res;
        console.log('deleted')
      })
      .catch(err => {
        enqueueSnackbar(err.message, { variant: errorVariant });
      });
  };

  const handlePostComment = (id, body) => {
    API.postComment(id,body)
      .then(res => {
        console.log(id,body)
        postCommentByIdSuccess({id,body});
        enqueueSnackbar(successCommentPost, { variant: successVariant });
        return res;
      })
      .catch(err => {
        enqueueSnackbar(err.message, { variant: errorVariant });
      });
  };



  useEffect(() => {
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
    fetchPost();
  }, []);

  return (
    <Container maxWidth={maxWidth}>
      <Header title={headerTitle} history={history} />
      <OnePost
        title={title}
        body={body}
        id={id}
        isFull={true}
        deletePost={handleDelete}
        isLoading={loading}
      />
      <Comments postComment={handlePostComment} postId={id} commentsList={comments}/>
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
  getPostByIdSuccess: getPostsByIdSuccess,
  postCommentByIdSuccess: postCommentByIdSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPost);

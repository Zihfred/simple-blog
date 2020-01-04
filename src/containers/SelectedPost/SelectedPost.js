import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import Container from '@material-ui/core/Container';
import P from 'prop-types';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import API from '../../api/requests';
import {
  getPostById,
  postCommentById,
} from './actions';
import Header from '../../components/Header';
import {
  errorVariant,
  headerTitle,
  maxWidth,
  successDeletePost,
  successVariant,
} from '../../components/constants';

import OnePost from '../../components/OnePost';
import Comments from './components/Comments';

const SelectedPost = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    title,
    body,
    id,
    comments,
    loading,
    history,
    getPostById,
    postCommentById,
  } = props;

  const handleDelete = () => {
    API.deletePost(id)
      .then((res) => {
        history.push('/');
        enqueueSnackbar(successDeletePost, { variant: successVariant });
        return res;
      })
      .catch((err) => {
        enqueueSnackbar(err.message, { variant: errorVariant });
      });
  };

  const handlePostComment = (postId, commentBody) => {
    postCommentById(postId, commentBody);
  };


  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    getPostById(props.match.params.postid);
  }, []);

  return (
    <Container maxWidth={maxWidth}>
      <Header title={headerTitle} history={history} />
      <OnePost
        title={title}
        body={body}
        id={id}
        isFull
        deletePost={handleDelete}
        isLoading={loading}
      />
      <Comments postComment={handlePostComment} postId={id} commentsList={comments} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  title: state.selectedPostsReducer.title,
  body: state.selectedPostsReducer.body,
  id: state.selectedPostsReducer.id,
  comments: state.selectedPostsReducer.comments,
  loading: state.selectedPostsReducer.loading,
  error: state.selectedPostsReducer.error,
});

const mapDispatchToProps = {
  getPostById,
  postCommentById,
};

SelectedPost.propTypes = {
  getPostById: P.func.isRequired,
  postCommentById: P.func.isRequired,
  title: P.string,
  body: P.string,
  id: P.number,
  comments: P.arrayOf(P.object),
  loading: P.bool.isRequired,
  // eslint-disable-next-line react/require-default-props,react/forbid-prop-types
  history: P.object,
};

SelectedPost.defaultProps = {
  comments: [],
  title: null,
  body: null,
  id: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPost);

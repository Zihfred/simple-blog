import React from 'react';
import Typography from '@material-ui/core/Typography';
import P from 'prop-types';
import OnePost from '../../../components/OnePost';
import Spinner from '../../../components/Spinner';


const PostList = ({
  posts, deletePost, isLoading, readMore,
}) => {
  if (isLoading) {
    return (
      <Spinner />
    );
  }
  return (
    <>
      <Typography variant="h3" component="h2" align="center">
        Posts List:
      </Typography>
      {posts
        && posts.map((post) => (
          <OnePost
            isFull={false}
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            readMore={readMore}
            deletePost={deletePost}
          />
        ))}
    </>
  );
};

PostList.propTypes = {
  posts: P.arrayOf(P.object).isRequired,
  deletePost: P.func,
  isLoading: P.bool.isRequired,
  readMore: P.func,
};

PostList.defaultProps = {
  readMore: null,
  deletePost: null,
};

export default PostList;

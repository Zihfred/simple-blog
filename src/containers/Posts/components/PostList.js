import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
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

const LoadingWrapper = styled.div`
  text-align: center;
`;

export default PostList;

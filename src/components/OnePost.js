import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { cutText } from './helpers';
import { deletePostText, readFull, shortArticleLength } from './constants';
import Spinner from './Spinner';

const onePost = ({
  title = 'null', body = 'null', id, deletePost, isFull, readMore, isLoading,
}) => {
  if (isLoading) return <Spinner />;
  return (
    <StyledCard>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <StyledBody variant="body2" component="p">
          {isFull ? body : cutText(body, shortArticleLength)}
        </StyledBody>
      </CardContent>
      <CardActions>
        {isFull ? null : <Button size="small" onClick={() => readMore(id)}>{readFull}</Button> }
        {!isFull ? null : (
          <Button size="small" onClick={() => deletePost(id)}>
            {deletePostText}
          </Button>
        )}
      </CardActions>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin: 10px 0;
`;

const StyledBody = styled(Typography)`
  word-break: break-word;
`;
export default onePost;

import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

import P from 'prop-types';

const AddComment = ({ postComment, postId }) => {
  const [commentText, setCommentText] = useState('');
  const handlePostComment = () => {
    postComment(postId, commentText);
    setCommentText('');
  };
  return (
    <StyledPaper>
      <StyledTextField
        multiline
        variant="outlined"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        rows={2}
      />
      <StyledButton onClick={handlePostComment}>Send</StyledButton>
    </StyledPaper>
  );
};

const StyledPaper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  margin: 10px;
  border-bottom: 1px solid black;
`;
const StyledTextField = styled(TextField)`
  width: 100%;
`;
const StyledButton = styled(Button)`
  height: 50%;
`;

AddComment.propTypes = {
  postComment: P.func.isRequired,
  postId: P.number,
};

AddComment.defaultProps = {
  postId: null,
};

export default AddComment;

import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const AddComment = ({ postComment, postId }) => {
  const [commentText, setCommentText] = useState("");
  const handlePostComment = (e) =>{
    postComment(postId, commentText)
    setCommentText('');
  }
  return (
    <StyledPaper>
      <StyledTextField
        multiline={true}
        variant="outlined"
        onChange={e => setCommentText(e.target.value)}
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




export default AddComment;

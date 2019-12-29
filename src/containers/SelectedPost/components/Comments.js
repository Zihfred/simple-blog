import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import AddComment from "./AddComment";

const Comments = ({ commentsList,postComment, postId }) => {
  return (
    <Paper>
      <AddComment postComment={postComment} postId={postId} />
      {commentsList.length && (
        <StyledListItem alignItems="flex-start">
          {commentsList.map(comment => (
            <StyledListItemText primary={comment.body} />
          ))}
        </StyledListItem>
      )}
    </Paper>
  );
};

const StyledListItem = styled(ListItem)`
  flex-direction: column;
`;
const StyledListItemText = styled(ListItemText)`
  padding: 10px;
  word-break: break-word;
  width: 90%;
  margin: 10px 0;
  :not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export default Comments;

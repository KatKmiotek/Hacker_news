import React from 'react';
const Comment = (props) => {
  let commentsList = '';
  function escapeHtml(text) {
    return text
    .replace(/&amp;/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '')
    .replace(/&quot;/g, '')
    .replace(/&#039;/g, '');
  }

  if (props.comments.length > 0) {

    commentsList = props.comments.map(comment => {
      const newCommentText = comment.text.replace(/[\W_]+/g, ' ');
      return <div><h4>Author: {comment.by}</h4>
      <h5>Comment: {newCommentText}</h5>
      </div>;
    });
  }else {
    commentsList = 'no comments';
  }

  return (
    <p>{commentsList}</p>
  );
};

export default Comment;

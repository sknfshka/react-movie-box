import React from 'react';
import Comment from '../common/parts/Comment';

const FilmComments = (props) => {
  const comments = [];

  if (props.comments) {
    props.comments.forEach((comment, id) => {
      comments.push(
        <Comment comment={comment} key={id} />
      );
    });
  }
  
  return (
    <div className="comments">
      <h2>Reviews</h2>
      {comments}
    </div>
  );
}

export default FilmComments;

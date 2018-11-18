import React from 'react';
import { Link } from 'react-router';

const Comment = (props) => {
  const { comment } = props;

  return (
    <div className="comment-item">
      <Link className="comment-author" to={`/profile/${comment.author.id}`}>{comment.author.name}</Link>
      <p className="comment-data">{comment.date.toLocaleString('eng', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}</p>
      <p className="comment-rating">{comment.rating}<span>/10</span></p>
      <p className="commnet-title">{comment.title}</p>
      <p className="comment-text">{comment.text}</p>
    </div>
  );
}

export default Comment;
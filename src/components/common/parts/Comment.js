import React from 'react';
import { Link } from 'react-router';

const Comment = ({ comment }) => {
  return (
    <div className="comment-item">
      { comment.film ? <Link className="comment-author" to={`/film/${comment.film.id}`}>{comment.film.title}</Link> : null }
      { comment.author ? <Link className="comment-author" to={`/profile/${comment.author.id}`}>{comment.author.name}</Link> : null }
      <p className="comment-data">{comment.date.toLocaleString('eng', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}</p>
      <p className="comment-rating">{comment.rating}<span>/10</span></p>
      <p className="comment-title">{comment.title}</p>
      <p className="comment-text">{comment.text}</p>
    </div>
  );
}

export default Comment;
import React from 'react';

import Comment from '../common/parts/Comment'

const Comments = ({ comments }) => {
  let toDisplay = [];

  comments.forEach((comment, id) => {
    toDisplay.push(
      <Comment comment={comment} key={id} />
    );
  });


  return (
    <div className="profile-content-tab active" id="reviews">
      <div className="comments">
        {toDisplay}
      </div>
    </div>
  )
}

export default Comments;
import React from 'react';

const CommentForm = ({onCommentAdded}) => {
  const onFormSubmit = (e) => {
    e.preventDefault();

    onCommentAdded(e.target.title.value, e.target.text.value);
    e.target.title.value = '';
    e.target.text.value = '';
  };

  return (
    <div className="comment-item">
      <form className="comment-form" onSubmit={onFormSubmit}>
        <h2 className="comment-form-title">Add new review</h2>
        <div>

          <label
            className="comment-form__label"
            htmlFor="new-comment-title">Title
          </label>

          <input
            className="comment-form__input"
            id="newCommentTitle"
            type="text"
            name="title"/>

        </div>
        <div>
          <label className="comment-form__label" htmlFor="comment-description">Description</label>
          <textarea
            className="comment-form__textarea"
            id="comment-description"
            name="text" />
        </div>
        <input className="comment-form__input comment-form__submit form-item__input_button" id="submit" type="submit"
               value="SEND"/>

      </form>
    </div>

  );
}

export default CommentForm;
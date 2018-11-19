import React from 'react';
import { Link } from 'react-router';

const CommentForm = () => {
  return (
    <div className="comment-item">
      <form className="comment-form">
          <h2 className="comment-form-title">Add new review</h2>
          <div> 
      
            <label 
            className="comment-form__label" 
            htmlFor="new-comment-title">Title 
            </label>

            <input 
            className="comment-form__input" 
            id="new-comment-title" 
            type="text" 
            name="new-comment-title" 
            />

          </div>
          <div>
            <label className="comment-form__label" htmlFor="comment-description">Description</label>
            <textarea
            className="comment-form__textarea" 
            id="comment-description" 
            type="text" 
            name="password" 
            >
            </textarea>
          </div>
          <input className="comment-form__input comment-form__submit form-item__input_button" id="submit" type="submit"  value="SEND"></input>
          
        </form>
    </div>
    
  );
}

export default CommentForm;
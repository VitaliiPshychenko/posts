import React from 'react';

export default function NewComment(props) {
  const { commentBody, changeInputValue } = props;

  return (
    <form className="comment-form">
      <textarea
        className="comment-form__text"
        value={commentBody}
        onChange={event => changeInputValue(event.target.value)}
      />
      <input className="comment-form__btn" type="submit" value="Public" />
    </form>
  );
}

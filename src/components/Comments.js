import React from 'react';
import NewCommentHandler from './NewCommentHandler';

export default function Comments(props) {
  return (
    <div>
      <div>Comments map from props.comments</div>
      <NewCommentHandler />
    </div>
  );
}

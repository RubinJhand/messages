import React, { useState } from 'react';
import { apiPostAction } from './helpers/apiPostAction';

function ActionBtn(props) {
  const { post, action, didPerformAction } = props;
  const likes = post.likes ? post.likes : 0;

  const className = props.className
    ? props.className
    : 'btn btn-primary btn-sm';

  const actionDisplay = action.display ? action.display : 'Action';

  const handleBackendEvent = (response, status) => {
    if ((status === 200 || status === 201) && didPerformAction) {
      didPerformAction(response, status);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    apiPostAction(post.id, action.type, handleBackendEvent);
  };

  const display =
    action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay;

  return (
    <button className={className} onClick={handleClick}>
      {display}
    </button>
  );
}

export default ActionBtn;

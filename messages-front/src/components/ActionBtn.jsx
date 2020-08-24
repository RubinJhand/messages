import React, { useState } from 'react';
import { apiPostAction } from './helpers/apiPostAction';

function ActionBtn(props) {
  const { post, action } = props;
  const [likes, setLikes] = useState(post.likes ? post.likes : 0);
  // const [userLike, setUserLike] = useState(
  // post.userLike === true ? true : false
  // );
  const className = props.className
    ? props.className
    : 'btn btn-primary btn-sm';
  const actionDisplay = action.display ? action.display : 'Action';

  const handleBackendEvent = (response) => {
    console.log('response backendEvent:>>', response);

    setLikes(response.likes);
    // setUserLike(true)
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

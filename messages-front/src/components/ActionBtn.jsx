import React, { useState } from 'react';

function ActionBtn(props) {
  const { post, action } = props;
  const [likes, setLikes] = useState(post.likes ? post.likes : 0);
  const [userLike, setUserLike] = useState(
    post.userLike === true ? true : false
  );
  const className = props.className
    ? props.className
    : 'btn btn-primary btn-sm';
  const actionDisplay = action.display ? action.display : 'Action';

  const handleClick = (event) => {
    event.preventDefault();
    if (action.type === 'like') {
      if (userLike === true) {
        // perhaps i Unlike it?
        setLikes(likes - 1);
        setUserLike(false);
      } else {
        setLikes(likes + 1);
        setUserLike(true);
      }
    }
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

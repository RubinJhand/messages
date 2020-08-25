import React, { useState } from 'react';
import { apiPostAction } from './helpers/apiPostAction';
import { IconButton } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

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

  if (action.type === 'like') {
    return (
      <IconButton
        aria-label='like'
        variant='outlined'
        color='primary'
        onClick={handleClick}
        fontSize='small'
      >
        <FavoriteBorderIcon fontSize='small' />
      </IconButton>
    );
  }
  if (action.type === 'unlike') {
    return (
      <IconButton
        aria-label='unlike'
        variant='outlined'
        hidden='true'
        onClick={handleClick}
        fontSize='small'
      >
        <ThumbDownAltIcon fontSize='small' />
      </IconButton>
    );
  }
  if (action.type === 'repost') {
    return (
      <IconButton
        aria-label='repost'
        variant='outlined'
        color='primary'
        onClick={handleClick}
        fontSize='small'
      >
        <PublishIcon fontSize='small' />
      </IconButton>
    );
  }

  //   <button className={className} onClick={handleClick}>
  //     {display}
  //   </button>
  // );
}

export default ActionBtn;

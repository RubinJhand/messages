import React, { useState } from 'react';

import ActionBtn from './ActionBtn';
import ParentPost from './ParentPost';

import './Post.css';
import { Avatar, IconButton } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post(props) {
  const { post, didRepost, hideActions } = props;
  const className = props.className
    ? props.className
    : 'col-10 mx-auto col-md-6';
  const [actionPost, setActionPost] = useState(props.post ? props.post : null);

  const handlePerformAction = (newActionPost, status) => {
    if (status === 200) {
      setActionPost(newActionPost);
    } else if (status === 201) {
    }
    if (didRepost) {
      didRepost(newActionPost);
    }
  };

  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              {post.id}{' '}
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' />@{post.id}
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{post.content}</p>
          </div>
          {/* <ParentPost post={post} /> */}
        </div>
        <img
          src='https://c1.wallpaperflare.com/preview/451/906/510/time-decoration-lights-fairy-lights.jpg'
          alt=''
        />

        <div className='post__footer'>
          {actionPost && hideActions !== true && (
            <>
              <ChatBubbleOutlineIcon fontSize='small' />
              <ActionBtn
                post={actionPost}
                didPerformAction={handlePerformAction}
                action={{ type: 'like', display: 'Likes' }}
              />
              <ActionBtn
                post={actionPost}
                didPerformAction={handlePerformAction}
                action={{ type: 'unlike', display: 'Unlike' }}
              />
              <ActionBtn
                post={actionPost}
                didPerformAction={handlePerformAction}
                action={{ type: 'repost', display: 'Repost' }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;

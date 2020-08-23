import React from 'react';

import ActionBtn from './ActionBtn';

function Post(props) {
  const { post } = props;
  const className = props.className
    ? props.className
    : 'col-10 mx-auto col-md-6';
  return (
    <div className={className}>
      <p>
        {post.id} - {post.content}
      </p>
      <div className='btn btn-group'>
        <ActionBtn post={post} action={{ type: 'like', display: 'Likes' }} />
        <ActionBtn post={post} action={{ type: 'unlike', display: 'Unlike' }} />
        <ActionBtn post={post} action={{ type: 'repost', display: '' }} />
      </div>
    </div>
  );
}

export default Post;

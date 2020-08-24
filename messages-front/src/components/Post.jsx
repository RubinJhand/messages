import React, { useState } from 'react';

import ActionBtn from './ActionBtn';
import ParentPost from './ParentPost';

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
    <div className={className}>
      <div>
        <p>
          {post.id} - {post.content}
        </p>
        <ParentPost post={post} />
      </div>
      {actionPost && hideActions !== true && (
        <div className='btn btn-group'>
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
        </div>
      )}
    </div>
  );
}

export default Post;

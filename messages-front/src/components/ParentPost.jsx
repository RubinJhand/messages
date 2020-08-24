import React from 'react';

import Post from './Post';

function ParentPost(props) {
  const { post } = props;
  return post.parent ? (
    <div className='row'>
      <div className='col-11 mx-auto p-3 border rounded'>
        <p className='mb-0 text-muted small'>Repost</p>
        <Post hideActions className={' '} post={post.parent} />
      </div>
    </div>
  ) : null;
}

export default ParentPost;

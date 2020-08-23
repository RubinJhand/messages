import React, { useState, useEffect } from 'react';

import { loadPosts } from './helpers/loadPosts';
import Post from './Post';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts(setPosts);
  }, []);

  return posts.map((item, index) => {
    return (
      <Post
        post={item}
        className='my-5 py-5 border bg-white text-dark'
        key={`${index}-{item.id}`}
      />
    );
  });
}

export default PostList;

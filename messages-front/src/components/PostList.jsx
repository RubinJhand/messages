import React, { useState, useEffect } from 'react';

import { apiLoadPosts } from './helpers/apiLoadPosts';
import Post from './Post';

function PostList(props) {
  const [posts, setPosts] = useState([]);
  const [postsInit, setPostsInit] = useState([]);
  const [postsDidSet, setPostsDidSet] = useState(false);

  useEffect(() => {
    const final = [...props.newPosts].concat(postsInit);
    if (final.length !== posts.length) {
      setPosts(final);
    }
  }, [props.newPosts, posts, postsInit]);

  useEffect(() => {
    if (!postsDidSet) {
      apiLoadPosts(setPostsInit);
      setPostsDidSet(true);
    }
  }, [postsInit, postsDidSet, setPostsDidSet]);

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

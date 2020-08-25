import React, { useState, useEffect } from 'react';

import TweetBox from './TweetBox';
import Post from './Post';
import { apiLoadPosts } from './helpers/apiLoadPosts';

// import FlipMove from 'react-flip-move';

import './Feed.css';

function Feed(props) {
  const [posts, setPosts] = useState([]);
  const [postsInit, setPostsInit] = useState([]);
  const [postsDidSet, setPostsDidSet] = useState(false);

  useEffect(() => {
    // db.collection('posts').onSnapshot((snapshot) =>
    //   setPosts(snapshot.docs.map((doc) => doc.data()))
    // );
  }, []);

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

  const handleDidRepost = (newPost) => {
    const updatePostsInit = [...postsInit];
    updatePostsInit.unshift(newPost);
    setPostsInit(updatePostsInit);
    const updateFinalPosts = [...posts];
    updateFinalPosts.unshift(posts);
    setPosts(updateFinalPosts);
  };

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      {/* <TweetBox /> */}

      {/* <FlipMove> */}
      {posts.map((item, index) => (
        <Post
          post={item}
          didRepost={handleDidRepost}
          className='my-5 py-5 border bg-white text-dark'
          key={`${index}-{item.id}`}
        />
      ))}
      {/* </FlipMove> */}
    </div>
  );
}

export default Feed;

import React, { useState } from 'react';
// import db from './firebase';

import Feed from './Feed';
import { apiCreatePost } from './helpers/apiCreatePost';

import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import PostList from './PostList';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const [newPosts, setNewPosts] = useState([]);

  const sendTweet = (e) => {
    e.preventDefault();

    const backendUpdate = (response) => {
      let posts = [...newPosts];
      posts.unshift(response);
      setNewPosts(posts);
    };

    // db.collection('posts').add({
    //   displayName: 'Rafeh Qazi',
    //   username: 'cleverqazi',
    //   verified: true,
    //   text: tweetMessage,
    //   image: tweetImage,
    //   avatar:
    //     'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
    // });
    apiCreatePost(tweetMessage, backendUpdate);
    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://c1.wallpaperflare.com/preview/451/906/510/time-decoration-lights-fairy-lights.jpg' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type='text'
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          placeholder='Optional: Enter image URL'
          type='text'
        />

        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
      <Feed newPosts={newPosts} />
      {/* <PostList newPosts={newPosts} /> */}
    </div>
  );
}

export default TweetBox;

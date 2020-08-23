import React, { useEffect, useState } from 'react';

import { loadPosts } from './components/helpers/loadPosts';
import Post from './components/Post';

import logo from './logo.svg';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts(setPosts);
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <div>
          {posts.map((item, index) => {
            return (
              <Post
                post={item}
                className='my-5 py-5 border bg-white text-dark'
                key={`${index}-{item.id}`}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;

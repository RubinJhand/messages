import React, { useEffect, useState } from 'react';

import { loadPosts } from './components/helpers/loadPosts';

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

        <p>
          {console.log(posts)}
          {posts.map((post) => {
            return <li>{post.content}</li>;
          })}
        </p>
      </header>
    </div>
  );
}

export default App;

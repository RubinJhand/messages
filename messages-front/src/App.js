import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const loadPosts = (cb) => {
  const xhr = new XMLHttpRequest();
  const method = 'GET';
  const url = 'http://localhost:8000/api/posts/';
  const responseType = 'json';
  xhr.responseType = responseType;
  xhr.open(method, url);
  xhr.onload = function () {
    cb(xhr.response, xhr.status);
  };
  xhr.onerror = (e) => {
    cb({ message: 'The request was an error' }, 400);
  };
  xhr.send();
};

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const myCallback = (response, status) => {
      if (status === 200) {
        setPosts(response);
      } else {
        alert('There was an error');
      }
    };
    loadPosts(myCallback);
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {posts.map((post) => {
            return <li>{post.content}</li>;
          })}
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

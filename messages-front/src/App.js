import React from 'react';

import PostList from './components/PostList';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <div>
          <PostList />
        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';

import PostForm from './components/PostForm';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <div>
          <PostForm />
        </div>
      </header>
    </div>
  );
}

export default App;

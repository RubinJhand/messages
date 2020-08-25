import React from 'react';

import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

import './App.css';
import TweetBox from './components/TweetBox';

function App() {
  return (
    <div className='app'>
      <Sidebar />

      <TweetBox />
      <Widgets />
    </div>
  );
}

export default App;

import React from 'react'
import SideBard from './Components/SideBard';
import Feed from './Components/Feed';
import './App.css'
import Widget from './Components/Widget';

function App() {
  return (
    <div className='app'>
      <SideBard/>
      <Feed />
      <Widget />
    </div>
  )
}

export default App

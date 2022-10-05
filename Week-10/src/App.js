import React, { useState } from 'react'
import './App.css';
import UrlShortner from './components/UrlShortner';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ShortTheLink from './components/ShortTheLink';

function App() {
   const [inputValue, setInputValue]=useState('');
  return (
    <div className='App container'>
      <UrlShortner setInputValue={setInputValue} />
      <ShortTheLink inputValue={inputValue} />
    </div>
  )
}

export default App;
import React from 'react'
import './App.css';
import UrlShortner from './components/UrlShortner';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='App container'>
      <UrlShortner />
    </div>
  )
}

export default App
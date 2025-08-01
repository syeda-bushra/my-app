import React from 'react';
import './App.css';
import dynasoftLogo from './dynasoft.png'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dynasoftLogo} className="App-logo" alt="DynaSoft Cloud" />
        <p>
          Welcome to DynaSoft Cloud.
        </p>
        <a
          className="App-link"
          href="https://dynasoft.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      </header>
    </div>
  );
}

export default App;

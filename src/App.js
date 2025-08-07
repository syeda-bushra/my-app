import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [delayedText, setDelayedText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedText(inputText);
    }, 3000);

    return () => clearTimeout(timer);
  }, [inputText]);



  const handleRemove = () => 
    setInputText('');
  const handleUpperCase = () => 
    setInputText(inputText.toUpperCase());
  const handleLowerCase = () => 
    setInputText(inputText.toLowerCase());
  const handleCapitalizeFirst = () => {
    const newText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
    setInputText(newText);
  };

  return (
    <div className="centered-container">
      <h2>Welcome!</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="4"
        cols="40"
        placeholder="Type something..."
      />

      <div className="button-group">
        <button onClick={handleRemove}>Remove</button>
        <button onClick={handleUpperCase}>UpperCase</button>
        <button onClick={handleLowerCase}>LowerCase</button>
        <button onClick={handleCapitalizeFirst}>CapitalizeFirst</button>
      </div>

      <p><strong>Output:</strong> {delayedText}</p>
      <p><strong>Character Length:</strong> {inputText.length}</p>

    </div>
  );
}

export default App;

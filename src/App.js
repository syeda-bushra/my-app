import React, { useState, useEffect } from 'react';
import './App.css';

function WelcomeMessage() {
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThanks(true);
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="centered-container">
      <p>Welcome!</p>
      {showThanks && <p>Thanks for visiting!</p>}
    </div>
  );
}

export default WelcomeMessage;

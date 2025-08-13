import React, { useState } from 'react';

const FactorialComponent = () => {
  const [number, setNumber] = useState(0);

  const factorial = (n) => {
    if (n < 0) 
      return "Invalid input";
    if (n === 0 || n === 1) 
      return 1;
    return n * factorial(n - 1);
  };

  return (
    <div>
      <h1><strong>Factorial Calculator</strong></h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial of {number} is: {factorial(number)}</p>
    </div>
  );
};
export default FactorialComponent;
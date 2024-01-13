/** @format */

import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const Increase = () => {
    setNumber((number) => number + 1);
  };

  const Decrease = () => {
    setNumber((number) => number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>

      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-1</button>
    </div>
  );
};

export default Counter;

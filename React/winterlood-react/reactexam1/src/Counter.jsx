/** @format */
import React, { useState } from 'react';
import OddEvenResult from './oddEvenResult';

const Counter = ({ counterValue3 }) => {
  const [count, setCount] = useState(counterValue3); // props 매개변수로 받아 프로퍼티로 전달 방법

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <br />
      <OddEvenResult className='result' count={count} />
    </div>
  );
};

Counter.defaultProps = {
  counterValue3: 0,
};

export default Counter;

/** @format */

import React, { useState, useEffect } from 'react';

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update! ${count}`);
  });

  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update! ${obj.count}`);
  });

  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count;
  // if (prevProps.obj.count === nextProps.obj.count) {
  //   return true; 이전 프롭스 현재 프롭스가 같다 -> 리랜더링을 일으키지 않게된다
  // }
  // return false; 이전과 현재가 다르다 -> 리랜더링을 일으키라는 소리
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <h2>Counter A</h2>
      <CounterA count={count} />
      <button
        onClick={() => {
          setCount(count);
        }}>
        A Button
      </button>
      <h2>Counter B</h2>
      <MemoizedCounterB obj={obj} />
      <button
        onClick={() => {
          setObj({ count: obj.count });
        }}>
        B Button
      </button>
    </div>
  );
};

export default OptimizeTest;

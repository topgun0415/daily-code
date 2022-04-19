/** @format */

import React, { useState, useEffect } from 'react';

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 첫 랜더링이 될 때
  useEffect(() => {
    console.log('Mount');
  }, []);

  // 업데이트로 인해서 재랜더링이 시작될때 실행시킬 작업이 있다면 이렇게 하면 됨
  useEffect(() => {
    console.log('Update');
  });

  useEffect(() => {
    console.log(`count is update : ${count}`);
    if (count > 5) {
      alert('You should not click the button over 5 times');
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          Click
        </button>
      </div>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Lifecycle;

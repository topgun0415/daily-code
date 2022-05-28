/** @format */

import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: 'red', fontWeight: 'bold' }}
        onClick={() => {
          setColor('red');
        }}>
        빨간색
      </button>
      <button
        style={{ color: 'yellow', fontWeight: 'bold' }}
        onClick={() => {
          setColor('yellow');
        }}>
        노란색
      </button>
      <button
        style={{ color: 'green', fontWeight: 'bold' }}
        onClick={() => {
          setColor('green');
        }}>
        초록색
      </button>
    </div>
  );
};

export default Say;

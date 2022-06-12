/** @format */

import React, { useState } from 'react';

const HookPratice = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <p>Value is {value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <br></br>
      <input type='text' onChange={onChangeName} />
      <input type='text' onChange={onChangeNickname} />
      <h2>My name is {name}</h2>
      <h2>My nickname is {nickname}</h2>
    </div>
  );
};

export default HookPratice;
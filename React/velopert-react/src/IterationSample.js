/** @format */

import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'snowMan' },
    { id: 2, text: 'ice' },
    { id: 3, text: 'fire' },
    { id: 4, text: 'wind' },
    { id: 5, text: 'grass' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(6); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onClick = (e) => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => {
        onRemove(name.id);
        console.log('Delete proceed');
      }}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가하기</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;

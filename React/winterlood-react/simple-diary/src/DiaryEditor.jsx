/** @format */

import React, { useRef, useState } from 'react';
// useState = React에서는 변수 선언없이 이렇게 useState를 선언해서 제어함
// useRef = 자바스크립트의 QuerySelector와 같은 역할

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert('保存完了');
    setState({
      author: '',
      content: '',
      emotion: 1,
    });
  };

  return (
    <div className='DiaryEditor'>
      <h2>今日の日記</h2>
      <div>
        <input
          ref={authorInput}
          name='author'
          value={state.author}
          onChange={onChangeHandler}
          placeholder='作者'
          type='text'
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name='content'
          placeholder='日記'
          type='text'
          value={state.content}
          onChange={onChangeHandler}></textarea>
      </div>
      <div>
        <select name='emotion' value={state.emotion} onChange={onChangeHandler}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>日記保存</button>
      </div>
    </div>
  );
};

export default DiaryEditor;

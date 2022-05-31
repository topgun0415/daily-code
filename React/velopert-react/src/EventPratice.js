/** @format */

import React, { useState } from 'react';

const EventPratice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;

  const inputHanlder = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(nextForm);
  };

  const clickHandler = () => {
    alert(username + ' :' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      clickHandler();
    }
  };

  return (
    <div>
      <h1>Event Pratice</h1>
      <input
        type='text'
        name='username'
        value={username}
        placeholder='write user name'
        onChange={inputHanlder}
      />
      <input
        type='text'
        name='message'
        value={message}
        placeholder='write message'
        onChange={inputHanlder}
        onKeyPress={enterHandler}
      />
      <button onClick={clickHandler}>Button</button>
    </div>
  );
};

export default EventPratice;

/** @format */

import React from 'react';
import './App.css';

const App = () => {
  const user_name = 'Philip';
  const user_status = 'admins';

  return (
    <>
      <div className='App'>
        {user_name === 'Philip' ? (
          <h1>Welcome to React Philip</h1>
        ) : (
          <h1>Hello to React World</h1>
        )}
        <h2>My name is {user_name}</h2>
        <div>
          {user_status === 'admins' && <h3>Welcome to Admins Pages</h3>}
        </div>
      </div>
    </>
  );
};

export default App;

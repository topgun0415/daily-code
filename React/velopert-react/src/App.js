/** @format */

import React from 'react';
import './App.css';

const App = () => {
  const user_name = 'Philips';
  const user_status = 'admins';
  const user_id = undefined;
  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 'auto',
    height: '30vh',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
  };

  return (
    <div className='App'>
      <div style={mainStyle}>
        {user_name === 'Philip' ? (
          <div>Welcome to React Philip</div>
        ) : (
          <div>Hello to React World</div>
        )}
        <div>My name is {user_name}</div>
      </div>
      <div className='Admins'>
        {user_status === 'admins' && <h3>Welcome to Admins Pages</h3>}
        {/* undefined 혹은 falsy값 or 연산자로 오류 방지하기 */}
        {user_id || 'Please change the User ID'}
      </div>
      <div>
        <input type='text' />
      </div>
    </div>
  );
};

export default App;

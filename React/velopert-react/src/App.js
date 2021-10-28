/** @format */
import React from 'react';
import './App.css';

function App() {
  const name = 'React JS';
  const style3 = 'CSS + React';
  const style2 = {
    // background-color는 backgroundColor와 같이 파스칼 표기법이 아닌 카멜케이스로 변경됨
    backgroundColor: 'black',
    color: 'yellow',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 25,
  };
  return (
    <div
      style={{
        // background-color는 backgroundColor와 같이 파스칼 표기법이 아닌 카멜케이스로 변경됨
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 25,
      }}>
      {name}
      <div style={style2}>React Ninja</div>
      <div className='react'>{style3}</div>
    </div>
  );
}
export default App;

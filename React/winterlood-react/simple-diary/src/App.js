/** @format */

import './App.css';
import React, { useState } from 'React';
import DiaryEditor from './DiaryEditor.js';
import DiaryList from './DiaryList.js';

// const dummyList = [
//   {
//     id: 1,
//     author: 'Lee',
//     content: 'Hello World',
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: 'Kim',
//     content: 'Hello World 1',
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: 'Park',
//     content: 'Hello World 2 ',
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: 'Gi',
//     content: 'Hello World 3 ',
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 5,
//     author: 'Lee',
//     content: 'Hello World 4',
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const onCreate = (author, content, emotion) => {};

  return (
    <div className='App'>
      <DiaryEditor />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;

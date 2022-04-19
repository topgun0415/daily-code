/** @format */

import './App.css';
import { useState, useRef, useEffect } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';

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

// https://jsonplaceholder.typicode.com/comments

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  // // usage of fetch API
  // const getData = async () => {
  //   const res = await fetch(
  //     'https://jsonplaceholder.typicode.com/comments'
  //   ).then((res) => res.json());
  //   console.log(res);

  //   const initData = res.slice(0, 20).map((v) => {
  //     return {
  //       author: v.email,
  //       content: v.body,
  //       emotion: parseInt(Math.floor(Math.random() * 6)),
  //       created_date: new Date().getTime().toLocaleString(),
  //       id: dataId.current++,
  //     };
  //   });
  //   setData(initData);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetID) => {
    console.log(`${targetID}가 삭제되었습니다.`);
    const newDiaryList = data.filter((v) => v.id !== targetID);
    setData(newDiaryList);
  };

  const onEdit = (targetID, newContent) => {
    setData(
      data.map((v) => (v.id === targetID ? { ...v, content: newContent } : v))
    );
  };

  return (
    <div className='App'>
      {/* <Lifecycle /> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;

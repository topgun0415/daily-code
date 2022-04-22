/** @format */

import './App.css';
import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
} from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import OptimizeTest from './OptimizeTest';
// import Lifecycle from './Lifecycle';

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case 'REMOVE': {
      return state.filter((v) => v.id !== action.targetID);
    }
    case 'EDIT': {
      return state.map((v) =>
        v.id === action.targetID ? { ...v, content: action.newContent } : v
      );
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  // usage of fetch API
  const getData = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((v) => {
      return {
        author: v.email,
        content: v.body,
        emotion: parseInt(Math.floor(Math.random() * 6)),
        created_date: new Date().getTime().toLocaleString(),
        id: dataId.current++,
      };
    });
    dispatch({ type: 'INIT', data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: { author, content, emotion, id: dataId.current },
    });

    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetID) => {
    dispatch({ type: 'REMOVE', targetID });
  }, []);

  const onEdit = useCallback((targetID, newContent) => {
    dispatch({ type: 'EDIT', targetID, newContent });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);
  // 일반 객체가 아닌 useMemo()를 사용한 이유는 useMemo는 일반 객체로 묶은 것과는 달리 재생성이 되지 않는다. 즉 리랜더링을 안하게 된다.

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((v) => v.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, goodRatio, badCount } = getDiaryAnalysis;

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className='App'>
          {/* <Lifecycle /> */}
          <OptimizeTest />
          <DiaryEditor />
          <div>전체 일기 : {data.length}</div>
          <div>기분 좋은 일기 : {goodCount}</div>
          <div>기분 나쁜 일기 : {badCount}</div>
          <div>기분 좋은 비율 : {goodRatio}%</div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;

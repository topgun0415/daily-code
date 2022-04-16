/** @format */
// import './App.css';
import MyFooter from './MyFooter.jsx';
import MyHeader from './MyHeader.jsx';

function App() {
  let name = '이성계';
  const number = 5;

  const style = {
    App: {
      backgroundColor: 'black',
    },
    h2: {
      color: 'red',
    },
    bold_text: {
      color: 'green',
    },
  };

  return (
    <div style={style.App} className='App'>
      <MyHeader />
      <h2 style={style.h2}>안녕 리액트 {name} </h2>
      <h3 style={style.h2}>
        {number}는 {number ? '짝수' : '홀수'}이다.
      </h3>
      <b style={style.bold_text} className='bold_text'>
        React.js
      </b>
      <MyFooter />
    </div>
  );
}

export default App;

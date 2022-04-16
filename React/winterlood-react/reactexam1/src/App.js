/** @format */
import React from 'react';
// import './App.css';
import MyHeader from './MyHeader.jsx';
import Counter from './Counter.jsx';
import Container from './Container.jsx';

function App() {
  const counterProps = {
    counterValue1: 3,
    counterValue2: 4,
    counterValue4: 8,
  };

  return (
    <Container>
      <div className='App'>
        <MyHeader />
        <Counter Value={2} {...counterProps} />
        {/* 이렇게 속성값으로 props라는 값을 전달할 수도 있음 */}
      </div>
    </Container>
  );
}

export default App;

// 1. 속성전달로 준 props와 객체선언해서 준 props를 동시에 못 주나?
// 2. 파일명은 무조건 대문자 시작?
// 3. return에서 어떤건 괄호가 생기고 어떤건 그냥 <> </>로만 있는데 return하는 것이 2개 문장 이상이면 되는것 맞나??
// 4. children이라는 Props의 이름은 고정된 것?

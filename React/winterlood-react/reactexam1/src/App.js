/** @format */
import React, { useState, useEffect } from 'react';
// import './App.css';
import MyHeader from './MyHeader.jsx';
import Counter from './Counter.jsx';
import Container from './Container.jsx';
import axios from 'axios';

function App() {
  const counterProps = {
    counterValue1: 3,
    counterValue2: 4,
    counterValue4: 8,
  };

  const [bootCamps, setBootCamps] = useState([]);

  useEffect(() => {
    axios.get('http://allco-dev.dhtmdgkr123.com:4669/bootcamps').then((res) => {
      console.log(res);
      setBootCamps(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(bootCamps[0]);
  }, [bootCamps]);

  return (
    <Container>
      <div className='App'>
        <MyHeader />
        <Counter Value={2} {...counterProps} />
        {/* 이렇게 속성값으로 props라는 값을 전달할 수도 있음 */}
      </div>
      <section>
        <select name='하이룽' id=''>
          {bootCamps.map((v) => {
            return <option>{v.name}</option>;
          })}
        </select>
      </section>
      <section>
        <div>
          {bootCamps.map((v) => {
            return <h2>{v.name}</h2>;
          })}
        </div>
      </section>
    </Container>
  );
}

export default App;

// 1. 속성전달로 준 props와 객체선언해서 준 props를 동시에 못 주나?
// 2. 파일명은 무조건 대문자 시작?
// 3. return에서 어떤건 괄호가 생기고 어떤건 그냥 <> </>로만 있는데 return하는 것이 2개 문장 이상이면 되는것 맞나??
// 4. children이라는 Props의 이름은 고정된 것?

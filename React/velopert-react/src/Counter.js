/** @format */

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 1,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 1,
  //   };
  // }

  render() {
    const { number, fixedNumber } = this.state; // 왜 여기서 { number }
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
              }
            );
          }}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

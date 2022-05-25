/** @format */

import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div className='react'>
        <MyComponent name={name}>React 💔 Ruby</MyComponent>
        <Counter />
      </div>
    );
  }
}

export default App;

/** @format */

import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPratice from './EventPratice';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div className='react'>
        <MyComponent name={name}>React 💔 Ruby</MyComponent>
        <Counter />
        <Say />
        <EventPratice />
      </div>
    );
  }
}

export default App;

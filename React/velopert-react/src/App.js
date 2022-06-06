/** @format */

import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPratice from './EventPratice';
import ValidationSample from './ValidationSample';
import IterationSample from './IterationSample';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div className='react'>
        <MyComponent name={name}>React 💔 Ruby</MyComponent>
        <Counter />
        <Say />
        <EventPratice />
        <ValidationSample />
        <IterationSample />
      </div>
    );
  }
}

export default App;

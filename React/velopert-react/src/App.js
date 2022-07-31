/** @format */

import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPratice from './EventPratice';
import ValidationSample from './ValidationSample';
import IterationSample from './IterationSample';
import HookPratice from './HookPratice';
import LifeCycleSample from './LifeCycleSampe';

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

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
        <HookPratice />
        <h2>----- LifeCycle Practice ------</h2>
        <button onClick={this.handleClick}>Random Color</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;

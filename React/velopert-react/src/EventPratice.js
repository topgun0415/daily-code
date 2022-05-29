/** @format */

import React, { Component } from 'react';

class EventPratice extends Component {
  state = {
    message: '',
    username: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: 'Red' }}>Event Pratice</h1>
        <input
          type='text'
          name='username'
          placeholder='User Name'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='message'
          placeholder='Message'
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default EventPratice;

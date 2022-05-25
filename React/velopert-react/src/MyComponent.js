/** @format */

// rsc : 함수형 컴포넌트 생성
// rcc : 클래스형 컴포넌트 생성

import React from 'react';

const MyComponent = ({ name, children }) => {
  // const { name, children } = props;

  return (
    <div>
      <h2>Hello World! My name is {name}.</h2>
      <h2>props.children : {children}</h2>
    </div>
  );
};

// Props default value
MyComponent.defaultProps = {
  name: 'Anonymous',
};

export default MyComponent;

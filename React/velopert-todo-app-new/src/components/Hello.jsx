/** @format */

import React from 'react';

const Hello = ({ name, color, isSpecial }) => {
  return (
    <div>
      <h1 style={{ color }}>
        {isSpecial && <b>*</b>} Hello {name}
      </h1>
    </div>
  );
};

Hello.defaultProps = {
  name: '아무개',
};

export default Hello;

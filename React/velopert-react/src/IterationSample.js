/** @format */

import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((v, i) => <li key={i}>{v}</li>);

  return (
    <div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;

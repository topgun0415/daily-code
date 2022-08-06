/** @format */
import React, { useState } from 'react';
import HookPratice from './HookPratice';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <HookPratice />}
    </div>
  );
};

export default App;

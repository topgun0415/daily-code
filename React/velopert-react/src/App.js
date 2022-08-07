/** @format */
import React, { useState } from 'react';
import HookPratice from './HookPratice';
import Counter from './Counter';
import Average from './Average';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';
import StyledComponent from './Components/style/StyledComponent';

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
      <Counter />
      <Average />
      <SassComponent />
      <CSSModule />
      <h2>Styled Component Pratice 💅</h2>
      <StyledComponent />
    </div>
  );
};

export default App;

/** @format */

import './App.css';
import Hello from './components/Hello.jsx';
import Wrapper from './components/Wrapper.jsx';
import Counter from './components/Counter.jsx';

function App() {
  const name = 'Philipuuu';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '24',
    padding: '1rem',
  };

  return (
    <Wrapper>
      {/* 이렇게 isSpecial 이름만 넣어주면 isSpecial={true} 와 동일한 의미입니다. */}
      <Hello color='red' isSpecial />
      <Hello color='pink' isSpecial={false} />
      <Counter />
    </Wrapper>
  );
}

export default App;

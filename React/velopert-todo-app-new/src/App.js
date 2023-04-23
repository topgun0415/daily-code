/** @format */

import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead.jsx';

const GlobalStyle = createGlobalStyle`
 body {
  background: #e9ecef;
 }
 `;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </div>
  );
}

export default App;

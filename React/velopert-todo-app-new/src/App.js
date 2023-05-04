/** @format */

import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead.jsx';
import TodoList from './components/TodoList.jsx';
import TodoCreate from './components/TodoCreate';

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
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;

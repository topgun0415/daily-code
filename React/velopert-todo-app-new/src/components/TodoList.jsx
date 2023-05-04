/** @format */

import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  border-radius: 2px;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text='朝ご飯食べる' done={true} />
      <TodoItem text='勉強' done={false} />
      <TodoItem text='昼ごはん食べる' done={false} />
      <TodoItem text='夜ご飯準備' done={true} />
    </TodoListBlock>
  );
};

export default TodoList;

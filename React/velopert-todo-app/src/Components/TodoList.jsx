import React from 'react';
import TodoListItem from './TodoListItem';
import '../Styles/TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((v) => (
        <TodoListItem todo={v} key={v.id} />
      ))}
    </div>
  );
};

export default TodoList;

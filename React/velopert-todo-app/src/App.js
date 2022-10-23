import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/Todoinsert';
import TodoList from './Components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 5; i++) {
    array.push({
      id: i,
      text: `Todo List ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);

    case 'REMOVE':
      return todos.filter((v) => v.id !== action.id);

    case 'TOGGLE':
      return todos.map((v) =>
        v.id === action.id ? { ...v, checked: !v.checked } : v,
      );

    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기;
  const nextId = useRef(2501);

  // Create
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  // Delete
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  // Fix
  const onToggle = useCallback((id) => dispatch({ type: 'TOGGLE', id }), []);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default App;

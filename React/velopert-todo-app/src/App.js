import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/Todoinsert';
import TodoList from './Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Reasearch Basic of React',
      checked: true,
    },

    {
      id: 2,
      text: 'Styling React Components',
      checked: true,
    },

    {
      id: 3,
      text: 'Make Todo list Application',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기;
  const nextId = useRef(4);

  // Create
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  // Delete
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((v) => v.id !== id));
    },
    [todos],
  );

  // Fix
  const onToggle = useCallback(
    (id) =>
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      ),
    [todos],
  );

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

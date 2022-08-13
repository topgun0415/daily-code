import React from 'react';
import '../Styles/TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Daily schedule</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;

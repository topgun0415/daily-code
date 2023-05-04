/** @format */
import React from 'react';
import styled from 'styled-components'; // styled로 스타일드컴퍼넌트를 불러옴

const TodoTemplateBlock = styled.div`
  width: 412px;
  height: 708px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;

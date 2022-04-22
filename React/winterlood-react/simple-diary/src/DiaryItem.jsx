/** @format */

import React, { useContext, useState, useRef } from 'react';
import { DiaryDispatchContext } from './App';

const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  const handleRemove = () => {
    if (window.confirm('日記を本当に消しますか')) {
      onRemove(id);
    }
  };

  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}番の日記を修正しますか`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>
          作者 : {author} | 調子レベル : {emotion}
        </span>
        <br />
        <span className='date'>
          {new Date(created_date).toLocaleString('ja-jp')}
        </span>
      </div>
      <div className='content'>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => {
                setLocalContent(e.target.value);
              }}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleEdit}>修正完了</button>
          <button onClick={handleQuitEdit}>取り消す</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>消す</button>
          <button onClick={toggleIsEdit}>修正</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);

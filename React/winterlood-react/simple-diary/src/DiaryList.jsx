/** @format */
import { useContext } from 'react';
import { DiaryStateContext } from './App';
import DiaryItem from './DiaryItem';
import { DiaryDispatchContext } from './App';

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);
  const { onEdit, onRemove } = useContext(DiaryDispatchContext);

  return (
    <div className='DiaryList'>
      <h2>日記リスト</h2>
      <h4>日記が{diaryList.length}個あります</h4>
      <div>
        {diaryList.map((v) => (
          <DiaryItem key={`diaryitem_${v.id}`} {...v} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;

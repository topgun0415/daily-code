/** @format */
import DiaryItem from './DiaryItem.js';

const DiaryList = ({ diaryList }) => {
  console.log(diaryList);
  return (
    <div className='DiaryList'>
      <h2>日記リスト</h2>
      <h4>日記が{diaryList.length}個あります</h4>
      <div>
        {diaryList.map((v) => (
          <DiaryItem key={v.id} {...v} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;

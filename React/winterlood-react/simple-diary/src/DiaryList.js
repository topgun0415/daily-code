/** @format */
import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  console.log(diaryList);
  return (
    <div className='DiaryList'>
      <h2>日記リスト</h2>
      <h4>日記が{diaryList.length}個あります</h4>
      <div>
        {diaryList.map((v) => (
          <DiaryItem
            onEdit={onEdit}
            onRemove={onRemove}
            key={`diaryitem_${v.id}`}
            {...v}
          />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;

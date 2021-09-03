// 배열에서 요소찾기 

const search1 = ["A", "B", "C", "D", "E"];
const result2 = search1.indexOf("C");  // 배열에서 몇번 째 값에 있는지 확인,  search[2]에 있다고 출력
const result3 = search1.lastIndexOf("A");  // 마찬가지로 몇번째 배열에 있는지 확인 , search[0]에 있다고 출력
const result4 = search1.indexOf("Z");   // 배열에 존재하지 않은 , 존재되지 않은 값이라 -1가 출력됨
console.log(result2);
console.log(result3);
console.log(result4);

// 배열 반복하기 

// while문
const repeat = ["가", "나", "다", "라", "마"];
let i = 0;
while (i < repeat.length) {
  console.log(repeat[i]);
  i++;
}

// for문 
const repeat1 = [1, 2, 3, 4, 5];
for(let j = 0; j < repeat1.length; j++) {
    console.log(repeat1[j]);
}

/* 1분 퀴즈 : 다음 배열에서 "라"를 모두 제거하시오. indexOf와 splice를 사용하세요 
   const arr = ["가", "라", "다", "라", "마", "라"];

   indexOf = 인덱스 값 찾는 메서드
   splice  = 배열 수정하는 메서드

*/
console.log("-------Quiz-------")
const arr = ["가", "라", "다", "라", "마", "라"];
for(let k = 0; k < arr.length; k++) {
  arr.splice(1,5,"다","마");
  k++;
}
console.log(arr);


// 답 

const arr1 = ["가", "라", "다", "라", "마", "라"];
while(arr1.indexOf("라") > -1) {
    arr1.splice(arr1.indexOf("라"), 1);  
    console.log(arr1);
}

const arr2 = ["가", "라", "다", "라", "마", "라"];
let index = arr2.indexOf("라"); // 1 , 3, 5 가 index 안으로 들어감
while(index > -1) {
    arr2.splice(index, 1);
    index = arr2.indexOf("라");
    console.log(index);
    console.log(arr2);
}








// 배열에  요소 추가하기

const target = ["a", "b", "c", "d", "e"];
target[5] = "f";    // 배열의 5번째에 f 추가
console.log(target)
target[4] = "z";    // 수정 가능
console.log(target);

const target1 = ["가", "나", "다", "라"];
target1[target1.length] = "마";
console.log(target1);   // .length 를 사용한 배열에 값 추가 

const add = [ 1, 2, 3, 4 ]; 
add.unshift(0); // unshift 를 사용한 배열 맨 앞에 추가하기
console.log(add); 

const add1 = [ 1, 2, 3, 4 ];
add1.push(5);   // push를 사용해 배열 맨 뒤에 추가하기
console.log(add1);

// cosnt는 상수인데 수정 가능한 이유 ? const 에 객체(배열, 함수, 객체 리터럴)가 대입되면 객체 내부의 속성이나 배열의 요소는 수정할 수 있씁니다.

// 배열의 요소 수정하기

const fix = ["가", "나", "다", "라"];
fix[3] = "바";
console.log(fix);

// 배열에서 요소 제거하기

const del = [1, 2, 3, 4, 5];
del.shift();    // unshift의 반대인 shift를 사용한 배열 맨 앞 삭제하기 
console.log(del);

const del1 = [1, 2, 3, 4, 5];
del1.pop();     // pop를 사용해 배열 맨 끝 값 삭제하기
console.log(del1);

const del2 = [1, 2, 3, 4, 5];
del2.splice(3,1);   // splice는 중간 요소를 제거하는데 사용하나 다양하게 활용 가능 변수명.splice(index, 지우려는 갯수);
console.log(del2);

const del3 = [1,2,3,4,5];
del3.splice(2,2);   // 두번째 인덱스부터 2개의 값을 지우겠다
console.log(del3);

const del4 = [1,2,3,4,5];
del4.splice(2); // 두번째 인덱스(포함)부터 모두 삭제
console.log(del4);

// splice로 값을 제거만 하는 것이 아니라 제거한 자리에 다른 값을 넣을 수도 있습니다. 세 번째 자리부터 바꿀 값을 넣어주면 됨

const del5 = [1,2,3,4,5];
del5.splice(1,3,6,7);   // 1번 index 부터 3번 index 까지 4,5 번으로 수정하는 것도 가능 
console.log(del5);

// 배열에서 요소찾기

const search = ["가", "나", "다", "라", "마"];
const result = search.includes("나");   // search 배열에 "나" 값이 포함이 되어있는지 안되어있는지 불 값으로 확인하는 메서드인 "includes"
const result1 = search.includes("카");
console.log(result);    // "나"
console.log(result1);   // "카"










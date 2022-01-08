/** @format */

// 객체는 자료형의 일종으로 다양한 값을 모아 둔 또 다른 값입니다. 객체의 종류는 배열(array), 함수(function), 배열이나 함수가 아닌 객체로 나눌 수 있습니다.

// 배열 (Array)

const fruits = ['사과', '오렌지', '배', '딸기'];
console.log(fruits); // [ '사과', '오렌지', '배', '딸기' ]

// 배열 안에 있는 값은 모두 문자열이지만, 값의 자료형이 모두 같지 않아도 됩니다. 또한 배열 안에 다른 배열이나 변수를 넣을 수 있습니다.

const arrayOfarray = [
  [1, 2, 3], // 배열 안에 있는 배열은 이차열배열 이라 부름
  [4, 5],
];

console.log(arrayOfarray[0]); // [ 1, 2, 3 ]

const a = 10;
const b = 20;
const variableArray = [a, b, 30];
console.log(variableArray); // [ 10, 20, 30 ]

// 배열의 요소 개수 구하기 : everything 배열의 요소 개수를 구해봅시다.
const everything = ['사과', 1, undefined, true, '배열', null, ''];
console.log(everything.length); // 7 (빈 값도 유효함)

const arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 3]); // 3

// 배열에 요소 추가하기 : 배열을 만들고 나면 중간에 배열을 수정할 수 있습니다.
const target = ['a', 'b', 'c', 'd', 'e'];
target[5] = 'f';
console.log(target); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
target[target.length] = 'g';
console.log(target); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

// 배열의 맨 앞에 값을 추가하려면...
const targets = ['가', '나', '다'];
targets.unshift('a');
console.log(targets); // [ 'a', '가', '나', '다' ]
targets.push('라');
console.log(targets); // [ 'a', '가', '나', '다', '라' ]
// const 인데 수정 가능한 이유는 const에 객체(배열, 함수, 객체 리터럴)가 대입되면 객체 내부의 속성이나 배열의 요소는 수정할 수 있습니다.

// 배열의 요소 수정하기
const target1 = ['가', '나', '다'];
target1[2] = '라';
console.log(target1); // [ '가', '나', '라' ]

// 배열의 마지막 요소 제거하기
const target2 = ['가', '나', '다', '라', '마'];
target2.pop();
console.log(target2); // [ '가', '나', '다', '라' ]

// 배열의 첫 번째 요소를 제거하기
const target3 = ['가', '나', '다', '라', '마'];
target3.shift();
console.log(target3); // [ '나', '다', '라', '마' ]

// 배열의 중간 요소를 제거하기
const target4 = ['가', '나', '다', '라', '마'];
target4.splice(1, 1); // splice(index, deleteNum)
console.log(target4); // [ '가', '다', '라', '마' ]
target4.splice(2, 2);
console.log(target4); // [ '가', '다' ]
target4.splice(0); // 0번 인덱스부터 전부 지우기
console.log(target4); // [];
const target5 = ['가', '나', '다', '라', '마'];
target5.splice(1, 3, '멍', '멍', '이');
console.log(target5); // [ '가', '멍', '멍', '이', '마' ]

// 배열에서 요소 찾기
const target6 = ['라', '나', '다', '라', '마'];
const result = target6.includes('다');
const result1 = target6.includes('멍');
console.log(result); // true
console.log(result1); // false
const result2 = target6.indexOf('다'); // 배열 앞쪽에서 찾아서 들어옴
const result3 = target6.lastIndexOf('라'); // 배열 뒤쪽에서부터 찾아서 들어옴
const result4 = target6.indexOf('가'); // 존재하지 않으므로 -1
console.log(result2); // 2
console.log(result3); // 3
console.log(result4); // -1

const arr1 = ['가', '라', '다', '라', '마', '라'];
console.log(arr1.indexOf('라')); // 1
for (i = 0; i < arr1.length; i++) {
  arr1.splice(arr1.indexOf('라'), 1);
  // let indexNum = arr1.indexOf('라');
  // arr1.splice(indexNum, 1);
  // console.log(arr1);
}
console.log(arr1);

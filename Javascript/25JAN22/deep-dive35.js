/** @format */

// Array.prototype.forEach : 앞에서 살펴보았듯이 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다.

const numbers = [1, 2, 3];
const pows = [];

// for 문으로 배열 순회
for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}
console.log(pows); // [ 1, 4, 9 ]

// forEach 메서드는 for 문을 대체할 수 있는 고차 함수다. forEach 메서드는 자신의 내부에서 반복문을 실행한다. 즉 forEach 메서드는 반복문을 추상화한 고차 함수로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출한다.

const number = [1, 2, 3];
const pow = [];

// forEach 메서드는 number 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다
number.forEach((item) => pow.push(item ** 2));
console.log(pow); // [ 1, 4, 9 ]

// 위 예제의 경우 forEach 메서드는 numbers 배열의 모든 요소를 순회하며 콜백 함수를 반복 호출한다.numbers 배열의 요소가 3개 이므로 콜백 함수도 3번 호출된다. 이때 콜백 함수를 호출하는 forEach 메서드는 콜백 함수에 인수를 전달할 수 있다.

// forEach 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, arr) => {
  console.log(
    `요소값: ${item}, 인덱스 : ${index}, this: ${JSON.stringify(arr)}`
  );
});
// 요소값: 1, 인덱스 : 0, this: [1,2,3]
// 요소값: 2, 인덱스 : 1, this: [1,2,3]
// 요소값: 3, 인덱스 : 2, this: [1,2,3]

// forEach 메서드는 원본 배열을 변경하지는 않는다. 다만 콜백함수로 바꿀수는 있다.
const numberss = [1, 2, 3];

numberss.forEach((item, index, arr) => {
  arr[index] = item ** 2;
});
console.log(numberss); // [ 1, 4, 9 ]

// forEach의 반환값은 언제나 undefined다.
const result = [1, 2, 3].forEach(console.log);
console.log(result);

// forEach 메서드는 언제나 undefined를 반환하고, map 메서드는 콜백 함수의 반환값들로 구성된 새로운 배열을 반환하는 차이가 있다. 즉 forEach 메서드는 단순히 반복문을 대체하기 위한 고차 함수이고, map 메서드는 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차 함수다.

// * Array.prototype.map() : map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다. 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다. 이때 원본 배열은 변경되지 않는다.
const numberMap = [1, 4, 9];
const roots = numberMap.map((item) => Math.sqrt(item));
console.log(roots); // [ 1, 2, 3 ]
console.log(numberMap); // [ 1, 4, 9 ]

// forEach 메서드와 map 메서드의 공통점은 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다는 것이다. 하지만 forEach 메서드는 언제나 undefined를 반환하고, map메서드는 콜백 함수의 반환값들로 구성된 새로운 배열을 반환하는 차이가 있다. 즉 forEach 문은 단순히 반복문을 대체하기 위한 고차함수이고 map메서드는 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차함수이다.

// forEach 메서드와 마찬가지로 map 메서드의 콜백 함수는 map 메서드를 호출한 배열의 요소값과 인덱스, map 메서드를 호출한 배열 자체, 즉 this를 순차적으로 받을 수 있다.

[1, 2, 3].map((item, index, arr) => {
  console.log(
    `요소값: ${item}, 인덱스 : ${index}, this: ${JSON.stringify(arr)}`
  );
  return item;
});

// 요소값: 1, 인덱스 : 0, this: [1,2,3]
// 요소값: 2, 인덱스 : 1, this: [1,2,3]
// 요소값: 3, 인덱스 : 2, this: [1,2,3]

// * Array.prototype.filter : filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다. 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다. 이때 원본 배열은 변경하지 않는다.

const numberFilter = [1, 2, 3, 4, 5];

// filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
// 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// 다음의 경우 numbers 배열에서 홀수인 요소만 필터링한다.(1은 true로 평가된다)
const odds = numberFilter.filter((item) => item % 2);
console.log(odds); // [ 1, 3, 5 ]

// 앞서 본 forEach, map 메서드와 마찬가지로 filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다. forEach는 언제나 undefined, map은 콜백 함수의 반환값들로 구성된 새로운 배열을, filter메서드는 콜백 함수의 반환값이 true인 요소만 추출한 새로운 배열을 반환한다.
console.log(odds.length, odds[1]); // 3 , 3

// filter 메서드를 사용해 특정 요소를 제거할 경우 특정 요소가 중복되어 있다면 중복된 요소가 모두 제거된다. 특정 요소 하나만 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스를 취득한 다음 splice메서드를 사용한다.

// * Array.prototype.reduce : reduce 메서드는 자신을 호출한 배열을 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출한다. 그리고 콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결과값을 만들어 반환한다. 이때 원본 배열을 변경되지 않는다.

// 1 부터 4까지 누적을 구한다.
const sum = [1, 2, 3, 4].reduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
);
console.log(sum); // 10

// reduce 메서드의 콜백 함수는 4개의 인수를 전달받아 배열의 length 만큼 총 4회가 호출된다. 이때 콜백 함수로 전달되는 인수와 콜백 함수의 반환값은 다음과 같다.

// 평균구하기
const values = [1, 2, 3, 4, 5, 6];
const average = values.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log(average); // 3.5

// 최대값 구하기
const numMax = [1, 2, 3, 4, 5];
const max = numMax.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 5

// 하지만 최대값은 Math.max메서드가 훨씬 직관적이다
const numMathMax = [1, 2, 3, 4, 5];
const MathMax = Math.max(...numMathMax);
console.log(MathMax); // 5

// 요소의 중복 횟수 구하기
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
const count = fruits.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(count); // { banana: 1, apple: 2, orange: 2 }

// 중첩배열 평탄화 및 중복 요소 제거도 가능 (But filter메서드를 사용하는것이 더 현명함)
const valueReduce = [1, 2, 1, 2, 4, 6, 8, 9, 10, 6];
const resultReduce = valueReduce.reduce((acc, cur, i, arr) => {
  if (arr.indexOf(cur) === i) acc.push(cur);
  return acc;
}, []);

console.log(resultReduce);
// [
//   1, 2,  4, 6,
//   8, 9, 10
// ]

// 하지만 필자의 추천은 filter 메서드보다 더 간편한것은 중복되지 않는 유일한 값들의 집한인 set을 사용할 수도 있다.
const valuesSet = [1, 2, 1, 3, 5, 4, 5, 3, 6, 7];
const resultSet = [...new Set(valuesSet)];
console.log(resultSet);
// [
//   1, 2, 3, 5,
//   4, 6, 7
// ]

// * Array.prototype.some : some 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출한다. 이때 some 메서드는 콜백 함수의 반환값이 단 한번이라도 참이면 true, 모두 거짓이면 false를 반환한다. 즉 배열의 요소중에 콜백 함수를 통해 정의한 조건을 만족하는 요소가 1개 이상 존재하는지 확인하여 그 결과를 불리언 타입으로 반환한다. 단 some 메서드를 호출한 배열이 빈 배열인 경우 언제나 false를 반환하므로 주의하기 바란다.

// 배열의 요소 중 10보다 큰 요소가 1개 이상 존재하는지 확인
console.log([5, 10, 15].some((item) => item > 10)); // ture (한개라도 true가 존재하니까 true를 반환)
// 배열의 요소 중 0보다 작은 요소가 1개 이상 존재하는지 확인
console.log([5, 10, 15].some((item) => item < 0)); // false
// 배열의 요소 중 'banana'가 1개 이상 존재하는지 확인
console.log(['apple', 'banana', 'mango'].some((item) => item === 'banana')); // true
// some 메서드를 호출한 배열이 빈 배열인 경우 언제나 false를 반환한다.
console.log([].some((item) => item + 3)); // false

// * Array.prototype.every : every 메서드는 자신이 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출한다. 다만 콜백 함수의 반환값이 모두 참이면 true, 단 한번이라도 거짓이면 false를 반환 , 단 every 메서드를 호출한 배열이 빈 배열인 경우 언제나 true를 반환하므로 주의하기 바란다.

// 배열의 모든 요소가 3보다 큰지 확인
console.log([5, 10, 15].every((item) => item > 3)); // true;
// 배열의 모든 요소가 5보다 큰지 확인 ( 하나라도 false 면 false가 나옴)
console.log([5, 10, 15].every((item) => item > 6)); // false
// every 메서드를 호출한 배열이 빈 배열인 경우 언제나 true를 반환한다.
console.log([].every((item) => item > 0)); // true

// * Array.prototype.find : find 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소를 반환한다. 콜백 함수의 반환값이 true인 요소가 존재하지 않는다면 undefined를 반환한다.

const userFind = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 3, name: 'Choi' },
  { id: 4, name: 'Park' },
];

console.log(userFind.find((item) => item.id === 2)); // { id: 2, name: 'Kim' }
// filter 메서드는 콜백 함수의 호출결과가 true인 요소만 추출한 새로운 배열을 반환한다. 따라서 filter 메서드의 반환값은 언제나 배열이다. 하지만 find 메서드는 콜백 함수의 반환값이 true인 첫 번째 요소를 반환하므로 find의 결과값은 배열이 아닌 해당 요소값이다.

console.log([1, 2, 3, 4].filter((item) => item === 2)); // [2]
console.log([1, 2, 3, 4].find((item) => item === 2)); // 2

// * Array.prototype.findIndex : 이 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫번째 요소의 인덱스를 반환한다. true인 요소가 존재하지 않다면 -1를 반환

const usersfindIndex = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 3, name: 'Choi' },
  { id: 4, name: 'Park' },
];

console.log(usersfindIndex.findIndex((item) => item.name === 'Park')); // index : 3
console.log(usersfindIndex.findIndex((item) => item.id === 3)); // index : 2

function predicate(key, value) {
  return (item) => item[key] === value;
}

// id가 2인 요소의 인덱스를 구한다.
console.log(usersfindIndex.findIndex(predicate('id', 2))); // index : 1
console.log(usersfindIndex.findIndex(predicate('name', 'Choi'))); // index : 2

// * Array.prototype.flatMap : ES10에서 도입된 flatMap 메서드는 map메서드를 통해 생성된 새로운 배열을 평탄화한다. 즉 map 메서드와 flat 메서드를 순차적으로 실행하는 효과가 있다.

const arrFlat = ['hello', 'world'];

// map과 flat을 순차적으로 실행
console.log(arrFlat.map((x) => x.split('')).flat());
// [
//   'h', 'e', 'l', 'l',
//   'o', 'w', 'o', 'r',
//   'l', 'd'
// ]

// 위와 같은 효과를 나타낸다.
console.log(arrFlat.flatMap((x) => x.split('')));
// 단 flatMap 메서드는 flat 메서드처럼 인수를 전달하여 평탄화 깊이를 지정할 수는 없고 1단게만 평탄화한다. map 메서드를 통해 생성된 중첩 배열의 평탄화 깊이를 지정해야 하면 flatMap 말고 flat 메서드와 map 메서드를 각각 사용하는 것이 좋다.

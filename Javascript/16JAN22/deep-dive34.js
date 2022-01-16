/** @format */

// Array.prototype.splice : push, pop, shift, unshift 메서드는 모두 원본 배열을 직접 변경하는 메서드이며 원본 배열의 처음이나 마지막에 요소를 추가하거나 제거한다. splice 메서드는 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 splice 메서드를 사용한다. 매개변수가 3개가 있으며 원본 배열을 직접 변경

const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20,30을 제거한다
const result = arr.splice(1, 2, 20, 30);
// 제거한 요소가 반환됨
console.log(result); // [ 2, 3 ]
// splice 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [ 1, 20, 30, 4 ]

// 원본 배열의 인덱스 1부터 0개의 요소를 제거하고 그 자리에 새로운 요소 100을 삽입한다.
const result1 = arr.splice(1, 0, 100);
console.log(result1); // 삭제하는 값이 없었으니 물론 반환하는 값도 빈 배열 []
console.log(arr); // [ 1, 100, 20, 30, 4 ]

// 원본 배열의 인덱스 1부터 2개의 요소를 제거한다.
arr.splice(1, 2);
console.log(arr); // [ 1, 30, 4 ]

// splice 메서드는 두 번째 인수, 즉 제거할 요소의 개수를 생략하면 첫 번째 인수로 전달된 시작 인덱스부터 모든 요소를 제거한다.
const result2 = arr.splice(1);
console.log(result2); // [ 30, 4 ]
console.log(arr); // [ 1 ]

// 배열에서 특정 요소를 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스르 취득한 다음 splice 메서드를 사용한다.
const arrTarget = [1, 2, 3, 1, 2];
// 배열 array에서 item 요소를 제거한다. item 요소가 여러 개 존재하면 첫 번째 요소만 제거한다.
function remove(array, item) {
  // 제거할 item 요소의 인덱스를 취득한다.
  const index = array.indexOf(item);

  // 제거할 item 요소가 있다면 제거한다.
  if (index !== -1) arrTarget.splice(index, 1);

  return array;
}

console.log(remove(arrTarget, 1)); // [ 2, 3, 1, 2 ]
console.log(remove(arrTarget, 1)); // [ 2, 3, 2 ]
console.log(remove(arrTarget, 4)); // [ 2, 3, 2 ]

// filter 메서드를 사용하여 특정 요소를 제거할 수도 있지만 이는 중복된 함수를 모두 지워버리는 효과가 나옴
const arrFilter = [1, 2, 3, 1, 2];

// 배열 array에서 모든 item 요소를 제거한다.
function deleteAll(array, item) {
  return array.filter((v) => v !== item);
}

console.log(deleteAll(arrFilter, 2)); // [ 1, 3, 1 ]
console.log(deleteAll(arrFilter, 1)); // [ 2, 3, 2 ]
console.log(arrFilter); // [ 1, 2, 3, 1, 2 ]
// splice와는 반대로 기존 배열에는 아무런 영향을 주지 않는다.

// * Array.prototype.slice : slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다. 원본 배열은 변경되지 않는다. 이름이 유사한 splice가 있으므로 주의

// start : 복사를 시작할 인덱스다. 음수일 경우 배열의 끝에서의 인덱스를 나타냄
// end : 복사를 종료할 인덱스다 이 인덱스에 해당하는 요소는 복사되지 않는다. end는 생략 가능하며 생략 시 기본값은 length 프로퍼티 값이다.

const arr1 = [1, 2, 3];

// arr[0]부터 arr[1]까지 복사하여 반환한다.
let arrSlice = arr1.slice(0, 1);

console.log(arr1); // [ 1, 2, 3 ]
console.log(arrSlice); // [ 1 ]

// arr[1]부터 이후의 모든 요소를 복사하여 반환한다.
arrSlice = arr1.slice(1);
console.log(arrSlice); // [ 2, 3 ]

// 첫번째 인수가 음수인 경우 배열의 끝에서부터 요소를 복사하여 배열로 복사
arrSlice = arr1.slice(-1);
console.log(arrSlice); // [ 3 ]

// slice 메서드의 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환한다.
arrSlice = arr1.slice();
console.log(arrSlice); // [1, 2, 3];
console.log(arrSlice === arr1); // false : 얕은 복사를 통해 생성된다
console.log(arrSlice[0] === arr1[0]); // true : 배열 요소의 참조값은 같다

// * Array.prototype.join : join 메서드는 원본 배열의 모든 요소를 문자열로 반환한 후, 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열을 반환한다. 구분자는 생략 가능하며 기본 구분자는 콤마다

const arr2 = [1, 2, 3, 4, 5];
// 기본 구분자는 콤마다
// 원본 배열 arr2의 모든 요소를 문자열로 반환한 후 기본 구분자로 연결한 문자열을 반환한다
console.log(arr2.join());
// 원본 배열 arr2의 모든 요소를 문자열로 반환한 후, 빈 문자열로 연결한 문자열을 반환한다.
console.log(arr2.join('')); // '12345'
console.log(arr2.join(':')); // 1:2:3:4:5

// * Array.prototype.reverse : reverse 메서드는 원본 배열의 순서를 반대로 뒤집는다. 이때 원본 배열이 변경된다. 반환값은 변경된 배열이다.
const arr3 = [1, 2, 3, 4, 5];
const arrReverse = arr3.reverse();

// reerse 메서드는 원본 배열을 직접 변경한다.
console.log(arr3); // [ 5, 4, 3, 2, 1 ]
console.log(arrReverse); // [ 5, 4, 3, 2, 1 ]

// * Array.prototype.fill : ES6에서 도입된 fill 메서드는 인수로 전달받은 값을 배열의 첨부터 끝까지 요소로 채운다. 이때 원본 배열이 변경된다.
let arr4 = [1, 2, 3, 4];
// 인수로 전달받은 값 0 을 배열의 처음부터 끝까지 요소로 채운다.
arr4.fill(0);
console.log(arr4); // [ 0, 0, 0, 0 ]

arr4 = [1, 2, 3, 4];
// 두 번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다.
arr4.fill(0, 1);
console.log(arr4); // [ 1, 0, 0, 0 ]

arr4 = [1, 2, 3, 4];
// 인수로 전달받은 값 0을 배열의 인덱스 1부터 3까지(3은 미포함) 채운다.
arr4.fill(0, 1, 3);
console.log(arr4); // [ 1, 0, 0, 4 ]

const arr5 = new Array(3);
console.log(arr5); // [ <3 empty items> ]
arrFill = arr5.fill(1);
console.log(arr5); // [ 1, 1, 1 ]  fill 메서드는 원본 배열을 직접 변경한다
console.log(arrFill); // [ 1, 1, 1 ] fill 메서드는 변경된 원본 배열을 반환한다
console.log(arr5 === arrFill); // true

// fill 메서드로 요소를 채울 경우 모든 요소를 하나의 값만으로 채울 수 밖에 없다는 단점이 있다. 하지만 Array.from 메서드를 사용하면 두 번째 인수로 전달한 콜백 함수를 통해 요소값을 만들면서 배열을 채울 수 있다.
const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
console.log(sequences(5)); // [ 0, 1, 2, 3, 4 ]

// Array.from 은 잘 모르겠음 ...

// * Array.prototype.includes : ES7에서 도입된 includes 메서드는 배열 내에 특정요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다. 첫번째 인수로 검색할 대상을 지정한다.
const arr6 = [1, 2, 3];
// 배열에 요소 2가 포함되어 있는지 확인
console.log(arr6.includes(2)); // true
console.log(arr6.includes(4)); // false

// 배열에 요소 1이 포함되어 있는지 인덱스 1부터 확인한다.
console.log(arr6.includes(1, 1)); // false
// 배열에 요소 3이 포함되어 있는지 인덱스 2(arr.length - 1)부터 확인한다.
console.log(arr6.includes(3, -1)); // true

// 배열에서 인수로 전달된 요소를 검색하여 인덱스 반환하는 indexOf 메서드를 사용하여도 배열 내에 특징 요소가 포함되어 있는지 확인할 수 있다. 하지만 indexOf 메서드를 사용하면 반환값이 -1인지 확인해 보아야 하고 배열에 NaN이 포함되어 있는지 확인할 수 없다는 문제가 있다.

console.log([NaN].indexOf(NaN)); // -1
console.log([NaN].includes(NaN)); // true

// * Array.prototype.flat : ES10(ECMAScript 2019)에서 도입된 flat 메서드는 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화한다.
console.log([1, [2, 3, 4, 5]].flat()); // [ 1, 2, 3, 4, 5 ]

// 배열 고차 함수 : 고차함수는 함수를 인수로 전달받거나 함수를 반환하는 함수를 말한다. 자바스크립트의 함수는 일급 객체이므로 함수를 값처럼 인수로 전달할 수 있으며 반환할 수도 있다. 고차 함수는 외부 상태의 변경이나 가변데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 두고 있다. 함수형 프로그래밍은 순수 함수와 보조 함수 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다. 조건문이나 반복문은 로직의 흐름을 이해하기 어렵게 하여 가독성을 해치고, 변수는 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있기 때문이다. 자바스크립트는 고차 함수를 다수 지원하며 특히 배열은 매우 유용한 고차함수를 제공한다. 활용도가 매우 높으므로 사용법을 잘 이해해야 한다.

// * Array.prototype.sort : sort 메서드는 배열의 요소를 정렬한다. 원본 배열을 직접 변경하여 정렬된 배열을 반환한다. default는 오름차순이다.

const fruits = ['Banana', 'Orange', 'Apple'];
fruits.sort();
// 원본 배열 변경
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]
// reverse 메서드로 변경
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

// 한글도 가능
const fruit = ['사과', '바나나', '오렌지'];
fruit.sort();
// 원본 배열 변경
console.log(fruit); // [ '바나나', '사과', '오렌지' ]

// 문자열 타입의 배열의 정렬은 아무런 문제가 없지만 숫자 요소로 이루어진 배열을 정렬할 때는 주의가 필요하다

const points = [40, 100, 1, 7, 25, 82];
points.sort();
console.log(points); // [ 1, 100, 25, 40, 7, 82 ] ??

// sort 메서드의 기본정렬 순서는 유니코드 코드 포인트의 순서를 따른다. 배열의 요소가 숫자 타입이라 할지라도 배열의 요소를 일시적으로 문자열로 변한환 후 유니코드 코드 포인트의 순서를 기준으로 정렬한다. 따라서 숫자 요소를 정렬할 때는 sort 메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야한다. 비교 함수는 양수나 음수 또는 0을 반환해야 한다. 비교 함수의 반환값이 0보다 작으면 비교 함수의 첫 번째 인수를 우선하여 정렬하고, 0이면 정렬하지 않으며, 0보다 크면 두 번째 인수를 우선하여 정렬한다.

// 숫자 배열의 오름차순 정렬. 비교 함수 반환값이 0보다 작으면 a를 우선하여 정렬한다.
points.sort((a, b) => a - b); // 오름차순
console.log(points); // [ 1, 7, 25, 40, 82, 100 ]
// 숫자 배열에서 최소, 최대값  흭득
console.log(points[0], points[points.length - 1]); // 1 100
// 숫자 배열의 내림차순 정렬. 비교 함수 반환값이 0보다 작으면 b를 우선하여 정렬한다.
points.sort((a, b) => b - a);
console.log(points); // [ 100, 82, 40, 25, 7, 1 ]
// 숫자 배열에서 최소/최대값 취득
console.log(points[0], points[points.length - 1]); // 100 1

// 객체를 요소로 갖는 배열을 저렬하는 예제는 다음과 같다
const todos = [
  { id: 4, content: 'JavaScript' },
  { id: 3, content: 'HTML' },
  { id: 6, content: 'CSS' },
];

// 비교함수. 매개변수 key는 프로퍼티이다.
function compare(key) {
  // 프로퍼티 값이 문자열인 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
  // 비교 함수는 양수/음수/0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할 수 있다.
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

// id를 기준으로 오름차순 정렬
todos.sort(compare('id'));
console.log(todos);

// content를 기준으로 오름차순 정렬
todos.sort(compare('content'));
console.log(todos);

/** @format */

// 27장 : 배열(Array)

// 배열은 여러 개의 값을 순차적으로 나열한 자료구조다. 배열은 사용 빈도가 매우 높은 가장 기본적인 자료구조다. 자바스크립트는 배열을 다루기 위한 유용한 메서드를 다수 제공한다. 배열은 사용 빈도가 높으므로 배열 메서드를 능숙하게 다를 수 있다면 코딩에 매우 도움이 된다. 간단한 배열을 만들어보자. 다음 배열은 배열 리터럴을 통해 생성한 것이다.

const arr = ['apple', 'banana', 'orange'];

// 배열이 가지고 있는 값을 '요소 : element' 라고 부른다. 자바스크립트의 모든 값은 배열의 요소가 될 수 있다. 즉 원시값은 물론 객체, 함수, 배열 등 자바스크립트에서 값으로 인정하는 모든 것은 배열의 요소가 될 수 있다. 배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상의 정수인 '인덱스 : index'를 갖는다. 인덱스는 배열의 요소에 접근할 때 사용한다.

console.log(arr.length); // 3

// 배열의 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// apple
// banana
// orange

// 배열은 배열 리터럴, Array 생성자 함수, Array.of, Array.from 메서드로 생성할 수 있다.

console.log(typeof arr); // object
console.log(arr.constructor === Array); // true

// 신기하게 배열은 객체에 속하지만 둘에는 명확한 차이가 있다. 바로 값의 순서와 length 프로퍼티 유무이다. 물론 객체는 key와 value가 있다면 배열은 인덱스, 요소가 있다.

// 선형 검색을 통해 배열(Array)에 특정 요소(target)가 존재하는지 확인한다.
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1을 반환한다.
function arrSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return `index : ${i}`;
  }
  return -1;
}

console.log(arrSearch([1, 2, 3, 4, 5], 1));
console.log(arrSearch([3, 6, 9], 9));

// 자바스크립트 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체이지 일반적 의미의 배열이 아니다. 자바스크립트 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 가지며, length 프로퍼티를 갖는 특수한 객체다. 자바스크립트 배열의 요소는 사실 프로퍼티 값이다. 자바스크립트에서 사용할 수 있는 모든 값은 객체의 프로퍼티 값이 될 수 있으므로 어떤 타입의 값이라도 배열의 요소가 될 수 있다.

const arr1 = ['string', 10, true, null, undefined, NaN, [], {}, function () {}];

// 일반적인 배열과 자바스크립트의 배열의 장단점

// 일반적인 배열 : 일반적인 배열은 인덱스로 요소에 빠르게 접근할 수 있다. 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않다.
// 자바스크립트 배열 : 해시 테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우 일반적인 배열보다 성능적인 면에서 느릴 수 밖에 없는 구조적인 단점이 있다. 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다. 다만 모던 자바스크립트로 들어와서 최적화를 통해 객체보다 2배 빠른 배열 속도를 구현했다.

// 배열의 길이 : length
// 현재 length 프로퍼티 값보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다.

const arr2 = [1, 2, 3, 4, 5];
arr2.length = 3;
console.log(arr2); // [ 1, 2, 3 ]

// 반대로 더 큰 length를 넣으면 성공적으로 변경되기는 하지만 empty 값이 들어가짐, 이는 실제 배열에 아무런 변함이 없다.
const arr3 = [1];
arr3.length = 3;
console.log(arr3); // [ 1, <2 empty items> ]

// 뿐만 아니라 자바스크립트는 배열의 요소가 연속적으로 위치하지 않고 일부가 비어 있는 희소 배열도 문법적으로 허용한다.
const sparse = [, 2, , 4];
console.log(sparse.length); // 4
console.log(sparse); // [ <1 empty item>, 2, <1 empty item>, 4 ]

// 일반적인 배열의 length는 배열 요소의 개수, 즉 배열의 길이와 언제나 일치한다. 하지만 희소배열은 length와 배열 요소의 개수가 일치하지 않는다. 희소 배열의 length는 희소 배열의 실제 요소 개수보다 언제나 크다. 다만 배열을 생성할 경우에는 희소 배열을 생성하지 않도록 주의하자. 배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다.

// 배열 생성

// 1. 배열 리터럴 : 가장 일반적이고 간편한 배열 생성 방식
const arr4 = [1, 2, 3];

// 2. Array 생성자 함수 : Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수도 있다. Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작하므로 주의가 필요하다.
const arr5 = new Array(5);
console.log(arr5);
console.log(arr5.length); // 5 (이때 생성된 배열은 희소 배열이다. length는 0이 아니지만 실제로 배열의 요소는 존재하지 않는다.)

const arr6 = new Array(); // 전달된 인수가 없는 경우 빈 배열을 생성한다 / 배열 리터럴 []과 같다

// Array 생성자 함수는 new 연산자와 함께 호출하지 않더라도, 즉 일반 함수로서 호출해도 배열을 생성하는 생성자 함수로 동작한다. 이는 Array 생성자 함수 내부에서 new.target 을 확인하기 때문이다

const arr7 = Array(1, 2, 3);
console.log(arr7); // [ 1, 2, 3 ]

// 3. Array.of : ES6에서 도입된 Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성한다. Array.of는 Array 생성자 함수와 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.

console.log(Array.of(1)); // [ 1 ]
console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]
console.log(Array.of('string')); // ['string']

// 4. Array.from : ES6에서 도입된 Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.

// 유사배열 객체를 변환하여 배열을 생성한다.
console.log(Array.from({ length: 2, 0: 'a', 1: 'b' })); // [ 'a', 'b' ]
// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
console.log(Array.from('hello')); // [ 'h', 'e', 'l', 'l', 'o' ]

console.log(Array.from({ length: 7 }, (v, i) => i - 3)); // [-3, -2, -1, 0, 1, 2, 3];
console.log(Array.from({ length: 4 }, (v, i) => i * 3)); // [ 0, 3, 6, 9];

// 유사배열 객체란 ?
const arrayLike = {
  0: 'apple',
  1: 'banana',
  2: 'pear',
  length: 3,
};

for (i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}

// 배열 요소의 추가와 갱신 : 객체에 프로퍼티를 동적으로 추가할 수 있는 것처럼 배열에도 요소를 동적으로 추가할 수 있다.
const arr8 = [];
arr8[0] = 'Add';
console.log(arr8); // [ 'Add' ]
// 이렇게 수정도 가능
arr8[0] = 'Plus';
console.log(arr8); // [ 'Plus' ]

// 인덱스는 요소의 위치를 나타내므로 반드시 0 이상의 정수(또는 정수 형태의 문자열)를 사용해야한다. 만약 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다.

const arr9 = [];

// 배열 요소의 추가
arr9[0] = 1;
arr9['1'] = 2;

// 프로퍼티의 추가
arr9['foo'] = 3;
arr9.bar = 4;
arr9[1.1] = 5;
arr9[-1] = 6;

console.log(arr9); // [ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]

// 배열 요소의 삭제 : 배열은 사실 객체이기 때문에 배열의 특정 요소를 삭제하기 위해 delete 연산자를 사용 가능

const arr10 = [1, 2, 3];
// 배열 요소의 삭제
delete arr10[1];
console.log(arr10); // [ 1, <1 empty item>, 3 ]
console.log(arr10.length); // 3 (delete를 하여도 length에는 영향을 끼치지 않는다)
// delete를 사용하여 삭제하면 희소배열을 만들기 때문에 delete보다는 Array.prototype.splice 메서드를 사용해야함

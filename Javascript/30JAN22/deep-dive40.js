/** @format */

// 7 번째 데이터 타입 Symbol
// 자바스크립트는 6개의 타입인 문자열, 숫자, null, undefined, 객체, 불리언 가 있었다. 심벌은 ES6에서 도입된 7번째 데이터 타입으로 변경 불가능한 원시 타입의 값이다. 심벌 값은 다른 값과 중복되지 않은 유일무이한 값이다. 따라서 충돌 위험이 없는 유일한 프로퍼티 키를 만들기 위해 사용된다.

// 심볼은 다른 생성자 함수와 달리 new를 붙이지 않는다.
const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

// 심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');
console.log(mySymbol1 === mySymbol2); // false

// Symbol.for / Symbol.keyFor 메서드 : 인수로 전달받은 문자열을 키로 사용하여 키와 심벌 값의 쌍들이 저장되어 있는 전역 심벌 레지스토리에서 해당 키와 일치하는 심벌 값을 검색한다.
const s1 = Symbol.for('mySymbol');
const s2 = Symbol.for('mySymbol');
console.log(s1 === s2); // true

// Symvol.keyFor 메서드를 사용하면 전역 심벌 레지스토리에 저장된 심벌 값의 키를 추출할 수 있다.
const s3 = Symbol.for('mySymbol');
// 전역 심벌 레스토리에 저장된 심벌 값의 키를 추출
console.log(Symbol.keyFor(s3)); // mySymbol

// Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스토리에 등록되어 관리되지 않는다.
const s4 = Symbol('foo');
console.log(Symbol.keyFor(s4));

// 심벌과 프로퍼티 키 : 객체의 프로퍼티 키는 빈 문자열을 포함하는 모든 문자열 또는 심벌 값으로 만들 수 있으며, 동적으로 생성 가능. 심벌 값을 프로퍼티 키로 사용하려면 프로퍼티 키로 사용할 심벌 값에 대괄호를 사용해야한다. 프로퍼티 접근할 때도 대괄호를 사용
const obj = {
  [Symbol.for('mySymbol')]: 1,
};
console.log(obj[Symbol.for('mySymbol')]); // 1

for (const key in obj) {
  console.log(key);
}
console.log(Object.keys(obj)); // []

// 이터러블 : ES6에서 도입된 이터레이션 프로토콜은 순회 가능한 데이터 컬렉션(자료구조)을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙이다.

// ES6 이전의 순회 가능한 데이터 컬렉션, 즉 배열, 문자열, 유사배열 객체. DOM 컬렉션 등은 통일된 규약없이 각자 나름의 구조를 가지고 for문, for..in문, forEach 메서드 등 다양한 방법으로 순회할 수 있었다.
// ES6 이후에서는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for...of 이터레이션 프로토콜에는 이터러블 프로토콜과 이터레이터 프로토콜이 있다.

// 이터레이션 프로토콜에는 이터러블 프로토콜과 이터레이터 프로토콜이 있음

// 이터러블 : 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다. 즉, 이터러블은 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체를 말한다. 이터러블을 확인하는 함수는 다음과 같이 구현가능
const isIterable = (v) =>
  v !== null && typeof v[Symbol.iterator] === 'function';

// 배열, 문자열, Map, Set 등은 이터러블이다.
console.log(isIterable([])); // true
console.log(isIterable('')); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true

// 이터레이터 : 이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다. 이터레이터 메서드가 반환한 이터레이터는 next 메서드를 갖는다.

// 배열은 이터러블 프로토콜을 준수한 이터러블
const arr = [1, 2, 3];
// Symbol.iterator 메서드는 이터레이터를 반환함
const iterator = arr[Symbol.iterator]();
// Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다
console.log('next' in iterator); // true

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// * for...of 문 : 이터러블을 순회하면서 이터러블의 요소를 변수에 할당한다.

// for (변수 선언문 of 이터러블) {...}
// for (변수 선언문 in 객체) {...} for...of와 비슷

for (const item of [1, 2, 3]) {
  console.log(item); // 1, 2, 3
}

// 이터러블과 유사 배열 객체 : 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다. 유사 배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수 있고, 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로 가지므로 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.

const arrLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

for (let i = 0; i < arrLike.length; i++) {
  console.log(arrLike[i]); // 1 2 3
}

const arr1 = Array.from(arrLike);
console.log(arr1); // [1,2,3]

// 스프레드 문법 : ES6에서 도입된 스프레드 문법(전개문법)...은 하나로 뭉쳐있는 여러 값들을 집합을 펼쳐서(전개,분산하여 spread)개별적인 값들의 목록으로 만든다. 스프레드 문법을 사용할 수 있는 대상은 for...of 문으로 순회할 수 있는 이터러블에 한정됨

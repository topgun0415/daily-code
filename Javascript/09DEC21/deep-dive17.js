/** @format */

// 프로퍼티 존재 확인 : in 연산자 (in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다)

const human1 = {
  name: 'Lee',
  address: 'Seoul',
};

console.log(`name in human1 = ${'name' in human1}`); // true
console.log('address' in human1); // true
console.log('age' in human1); // false

// in 연산자는 확인 대상 객체의 프로퍼티뿐만 아니라 확인 대상 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.

console.log('toString' in human1); // human1의 프로토타입에서 체인에 따라서 Object.prototype까지 참조했기 떄문이다.

const human2 = {
  name: 'kim',
};

console.log(Reflect.has(human2, 'name')); // true
console.log(Reflect.has(human2, 'toString')); // true

console.log(human2.hasOwnProperty('name')); // true
console.log(human2.hasOwnProperty('toString')); // false

// hasOwnProperty 메서드는 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true 이고 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.
console.log(human2.hasOwnProperty('toString')); // false

// for ... in 문
const human3 = {
  name: 'Lee',
  age: '25',
};

for (const key in human3) {
  console.log(key + ': ' + human3[key]);
}
// name: Lee
// age: 25

const human4 = {
  name: 'Son',
  age: 30,
  job: 'football player',
};

for (const info in human4) {
  // 영어 말 그대로 변수선언문 안에 human4의 객체를 넣는거임
  console.log(info + ': ' + human4[info]);
}
// name: Son
// age: 30
// job: football player

const arr = [1, 2, 3];
arr.x = 10;
// 배열도 객체이므로 프로퍼티를 가질 수 있다.

for (const i in arr) {
  console.log(arr[i]);
}
// 1, 2, 3, 10

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 1, 2, 3

arr.forEach((v) => console.log(v));
// 1, 2, 3 : Array.prototype.forEach는 요소가 아닌 프로퍼티는 제외한다.
console.log(arr); // [ 1, 2, 3, x: 10 ]

// for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다
for (const value of arr) {
  console.log(value);
} // 1, 2, 3

// for...in은 상속받은 프로퍼티까지 나타내기때문에 hasOwnProperty로 일일이 확인해주는 작업이 필요하다 그래서 다른 방법을 추천한다.

const person = {
  name: 'Lee',
  address: 'Seoul',
  __proto__: { age: 10 },
};

console.log(Object.keys(person)); // [ 'name', 'address' ] 객체의 key만 배열로 만들어서 나열
console.log(Object.values(person)); // [ 'Lee', 'Seoul' ] 객체의 value만 배열로 만들어서 나열
console.log(Object.entries(person)); // [ [ 'name', 'Lee' ], [ 'address', 'Seoul' ] ] 객체의 key, value를 각각의 배열로 만들어서 나타냄

/** @format */

// Set : Set 객체는 중복되지 않는 유일한 값들의 집합이다. Set 객체는 배열과 유사하지만 다음과 같은 차이가 있다. 동일 값 중복 X / 요소 순서 의미 X / 인덱스로 요소 접근 X

// Set 객체의 생성
const set = new Set();
console.log(set); // Set(0) {}

// Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성한다. 이때 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다.
const set1 = new Set([1, 2, 3, 3]);
console.log(set1); // Set(3) { 1, 2, 3 }
const set2 = new Set('Hello');
console.log(set2); // Set(4) { 'H', 'e', 'l', 'o' }

// 요소 개수 확인 : Set 객체의 요소 개수를 확인할 때는 Set.prototype.size 프로퍼티를 사용한다.
const { size } = new Set([1, 2, 3, 3]);
console.log(size); // 3
const set3 = new Set([1, 2, 3, 3]);
console.log(set3.size); // 3

// 요소 추가 : Set 객체에 요소를 추가할 때는 Set.prototype.add 메서드를 사용한다.
const set4 = new Set();
console.log(set4); // Set(0) {}
set4.add(1);
console.log(set4); // Set(1) { 1 }
set4.add(1).add(2).add(3);
console.log(set4); // Set(3) { 1, 2, 3 }

// Set 객체는 객체나 배열과 같이 자바스크립트의 모든 값을 요소로 저장할 수 있다.
const set5 = new Set();

set5
  .add(1)
  .add('a')
  .add(true)
  .add(undefined)
  .add(null)
  .add({})
  .add([])
  .add(() => {});

console.log(set5);

// 요소 존재 여부 확인 : Set 객체에 특정 요소가 존재하는지 확인하려면 Set.prototype.has 메서드를 사용한다. has 메서드는 특정 요소의 존재 여부를 나타내는 불리언 값을 반환한다.
const set6 = new Set([1, 2, 3]);
console.log(set6.has(1)); // true
console.log(set6.has(4)); // false

// 요소 삭제 : Set.prototype.delete 메서드를 사용함. 삭제 성공 여부는 불리언 값을 반환함.
const set7 = new Set([1, 2, 3]);
console.log(set7.delete(3)); // true
console.log(set7.delete(4)); // false

// 요소 일괄 삭제 : Set.prototype.clear 메서드를 사용함.
const set8 = new Set([1, 2, 3]);
console.log(set8.clear()); // undefined
console.log(set8); // Set(0) {}

// 요소 순회 : Set.prototype.forEach 메서드 사용
const setForEach = new Set([1, 2, 3]);

set.forEach((v, v2, set) => console.log(v, v2, set));
// Set 객체는 이터러블이다. 따라서 for...of문으로 순회할수 있으며, 스프레드 문법과 배열 디스트럭처링의 대상이 될 수도 있다.

const set9 = new Set([1, 2, 3]);
const [a, ...arr] = set9;
console.log(a, arr);

// Map
const map = new Map();
console.log(map); // Map(0) {}

// Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성한다. 이때 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 한다.
const map1 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
console.log(map1); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// Map 생성자 함수의 인수로 전달한 이터러블에 중복된 키를 갖는 요소가 존재하면 값이 덮어써진다.
const map2 = new Map([
  ['key1', 'value1'],
  ['key1', 'value2'],
]);
console.log(map2); // Map(1) { 'key1' => 'value2' }

// 요소 개수 확인 : Map 객체의 요소 개수를 확인할 때는 Map.prototype.size 프로퍼티를 사용함 (Set와 마찬가지)
// const { size } = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
// ]);

// console.log(size);
console.log(map1.size); // 2

// 요소 추가 : Map.prototype.set 메서드를 사용한다
const map3 = new Map();
console.log(map3); // Map(0) {}

map3.set('key1', 'value1');
map3.set('key2', 'value2');
console.log(map3); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// Map 객체에도 Set와 마찬가지로 중복된 키를 갖는 요소를 추가하면 값이 덮어써진다.

// 객체는 문자열 또는 심벌 값만 사용할 수 있다. 하지만 Map 객체는 키 타입에 제한이 없다. 따라서 객체를 포함한 모든 값을 키로 사용할 수 있다. Map 객체와 일반 객체의 가장 두드러지는 점이다.

const map4 = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

// 객체도 키로 사용 가능
map4.set(lee, 'developer');
map4.set(kim, 'pilot');
console.log(map4);

// 요소 취득 : Map 객체에서 특정 요소를 취득하려면 Map.prototype.get 메서드를 사용한다. get 메서드의 인수로 키를 전달하면 Map 객체에서 인수로 전달한 키를 갖는 값을 반환 없으면 undefined
console.log(map4.get(lee)); // developer
console.log(map4.get(kim)); // pilot
console.log(map4.get('pilot')); // undefined

// 요소 존재 여부 확인 : Map.prototype.has 메서드를 사용하여 존재여부를 나타내는 불리언값으로 반환한다.
const map5 = new Map([
  [lee, 'developer'],
  [kim, 'pilot'],
]);

// key 값만 존재 여부 확인 가능
console.log(map5.has(lee)); // true
console.log(map5.has('pilot')); // false

// 요소 삭제 : Map.prototype.delete 메서드를 사용하여 불리언 값 반환
const map6 = new Map([
  [lee, 'developer'],
  [kim, 'pilot'],
]);

map6.delete(lee);
console.log(map6); // Map(1) { { name: 'Kim' } => 'pilot' }
// 요소 일괄 삭제 : Map.prototype.clear
map6.clear();
console.log(map6); // Map(0) {}

// 요소 순회 : Map 객체의 요소를 순회하려면 Map.prototype.forEach를 사용해야한다. Map.forEach(value, key, self)
const Lee = { name: 'Lee' };
const Kim = { name: 'Kim' };

const map7 = new Map([
  [Lee, 'Developer'],
  [Kim, 'Designer'],
]);

map7.forEach((v, k, map) => console.log(v, k, map));
// Developer { name: 'Lee' } Map(2) {
//   { name: 'Lee' } => 'Developer',
//   { name: 'Kim' } => 'Designer'
// }
// Designer { name: 'Kim' } Map(2) {
//   { name: 'Lee' } => 'Developer',
//   { name: 'Kim' } => 'Designer'
// }

// Map 객체는 이터러블이다. 따라서 for ...of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상이 될 수도 있다.

const [a1, b1] = map7;
console.log(a1, b1); // [ { name: 'Lee' }, 'Developer' ] [ { name: 'Kim' }, 'Designer' ]

// Map 객체는 이터러블이면서 동시에 이터레이터 객체를 반환하는 메서드를 제공한다.
// Map.prototype.keys
for (const key of map7.keys()) {
  console.log(key);
}
// { name: 'Lee' }
// { name: 'Kim' }

// Map.prototype.values
for (const value of map7.values()) {
  console.log(value);
}
// Developer
// Designer

// Map.prototype.entries
for (const entries of map7.entries()) {
  console.log(entries);
}
// [ { name: 'Lee' }, 'Developer' ]
// [ { name: 'Kim' }, 'Designer' ]

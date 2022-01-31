/** @format */

// 스프레드 문법 : ES6에서 도입된 스프레드 문법(전개문법)...은 하나로 뭉쳐있는 여러 값들을 집합을 펼쳐서(전개,분산하여 spread)개별적인 값들의 목록으로 만든다. 스프레드 문법을 사용할 수 있는 대상은 for...of 문으로 순회할 수 있는 이터러블에 한정된다.

// ...[1,2,3]은 [1,2,3]을 개별 요소로 분리한다(-> 1,2,3)
console.log(...[1, 2, 3]);
// 문자열은 이터러블이다
console.log(...'Hello'); // H e l l o
// Map과 Set은 이터러블이다
console.log(
  ...new Map([
    ['a', '1'],
    ['b', '2'],
  ])
);
// [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3, 2])); // 1 2 3

// 위 예제에서 ...[1,2,3]은 이터러블인 배열을 펼쳐서 요소들을 개별적인 값들의 목록 1 2 3으로 만든다. 이때 1 2 3은 값이 아니라 값들의 목록이다. 즉 스프레드 문법의 결과는 값이 아니다. 따라서 변수에 할당할 수 없다.

// 함수 호출문의 인수 목록에서 사용하는 경우
const arr = [1, 2, 3];
const max = Math.max(arr);
console.log(max); // NaN

// 이런 최대값을 구하는 Math 메서드 인수에는 배열이 들어가기 힘들었기 때문에 스프레드 문법이 보급되기 전까지는 apply function을 사용했지만 이제는 스프레드 문법을 사용하면 더 간결하고 가독성이 좋다.

const maxSpread = Math.max(...[1, 2, 3]);
console.log(maxSpread); // 3

// 어떻게 보면 Rest 파라미터는 인수들의 목록을 배열로 전달받아 비슷하게 보일지도 모르나 이는 정 반대의 개념이다. Rest 파라미터는 개별 숫자들을 배열로 만들어주는데 반해 스프레드 문법은 배열을 개별 숫자로 풀어놓는다.

function foo(...rest) {
  console.log(rest);
}

foo(1, 2, 3); // [ 1, 2, 3 ]

// 배열 리터럴 내부에서 사용하는 경우 : 스프레드 문법을 배열 리터럴에서 사용하면 ES5에서 사용하던 기존의 방식보다 더욱 간결하고 가독성 좋게 표현할 수 있다. ES5에서 사용하던 방식과 비교하여 살펴보자

// * concat : ES5에서 2개의 배열을 1개의 배열로 결합하고 싶은 경우 배열 리터럴만으로 해결할 수 없고 concat 메서드를 사용해야한다.
let arr2 = [1, 2].concat([3, 4]);
console.log(arr2); // [ 1, 2, 3, 4 ]
// 스프레드 문법을 사용하면 별도의 메서드가 필요없음
const arr3 = [...[1, 2], ...[3, 4]];
console.log(arr3); // [ 1, 2, 3, 4 ]

// * splice : 어떤 배열의 중간에 다른 배열의 요소들을 추가하거나 제거하려면 splice 메서드를 사용한다. 이때 splice 메서드에 세번째 인수로 배열을 전달하면 배열 자체가 추가된다.
var arr4 = [1, 4];
var arr5 = [2, 3];
arr4.splice(1, 0, arr5);
console.log(arr4); // [ 1, [ 2, 3 ], 4 ] 이다. 우리가 기대한 것은 [1, 2, 3, 4]
// 스프레드 문법을 사용하면 훨씬 가독성 있음
var arr6 = [1, 4];
var arr7 = [2, 3];
arr6.splice(1, 0, ...arr7);
console.log(arr6); // [ 1, 2, 3, 4 ]

// * 배열복사 : ES5에서 배열을 복사하려면 slice 메서드를 사용해야한다.
var origin = [1, 2];
var copy = origin.slice(0, 2);
console.log(copy, origin === copy); // [ 1, 2 ] false
// 스프레드 문법 사용
var originSpread = [1, 2];
var copySpread = [...originSpread];
console.log(copySpread); // [ 1, 2 ]

// * 이터러블을 배열로 변환 : apply 또는 call 메서드를 사용하여 slice 메서드를 호출해야 한다.
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
const arr8 = Array.prototype.slice.call(arrayLike);
console.log(arr8); // [ 1, 2, 3 ]

// 스프레드 문법
function sum() {
  return [...arguments].reduce((pre, acu) => pre + acu, 0); // ...arguments는 이터러블이면서 유사배열객체이다.
}
console.log(sum(1, 2, 3)); // 6

// 위 예제보다 좋은건 Rest 파라미터를 사용
const sum1 = (...args) => args.reduce((pre, cur) => pre + cur, 0);
console.log(sum1(1, 2, 3)); // 6

// 이터러블이 아닌 유사배열 객체는 스프레드 문법의 대상이 될 수 없다
// 혹은 Array.from은 유사배열 객체 또는 이터러블을 배열로 변환해야한다.
console.log(Array.from(arrayLike)); // [ 1, 2, 3]

// * 객체 리터럴 내부에서 사용하는 경우
const obj = { x: 1, y: 2 };
const copys = { ...obj };
console.log(copys, obj === copy); // { x: 1, y: 2 } false

// 객체병합
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }

// 디스트럭처링 할당 : 디트럭처링 할당 (구조 분해 할당)은 구조화된 배열과 같은 이터러블 또는 객체를 (비구조화, 구조 파괴)하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다. 배열과 같은 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용하다.

// 배열 디스트럭처링 할당 : ES5에서 구조화된 배열을 디스트럭처링하여 1개 이상의 변수에 할당하는 방법은 다음과 같다.

var arrs = [1, 2, 3];

var one = arrs[0];
var two = arrs[1];
var three = arrs[2];
console.log(one, two, three); // 1 2 3

const arrs1 = [1, 2, 3];
// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arrs을 디스트럭처링하여 할당한다
/// 이때 할당 기준은 배열의 인덱스다
const [one1, two1, three1] = arrs1;
console.log(one1, two1, three1); // 1 2 3

const [x, y] = [1, 2];
console.log(x, y); // 1 2

// 이런식으로 변수를 미리 선언하고 디스트럭처링 할당을 하게 된다면 const 키워드로 변수를 선언할 수 없으므로 권장하지 않는다.
let x1, y1;
[x1, y1] = [1, 2];

// 배열 디스트럭처링 할당의 기준은 배열의 인덱스다. 즉 순서대로 할당된다. 이때 변수의 개수와 이터러블의 요소 개수가 반드시 일치할 필요는 없다.
const [c, d] = [1];
console.log(c, d); // 1 undefined
const [e, f] = [1, 2, 3];
console.log(e, f); // 1 2
const [g, , h] = [1, 2, 3];
console.log(g, h); // 1 3

// 배열 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.
const [a, b, c1 = 3] = [1, 2];
console.log(a, b, c1); // 1 2 3
// 기본 값보다 할당된 값이 우선한다.
const [o, p = 11, q = 10] = [1, 2, 3];
console.log(o, p, q); // 1 2 3

// 배열 디스트럭처링 할당을 위한 변수에 Rest 파라미터와 유사하게 Rest 요소을 사용할 수 있다.
const [x2, ...y2] = [1, 2, 3];
console.log(x2, y2); // 1 [ 2, 3 ]

// 객체 디스트럭처링 할당 : 객체의 각 프로퍼티를 객체로부터 디스트럭처링 하여 변수에 할당하기 위해서는 프로퍼티 키를 사용해야한다.

// ES5
var user = { firstName: 'SeongGye', lastName: 'Lee' };

var firstName = user.firstName;
var lastName = user.lastName;
console.log(firstName, lastName); // SeongGye Lee

var user1 = { firstName1: 'Philip', lastName1: 'Lee' };
// 이때 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의마가 없다.
const { lastName1, firstName1 } = user1;
console.log(firstName1, lastName1); // Philip Lee

const { lastName2, firstName2 } = { firstName2: 'Philipuuu', lastName2: 'Kim' };
console.log(lastName2, firstName2); // Kim Philipuuu

// 객체의 프로퍼티키와 다른 변수 이름으로 프로퍼티 값을 할당받으려면 다음과 같이 변수를 선언한다.
const user2 = { firstName: 'Ungmo', lastName: 'Lee' };
console.log(user2); // { firstName: 'Ungmo', lastname: 'Lee' }

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다
// 프로퍼티 키가 lastName인 프로퍼티값을 ln에 할당하고,
// 프로퍼티 키가 firstName인 프로퍼티값을 fn에 할당한다.

const { firstName: fn, lastName: ln } = user2;
console.log(fn, ln); // Ungmo Lee

// 객체 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.
const { firstName3 = 'philip', lastName3 } = { lastName3: 'Lee' };
console.log(firstName3, lastName3); // philip Lee

// 객체 디스트럭처링 할당은 객체에서 프로퍼티 키로 필요한 프로퍼티 값만 추출하여 변수에 할당하고 싶을 때 유용함
const str = 'Hello';
const { length } = str;
console.log(length); // 5
const todo = { id: 1, content: 'HTMl', completed: 'true' };
const { id } = todo;
console.log(id); // 1

// 객체 디스트럭처링 할당은 객체를 인수로 전달받는 함수의 매개변수에도 사용할 수 있다.
function printTodo(todo) {
  console.log(
    `할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다`
  );
}
printTodo({ id: 1, content: 'CSS', completed: false }); // 할일 CSS은 비완료 상태입니다

// 위 예제에서 객체를 인수로 전달받는 매개변수 todo에 객체 디스트럭처링 할당을 사용하면 좀 더 간단하고 가독성 좋게 표현 가능
function pirintsTodo({ content, completed }) {
  console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'} 상태입니다`);
}
pirintsTodo({ id: 1, content: 'React', completed: true }); // 할일 React은 완료 상태입니다

// 배열의 요소가 객체인 경우 배열 디스트럭처링 할당과 객체 디스트럭처링 할당을 혼용할 수 있다.

const toDo = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'REACT', completed: false },
  { id: 3, content: 'JAVASCRIPT', completed: false },
];

// todos1 배열의 두번째 요소인 객체로부터 id 프로퍼티만 추출한다.
const [, { ID }] = toDo;
console.log(toDo);
console.log(ID);

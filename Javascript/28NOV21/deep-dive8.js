/** @format */

// function hoisting

console.log(a);
// console.log(b); Error
// console.log(c); Error

var a = 10;
const b = 10;
let c;

// Function 생성자 함수

var add = new Function('x', 'y', 'return x + y');
console.log(add(2, 5));

// arrow function 화살표 함수

const add1 = (x, y) => x + y;
console.log(add1(2, 5));

function add2(x, y) {
  console.log(arguments);

  return x + y;
}

add2(1, 2, 3);

// Error example

function add3(x, y) {
  return x + y;
}

console.log(add(2));
console.log(add('a', 'b'));
/* Error reason : 1. Javascript function parameter is not match with number of arguments 
                  2. JS has non-type program language so we can't identify the type of parameter
*/

// Use JS grammar to entype parapmeter

function add4(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('put number in parameter');
  }
  return x + y;
}

console.log(add4(4, 3));
// console.log(add4('a' + 'b')); TypeError: put number in parameter

function add5(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add5(1, 2, 3));
console.log(add5(1, 3));
console.log(add5(1));

// return statement

function multiply(x, y) {
  return x * y;
}

var result = multiply(3, 5);
console.log(result);

function multiply(x, y) {
  return x * y;
  console.log('not working'); // after return, any code will be ignored
}
console.log(multiply(1, 5));

// parameter primitive will be get a value primitive, parameter obj will get a value of object

function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
}

var num = 100;
var person = { name: 'Lee' };

console.log(num);
console.log(person); // : 'Lee'

changeVal(num, person);
console.log(num);
console.log(person); // : 'Kim'

// 즉 num의 원시값은 변하지 않는 값이니 매개변수로 입력되어도 외부의 변수값과는 아예 별개가 되어버린다. 하지만 person과 같은 객체는 참조값으로 언제든 변형이 가능하기 때문에 원본 참조값에도 영향을 주는 시스템이다.

// Various function : IIFE (Immediately Invoked Function Expression) : 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수라 하며 즉시 실행 함수는 단 한번만 호출되며 다시 호출할 수 없다.

(function () {
  var a = 3;
  var b = 5;
  return a * b;
})(); // not working in node.js but availble on V8 engine

// (function foo() {
//   var a = 3;
//   var b = 5;
//   return a * b;
// })();

// foo(); ReferenceError : foo is not defined

const resl = (function (a, b) {
  var a = 3;
  var b = 5;
  return a * b;
})();
console.log(resl);

res = (function (a, b) {
  return a * b;
})(3, 5);
console.log(`res = ${res}`);

function foo1() {
  let a = 1;
  let b = 2;

  if (a < 2) {
    console.log('hello');
  }
  if (b <= 2) {
    console.log('world');
  }
}
foo1();

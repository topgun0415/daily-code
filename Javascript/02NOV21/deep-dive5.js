/** @format */

// Boolean typecasting

// 1. boolean 새성자 함수를 new 연산자 없이 호출하는 방법

Boolean('x');
Boolean('');
Boolean('false'); // This is true..

if ('false') {
  console.log('hello world!');
}

Boolean(0); // false
Boolean(1); // true
Boolean(NaN);

Boolean(null); // false
Boolean(undefined); // false
Boolean({}); //true
!!'x'; // true
!!''; // false
!!'false'; //true

!!0; // false
!!1; // true
!!null; // false
!!undefined; // false
!!{}; // true
!![]; // true

// 단축평가
console.log('cat' && 'dog'); // cat과 dog는 둘 다 true를 나타낸다 하지만 cat만으로는 평가가 불가능하니 dog까지 해보고 dog 를 출력
console.log('cat' || 'dog'); // 위와 달리 둘 다 true값을 나타낸다고 하면 dog 까지 연산할 필요가 없기에 단축평가가 이뤄짐

// 삼항연산자
var done = 'true';
var message = '';

if (done) message = '완료';
else message = '미완료';
console.log(message);

message = done ? '완료' : '미완료';
console.log(message);

function getStringLength(str) {
  str = str || '';
  return console.log(str.length);
}
getStringLength('hello');
getStringLength('hi');
getStringLength(); // 오류가 발생하여 함수에다가 단축평가를 사용하면 오류가 나지 않는다

// 논리합 (logical OR)
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// 논리곱 (logical AND)
true && true; // true
true && false; // false
false && true; // false
false && false; // false

var foo = null ?? 'defalut string'; // If value is null or undefined then show 'String', only null and undefined
console.log(foo);

// Chapter 10 : Obeject
/*
  Javascript is a programming language that based on Object(function, array, regex). Primitive date like Number, String is immutable value but object value is mutable value. 
*/

// 1. Object literal

let person = {
  name: 'Lee',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

console.log(typeof person);
console.log(person);

let empty = {};
console.log(typeof empty);

// Property : 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다

let person1 = {
  name: 'Lee',
  age: 20,
};

var obj = {};
var key = 'hello';
obj[key] = 'world';
console.log(key);
console.log(obj);
console.log(obj[key]);

var foo = {
  '': '',
};
console.log(foo);

var foo1 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
};
console.log(foo1);

var circle = {
  radius: 5,

  getDiameter: function () {
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter());

// Property apporach ',', '[]'

var person2 = {
  name: 'Lee',
};
console.log(person2.name);
console.log(person2['name']);

var person3 = {
  1: 10,
};

console.log(person3[1]);
console.log(person3['1']);

var person4 = {
  name: 'Lee',
};
// 프로퍼티 값 갱신
person4.name = 'Kim';
console.log(person4);

//프로퍼티 동적생성
person4.age = 20;
console.log(person4);
//프로퍼티 삭제
delete person4.age;
console.log(person4);

var x = 1,
  y = 2;
var obj3 = {
  x: x,
  y: y,
};
console.log(obj3);

let x1 = 1,
  y1 = 2;
const obj4 = { x1, y1 };
console.log(obj4);

// ES6
const prefix = 'Props';
let i = 0;
const obj5 = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};
console.log(obj5);

const obj6 = {
  name: 'Philipuuu',
  sayHi() {
    console.log('Hi! ' + this.name);
  },
};

obj6.sayHi();

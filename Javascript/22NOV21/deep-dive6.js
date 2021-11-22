/** @format */

var person = {
  name: 'Philipuuu',
  sayHello: function () {
    console.log(`hello my name is ${this.name}`);
  },
};

person.sayHello();
console.log(typeof person); // hello my name is Philipuuu
console.log(person); // object

var person = {
  name: 'Lee',
  age: 20,
};

// 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다.

var obj = {};
var key = 'hello';
var philip = 'name';
var japan = 'country';

obj[key] = 'world!';
obj[philip] = 'is philip';
obj[japan] = 'penninsula';
console.log(obj);

// 메서드와 함수

var circle = {
  radius: 5,

  getDiameter: function () {
    return 2 * this.radius;
  },
};

console.log('circle.radius = ' + circle.radius);
console.log('circle.getDiameter = ' + circle.getDiameter());

// Property approach

var person2 = {
  name: 'Lee',
};

console.log(person2.name);
console.log(person2['name']);
console.log(person2['age']); // 객체에 존재하지 않은 프로퍼티에 접근하면 undefined를 반환한다.
console.log(person2.age); // 객체에 존재하지 않은 프로퍼티에 접근하면 undefined를 반환한다.

var person3 = {
  name: 'Lee',
};

person3.name = 'Kim';
console.log(person3.name);
person3.age = 3;
console.log(person3);
//프로퍼티 삭제
delete person3.age;
console.log(person3);

// 프로퍼티 축약 표현
var x = 1,
  y = 2; // ES5
var obj = {
  x: x,
  y: y,
};
console.log(obj);

let x1 = 1, // ES6
  y1 = 2;
const obj1 = { x1, y1 };
console.log(obj1);

const prefix = 'props';
let i = 0;

const obj4 = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj4);

// 메서드 축약표현
// ES5

var obj5 = {
  name: 'Philip',
  sayHi: function () {
    console.log('Hi ' + this.name);
  },
};
obj5.sayHi();

// ES6

let obj6 = {
  name: 'Philip',
  sayHello() {
    console.log('Hi ' + this.name);
  },
};

obj6.sayHello();

// primitive type & object/reference type

// primitive type : immutable value and read only

var str = 'string';

console.log(str[0]);
console.log(str.length);
console.log(str.toUpperCase());
// However, you cant change s to S by using str[0] = 'S'; this is error!

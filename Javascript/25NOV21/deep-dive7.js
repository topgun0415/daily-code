/** @format */

// Deep copy & Shallow copy
const o = { x: 1 };
const c = o;
console.log(c);
console.log(c === o);

var person = {
  name: 'Lee',
  age: 30,
};
var copy = person;
console.log(person);
console.log(copy);
console.log(copy === person);

var person1 = {
  name: 'Lee',
};

var person2 = {
  name: 'Lee',
};

console.log(person1 === person2);
console.log(person1.name === person2.name);

// function 함수

function add1(x, y) {
  return x + y;
}

var result = add(3, 4);
console.log(result);

// function definition

// 1. function declaration
function add(x, y) {
  return x + y;
}
// 2. function expression
var add = function (x, y) {
  return x + y;
};
// 3. By using Function constructor fucntion
// var add = new Function('x', 'y', 'retrun x + y');
// 4. arrow function(ES6)
var add = (x, y) => x + y;

console.dir(add1);
console.log(add1(4, 3));

function foo() {
  console.log('foo');
}

foo();

// function reference
console.dir(added);
console.dir(sub);

// function statement
console.log(added(3, 6));
// console.log(sub(5, 3)); Error : sub is not a function

// function declaration
function added(x, y) {
  return x + y;
}

var sub = function (x, y) {
  return x - y;
};

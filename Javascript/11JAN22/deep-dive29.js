/** @format */

// 함수의 구분 : 자바스크립트 함수는 일반적인 함수로서 호출할 수도 있고, new연산자와 함께 호출하여 인스턴스를 생성할 수 있는 생성자 함수로서 호출할 수도 있으며, 객체에 바인딩되어 메서드로서 호출할 수도 있다. 이는 언뜻 보면 편리한 것 같지만 실수를 유발시킬 수 있으며 성능 면에서도 손해다.

var foo = function () {
  return 1;
};

// 일반적인 함수로서 호출
foo();

// 생성자 함수로서 호출
new foo();

// 메서드로서 호출
var obj = { foo: foo };
obj.foo();

// ES6 이전의 모든 함수는 일반 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다.
// 프로퍼티 f에 바인딩된 함수는 callable이며, constructor다.
var objs = {
  x: 10,
  f: function () {
    return this.x;
  },
};

// 프로퍼티 f에 바인딩된 함수를 메서드로서 호출
console.log(objs.f()); // 10

// 프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출
var bar = objs.f;
console.log(bar()); // undefined

// 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new objs.f()); // f {}

// 콜백 함수를 사용하는 고차 함수 map. 콜백 함수도 constructor이며 프로토타입을 생성한다.
[1, 2, 3].map(function (item) {
  return item * 2;
});
// [2, 4, 6];

// * 메서드 : ES6 사양에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다.

const method = {
  x: 1,
  // met는 메서드다.
  met() {
    return this.x;
  },
  // fun에 바인딩된 함수는 메서드가 아닌 일반 함수다.
  fun: function () {
    return this.x;
  },
};

console.log(method.met()); // 1
console.log(method.fun()); // 1
// ES6 사양에서 정의한 메서드(이하 ES6 메서드)는 인스턴스를 생성할 수 없는 non-constructor다. 따라서 ES6 메서드는 생성자 함수로서 호출할 수 없다. 즉 메서드는 인스턴스를 생성 할 수도 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.

// 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다.

const base = {
  name: 'Lee',
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  // sayHi는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
  // sayHi의 [[HomeObject]]는 derived.prototype을 가리키고
  // super는 sayHi의 [[homeObject]]의 프로토타입인 base.prototype을 가리킨다.

  sayHi() {
    return `${super.sayHi()}, how are you doing?`;
  },
};

console.log(derived.sayHi()); // Hi! Lee, how are you doing?
// 위에처럼 ES6 메서드가 아닌 함수는 super 키워드를 사용할 수 없다. ES6 메서드가 아닌 함수는 내부 슬롯 [[HomeObject]]를 가지고 있지 않기 때문이다.
// 메서드는 본연의 기능(super)을 추가하고 의미적으로 맞지 않는 기능(constructor)은 제거했다.

// 화살표 함수 : 화살표함수는 function 키워드 대신 화살표를 사용하여 기존의 함수 정의 방식보다 간략하게 함수를 정의할 수 있다. 특히 화살표함수는 콜백 함수 내부에서 this가 전역객체를 가리키는 문제를 해결하기 위한 대안으로 유용하다.

const multiply = (x, y) => x * y;
console.log(multiply(2, 4)); // 8

// 매개변수 선언 : 매개변수가 여러 개인 경우 소괄호 ()안에 매개변수를 선언한다.
const arrow1 = (x, y) => {};
// 매개변수가 한 개인 경우 소괄호 ()를 생략할 수 있다.
const arrow2 = (x) => {};
// 매개변수가 없는 경우 소괄호 ()를 생략할 수 없다.
const arrow3 = () => {};

// 함수 몸체가 여러 개의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 없다. 이때 반환값이 있다면 명시적으로 반환해야한다.

const sum = (a, b) => {
  const result = a + b;
  return result;
};

// 화살표 함수도 즉시 실행 함수로 사용할 수 있다.
const person = ((name) => ({
  sayHi() {
    return `Hi? My name is ${name}`;
  },
}))('Lee');

console.log(person.sayHi());

// 화살표 함수도 일급 객체이므로 Array.prototype.map , Array.prototype.filter, Array.prototype.reduce 같은 고차함수에 인수로 전달할 수 있다. 이 경우 일반적인 함수보다 표현이 간결하고 가독성이 좋다.

// ES5
console.log(
  [1, 2, 3].map(function (v) {
    return v * 2;
  })
); // [ 2, 4, 6 ]

// ES6
console.log([1, 2, 3].map((v) => v * 2)); // [ 2, 4, 6 ]

// 화살표 함수와 일반 함수의 차이

// 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다

const boo = () => {};
// 화살표 함수는 생성자 함수로서 호출할 수 없다.
// new boo(); TypeError: boo is not a constructor
console.log(boo.hasOwnProperty('prototype')); // false (화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다)

// 2. 중복된 매개변수 이름을 선언할 수 없다 / 일반 함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않는다.
function normal(a, a) {
  return a + a;
}
console.log(normal(1, 3));
// 예외 : strict mode에서는 에러가 발생

// 다만 화살표 함수는 ..
// const arrow = (a, a) => a + a; SyntaxError: Duplicate parameter name not allowed in this context

// 3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.

// this
// 화살표 함수와 일반 함수와 구별되는 가장 큰 특징은 바로 this다. 그리고 화살표 함수는 다른 함수의 인수로 전달되어 콜백 함수로 사용되는 경우가 많다.

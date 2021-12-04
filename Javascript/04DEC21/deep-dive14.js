/** @format */

// 생성자 함수를 사용할 경우 Return문을 되도록이면 사용하지 않고, 사용하되 객체를 반환하는게 아니면 의미가 없다.
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  return {};
}

const circle = new Circle();
console.log(circle); // {}

// 함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다.

function foo() {} // 함수는 객체다.
foo.prop = 10; // 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 12;
foo.method = function () {
  console.log(this.prop);
};

console.log(foo); // [Function: foo] { prop: 12, method: [Function (anonymous)] }
foo.method(); // 12

// new 연산자 : 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다. 따라서 생성자 함수는 일반적으로 첫 문자를 대문자로 기술하는 파스칼 케이스로 명ㅁ여하여 일반 함수와 구별할 수 있도록 노력한다.

// 함수와 일급객체

/* 다음과 같은 조건을 만족하는 객체를 일급 객체라 한다.

1. 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능하다.
2. 변수나 자료구조(객체, 배열 등) 에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 함수의 반환값으로 사용할 수 있다. 

즉 자바스크립트의 함수는 다음 예제와 같이 위의 조건을 모두 만족하므로 일급 객체다.
*/

// 1. 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체, 배열 등) 에 저장할 수 있다.

const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

const predicates = { increase, decrease };

console.log(predicates.decrease(5)); // 4
console.log(predicates.increase(5)); // 6

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

function square(number) {
  return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
// {
//   length: { value: 1, writable: false, enumerable: false, configurable: true },
//   name: {
//     value: 'square',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   },
//   arguments: {
//     value: null,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   caller: {
//     value: null,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   prototype: { value: {}, writable: true, enumerable: false, configurable: false }
// }

// arguments 프로퍼티 : arguments 객체는 함수 호출 시 전달된 인수 들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함순 내부에서 지역 변수처럼 사용된다.

function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2

// 함수를 정의할 때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급된다. 즉 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된 이후 인수가 할당된다. (multiply(1, 2, 3); 와 같이 초과되는 매개변수는 절대 버려지지 않고 arguments에 *유사 배열 구조* (실제 배열이 아님) 로 보관되어진다.

function sum() {
  let res = 0;

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.

// Caller 프로퍼티는 표준화될 예정도 없는 프로퍼티이므로 사용하지 말고 참고로만 알아두자!

// length 프로퍼티  : 함수 객체의  length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

function foo() {}
console.log(foo.length); // foo.length = 0

function bar(x) {
  return x;
}
console.log('bar.length = ' + bar.length); // bar.length = 1

function loo(x, y) {
  return x + y;
}
console.log('loo.length = ' + loo.length); // loo.length = 2
// arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있으므로 주의해야한다.

// name 프로퍼티 : 함수 객체의 name 프로퍼티는 함수 이름을 나타낸다.

var namedFunc = function foo() {};
console.log(namedFunc.name); // foo 로 출력

// __proto__ 접근자 프로퍼티 : 모든 객체는 [[Prototype]] 라는 내부 슬롯을 갖는다. 프로토타입 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.

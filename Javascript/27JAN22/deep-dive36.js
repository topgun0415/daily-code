/** @format */

// Number : 표준 빌트인 객체인 Number는 원시 타입인 숫자를 다를 때 유용한 프로퍼티와 메서드를 제공한다.

// Number 생성자 함수 : 표준 빌트인 객체인 Number 객체는 생성자 함수 객체다. 따라서 new 연산자와 함께 호출하여 Number 인스턴스를 생성할 수 있다.

const numObj = new Number();
console.log(numObj); // 0 ( 크롬에서 보면 [[NumberData]]를 가리킨다 )

const numObj1 = new Number(10);
console.log(numObj1); // 10

// 숫자가 아닌 인수는 숫자로 강제 변환한다.
const numObj2 = new Number('10');
console.log(numObj2); // 10
const numObj3 = new Number('Hello');
console.log(numObj3); // NaN

// '명시적 타입 변환' 에서 살펴보았듯이, new 연사자를 사용하지 않고 Number 생성자 함수를 호출하면 Number 인스턴스가 아닌 숫자를 반환한다.
console.log(Number('0')); // 0
console.log(Number('-1')); // -1
console.log(Number('10.53')); // 10.53

console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Number 프로퍼티

// Number.MAX_VALUE : 자바스크립트에서 표현할 수 있는 가장 큰 수 . 이보다 큰 것은 Infinity다
// Number.MIN_VALUE : 자바스크립트에서 표현할 수 있는 가장 작은 수, 이보다 작은 수는 0이다

// Number 메서드

// * Number.isFinite : 인수로 전달된 숫자값이 정상적인 유한수, 즉 Infinity 또는 -Infinity가 아닌지 검사하여 그 결과를 불리언 값으로 반환한다.

// 인수가 정상적인 유한수이면 ture를 반환
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(Number.MAX_VALUE)); // true
console.log(Number.isFinite(Number.MIN_VALUE)); // true

// 인수가 무한수이면 false를 반환한다.
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false

// * Number.isInteger : 인수로 전달된 숫자값이 정수인지 검사하여 그 결과를 불리언 값으로 변환한다.
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(-123)); // true

// 0.5는 정수가 아니다
console.log(Number.isInteger(0.5)); // false
// 암묵적 타입으로 변환안함
console.log(Number.isInteger('123')); // false
console.log(Number.isInteger(false)); // false
console.log(Number.isInteger(Infinity)); // false

// * Number.isNaN : 인수로 전달된 숫자값이 NaN인지 검사하여 그 결과를 불리언 값으로 반환한다.
console.log(Number.isNaN(NaN)); // true

// * Number.prototype.toString : 숫자를 문자열로 변환하여 반환한다. 인수로는 진법을 나타내는 2~36 사이의 정수값을 전달한다. 인수를 생략하면 기본값 10진법이 지정된다.
console.log((10).toString()); // 10 (10진법)
console.log((10).toString(2)); // 1010 (2진법)
console.log((10).toString(8)); // 12 (8진법)

// Math : 표준빌트인 객체인 Math는 수학적인 상수와 함수를 위한 프로퍼티와 메서드를 제공한다.

// Math 프로퍼티
console.log(Math.PI); // 3.141592653589793

// Math 메서드

// * Math.abs : 인수로 전달된 숫자의 절대값을 반환한다. 절대값은 반드시 0 또는 양수이어야 한다.
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-1')); // 1
console.log(Math.abs('')); // 0
console.log(Math.abs([])); // 0
console.log(Math.abs(null)); // 0
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs('String')); // NaN
console.log(Math.abs()); // NaN

// * Math.round : 메서드는 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환한다.
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.7)); // 2
console.log(Math.round(-1.4)); // -1
console.log(Math.round(-1.7)); // -2

// * Math.ceil : 인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환한다. (음수는 반대)
console.log(Math.ceil(1.6)); // 2
console.log(Math.ceil(1.4)); // 2
console.log(Math.ceil(-1.4)); // -1

// * Math.floor : 인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환한다 (음수는 반대)
console.log(Math.floor(1.8)); // 1
console.log(Math.floor(-9.2)); // -10
console.log(Math.floor(6.2)); // 6

// * Math.sqrt : 인수로 전달된 숫자의 제곱근을 반환한다
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2)); // 1.4142135623730951

// * Math.random : 임의의 난수를 반환한다.
console.log(Math.random()); // 0.8155458764164669

// * Math.max : 인수 중에서 가장 큰 수를 반환한다.
console.log(Math.max(1)); // 1
console.log(Math.max(1, 2)); // 2
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max()); // -Infinity

// 배열 요소 중에서 최대값 취득
console.log(Math.max.apply(null, [1, 2, 3])); // 3
// ES6 스프레드 문법
console.log(Math.max(...[1, 2, 3])); // 3

// * Max.min : 인수 중에서 가장 작은 수를 반환한다. 인수가 전달되지 않으면 Infinity를 반환한다.
console.log(Math.min(1)); // 1
console.log(Math.min(1, 2)); // 1
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.min(Infinity)); // Infinity
// ES6 스프레드 문법
console.log(Math.min.apply(null, [1, 2, 3])); // 1
console.log(Math.min(...[1, 2, 3])); // 1

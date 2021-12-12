/** @format */

// 빌트인 전역 프로퍼티 : 빌트인 전역 프로퍼티는 전역 객체는 프로퍼티를 의미한다. 주로 애플리케이션 전역에서 사용하는 값을 제공한다.

// Infinity : Infinity 프로퍼티는 무한대를 나타내는 숫자값 Infinity를 갖는다.
console.log(global.Infinity === Infinity);
console.log(3 / 0); // 양의 Infinity
console.log(-3 / 0); // 음의 Infinity
console.log(typeof Infinity); // number

// NaN : 프로퍼티는 숫자가 아님 (Not-a-Number)을 나타내는 숫자값 NaN을 갖는다. NaN 프로퍼티는 Number.NaN 프로퍼티와 같다.
console.log(global.NaN); // NaN
console.log(Number('xyz')); // NaN
console.log(1 * 'string'); // NaN
console.log(typeof NaN); // number

// undefined : undefined 프로퍼티는 원시 타입 undefined를 값으로 갖는다.
console.log(global.undefined); // undefined
var foo;
console.log(foo); // undefined
console.log(typeof undefined); // undefined

// 빌트인 전역 함수 : 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메서드다.

// eval : 자바스크립트 코드를 나타내는 문자열을 인수로 전달받는다.

//표현식
eval('1 + 2;');
//표현식이 아닌 문
eval('var x = 5;');
console.log(x); // 위에서 eval로 변수 초기화한것이 전역 변수로 현재 사용가능해졌다.

// 이와 같이 string으로 넣어도 number로 나온다.
const y = eval('1 + 2; ');
console.log(y);
console.log(typeof y);

// eval함수를 통해 사용자로부터 입력받은 컨텐츠를 실행하는 것은 보안에 매우 취약하다. 또한 eval함수를 통해 실행되는 코드는 자바스크립트 엔진에 의해 최적화가 수행되지 않으므로 일반적인 코드 실행에 비해 처리 속도가 느리다. 따라서 eval 함수의 사용은 금지해야한다.

// isFinite : 전달받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true를 반환하고, 무한수이면 false로 반환한다.
console.log(isFinite(0)); // true
console.log(isFinite('10')); // true -> ('10' - > 10)
console.log(isFinite(null)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false (NaN도 false값으로 반환됨)
console.log(isFinite('Hello')); // false

// isNaN : 전달받은 인수가 NaN인지 검사하여 그 결과를 불리언 타입으로 반환된다. 전달받은 인수의 타입이 숫자가 아닌 경우 숫자로 타입을 변환한 후 검사를 수행한다.

// 숫자
console.log(isNaN('NaN')); // true
console.log(isNaN(10)); // false

// 문자열
console.log(isNaN('blabla')); // true
console.log(isNaN('10')); // false
console.log(isNaN('10.12')); // false
console.log(isNaN('')); // false ('' -> 0)
console.log(isNaN(' ')); // false (' ' -> 0)

// 블리언
console.log(isNaN(true)); // 1 - > false
console.log(isNaN(false)); // 0 - > false

// undefined
console.log(isNaN(undefined)); // true

// parseFloat : 전달받은 문자열 인수를 부동 소수점 숫자, 즉 실수로 해석하여 반환한다.
console.log(parseFloat('3.14'));

// parseInt : 전달받은 문자열 인수를 정수(integer)로 해석하여 반환한다.
console.log(parseInt('10'));
console.log(parseInt('10.521')); // 실수는 뒷자리 다 빼서 정수로 표현
// 10을 10진수로 해석하고 그 결과를 10진수 정수로 반환한다. (별로 쓸모 없음)
console.log(parseInt('10', 2)); // 2
console.log(parseInt('10', 4)); // 4
console.log(parseInt('10', 8)); // 8

const z = 15;
//10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(z.toString(2)); // '1111'
// 10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(z.toString(8)); // '17'
// 숫자값을 문자열로 반환한다.
console.log(z.toString()); // 15

// encodeURl / decodeURL : 이 함수는 완전한 URI를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다. URI는 인터넷에 있는 자원을 나타내는 유일한 주소를 말한다. URI의 하위 개념으로 URL, URN이 있다.

// encodeURIComponent / decodeURIComponent : 함수는 URI 구성 요소를 인수로 전달받아 인코딩한다. 여기서 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다.

// 암묵적 전역

var xx = 10;

function foo2() {
  yy = 20;
}
foo2(); // 20

// 선언하지 않은 식별자 yy를 전역에서 참조할 수 있다. 얼핏보면 yy는 선언하지 않은 식별자로 보이겠지만 이는 전역 객체 (window, global)의 프로퍼티가 되기 때문이다. 이를 암묵적 전역이라 한다.
console.log(xx + yy); // 30

// 에제 2
console.log(xxx); // undefined
// console.log(yyy); ReferenceError: yyy is not defined (전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않는다.)
var xxx = 10; // 전역 변수

function fooo() {
  yyy = 20;
}

fooo();
console.log(xxx + yyy); // 30

delete xxx; // 전역변수는 삭제되지 않는다.
// delete yyy; ReferenceError: yyy is not defined (프로퍼티는 삭제된다.)

console.log(xxx);
console.log(yyy);
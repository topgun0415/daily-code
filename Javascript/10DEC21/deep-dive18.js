/** @format */
// 'use strict'; 전역에 사용할 경우 자칫 다른 오류를 불러올 수 있기에 항상 블록 스코프나 한정적으로 사용할 것

// Strict mode란?

function foo() {
  x = 10;
}
foo();
console.log(x);

// 자바스크립트 엔진은 먼저 foo 함수의 스코프에서 x 변수의 선언을 검색한다. foo 함수의 스코프에는 x 변수의 선언이 없으므로 검색에 실패할 것이고, 자바스크립트 엔진은 x 변수를 검색하기 위해 foo 함수 컨텍스트의 상위 스코프(위 예제의 경우 전역 스코프)에서 x 변수의 선언을 검색한다. 전역 스코프에도 x 변수의 선언이 존재하지 않기 때문에 ReferenceError를 발생시킬 것 같지만 자바스크립트는 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성한다. 이때 전역 객체의 x 프로퍼티는 마치 전역 변수처럼 사용되어질 수 있기때문에 이를 암묵적 전역이라 한다. 따라서 반드시 !! var, let, const 키워드를 사용하여 변수를 선언한 다음 사용해야한다.

// strict mode를 적용하려면 반드시 전역의 선두 또는 함수 몸체의 선두에 use strict를 추가한다.

// function bar() {
//   'use strict';
//   y = 10;
//   'use strict'; <- 효과 X
// }
// foo();
// console.log(y);

// strict mode가 발생시키는 에러

// 5.1 암묵적 전역 : 선언하지 않은 변수를 참조하면 ReferenceError가 발생

(function () {
  'use strict';

  x = 1;
  console.log(x); // 즉시 실행함수로 실행해서 문제는 없지만 일반 함수에서 선언한지 않은 변수를 참조하면 ReferenceError가 발생함
})();

/* 5.2 변수, 함수, 매개변수의 삭제 : delete 연산자로 변수, 함수, 매개변수를 삭제하면 syntaxError가 발생
(function () {
  'use strict';

  var x = 1;
  delete x;
  
  function foo2(a) {
    delete a;
  
  }
  delete foo2();
}());
*/

// 5.3 매개변수 이름의 중복 : 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.
// 5.4 with문의 사용 : with문은 전달된 객체를 스코프 체인에 추가한다. with문은 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있지만 성능과 가독성이 나빠서 with문 자체를 잘 사용하지 않는다.

// 21장. 빌트인 객체

/* 자바스크립트 객체의 분류
1. 표준 빌트인 객체
2. 호스트 객체
3. 사용자 정의 객체
*/

// 1. 표준 빌트인 객체

const strObj = new String('Lee');
console.log(strObj); // [String: 'Lee']
const booleanObj = new Boolean(true);
console.log(booleanObj); // [Boolean: true]
const func = new Function('x', 'return x + x');
console.log(typeof func); // function
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object로 출력
const date = new Date();
console.log(typeof date); // object로 출력

// 생성자 함수인 표준 빌트인 객체가 생성한 인스턴스의 프로토타입은 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체이다. 즉 string을 생성자 함수로서 호출되면 생성자 String 인스턴스의 프로토타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype); // true

// 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체는 다양한 기능의 해당 빌트인 프로토타입 메서드를 제공한다.
const numObj = new Number(1.5);
console.log(numObj);
console.log(numObj.toFixed()); // 소수점 자리를 반올림하는 메서드
console.log(Number.isInteger(0.5)); // Number.isInteger는 인수가 정수(integer)인지 확인하여 boolean값을 반환

// 굳이 원시값으로 만들지 않고 원시값을 생성하는 표준 빌트인 생성자 함수가 존재하는 이유는???

const str = 'hello';

console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO
// 변수 str을 선언하고, 이 변수에 대해서 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라 한다. 예를들어 문자열에 대해 마침표 표기법으로 접근하면 그 순간 래퍼 객체인 String 생성자 함수의 인스턴스가 생성되고 문자열은 래퍼 객체의 내부 슬롯에 할당한다.

const str1 = 'hi';

// 원시타입인 문자열이 래퍼 객체인 String 인스턴스로 변환한다.
console.log(str1.length); // 2
console.log(str1.toUpperCase()); // HI

// 이때 문자열 래퍼 객체인 String 생성자 함수의 인스턴스는 String.prototype의 메서드를 상속받아 사용할 수 있다. 그 후 래퍼 객체의 처리가 종료되면 래퍼 객체의 내부 슬롯에 할당된 원시값으로 되돌아가게 되고 기존 래퍼 객체는 가비지 컬랙션의 대상이 된다.

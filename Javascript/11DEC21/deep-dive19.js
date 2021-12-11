/** @format */

// 1. 식별자 str은 문자열을 값으로 가지고 있다
const str = 'hello';

// 2. 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다.
// 식별자 str의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
// 래퍼 객체의 name 프로퍼티가 동적 추가된다.
str.name = 'Lee';

// 3. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬랙션의 대상이 된다.

// 4. 식별자 str은 새롭게 암묵적으로 생성된(2에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다.
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str.name); // undefined

// 5. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 4에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬랙션의 대상이 된다/
console.log(typeof str, str); // string hello

// Number 객체도 마찬가지이다.
const num = 1.5;
console.log(num.toFixed()); // 2
console.log(typeof num, num); // number, 1.5

// 문자열, 숫자, 불리언, 심벌은 암묵적으로 생성되는 래퍼 객체에 의해 마치 객체처럼 사용할 수 있기에 굳이 new 생성자 함수로 호출할 필요 없고 권장하지 않는다.

// 21.4 전역객체 : 전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이다. 그리고 어떤 객체에도 속하지 않은 최상위 객체다.
// 전역 객체는 자바스크립트 환경에 따라 이름이 제각각 / 브라우저 : window / Node.js : global

// 전역객체의 특징
// 전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉 전역 객체를 생성할 수 있는 생성자 함수가 제공되지않는다.
// 전역 객체를 프로퍼티를 참조할 때 window(global)를 생략할 수 있다.

// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(foo);
// console.log(window.foo);  1

// 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
bar = 2;
console.log(bar); // 2
// console.log(window.bar);

// 전역함수
function baz() {
  return 3;
}
console.log(baz()); // 3
// console.log(window.baz());

// let , const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. let이나 const 키워드로 선언한 전역 변수는 보이지 않는 개념적인 블록(전역 렉시컬 환경의 선언적 환경 레코드) 내에 존재하게 된다.

let foo1 = 123;
// console.log(window.foo1); undefined

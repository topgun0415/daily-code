/** @format */

// 전역 변수의 문제점

/*
1. 암묵적 결합 : 전역 변수를 선언한다는 것은 코드 어디에서나 그 변수를 사용한다는 것이다. 다만 변수의 유효범위가 클수록 코드가 길어지게되면 재사용성이 좋을지는 모르겠으나, 가독성이 나빠지고 의도치 않은 오류 및 변경이 나타날 수 있다.

2. 긴 생명 주기 : 전역 변수는 생명주기가 길다. 따라서 메모리 리소스도 많이 사용하는데 이는 변수이름 중복 등이 이뤄 질 수 있으며, 실행 속도를 저하시킬수도 있다.

3. 스코프 체인 상에서 종점의 존재 : 전역 변수는 스코프 체인 상에서 종점에 존재한다. 즉 이는 전역 변수의 검색 속도가 가장 느리며, 검색 속도 차이는 크게 나지 않지만 나중에 차이가 생길 수 도 있다.

4. 네임스페이스 오염 : 자바스크립트는 하나의 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유한다. 따라서 다른 파일 내에서 동일한 이름 명명된 전역 변수나 전역 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다.

전역 변수의 무분별한 사용은 위험하다. 전역 변수의 사용 이유가 확실하지 않다면 사용하지 않는 것이 최고이며, 변수의 스코프는 되도록 최소한으로 해야한다.
*/

// var 키워드로 선언한 변수의 문제점

// 1. 변수 중복 선언 허용
var x = 1;
var y = 2;

var x = 100; // 기존 변수 x에 대한 대입이 이뤄짐
var y; // 초기화문이 없는 변수 선언문은 무시된다.

console.log(x);
console.log(y);

// 2. 함수 레벨 스코프
var x = 1;

if (true) {
  var x = 10;
}
console.log(x);
// if , for 문의 변수 선언문에서 var 키워드로 선언한 변수도 전역 변수가 된다.

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
console.log(i); // 5
// 함수 레벨 스코프는 전역 변수를 남발할 가능성을 높인다. 이로 인해 의도치 않게 전역 변수가 중복 선언되는 경우가 발생

// 3. 변수 호이스팅
console.log(foo); // undefined
foo = 123;
console.log(foo); // 123
var foo;

// let 키워드

// 1. 변수 중복 선언 금지
let a = 10;
// let a = 12; SyntaxError: Identifier 'a' has already been declared
console.log(a);

// 2. 블록 레벨 스코프
// var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역블록으로 삼는다. 그 이외에는 전역변수로 받아들임. 하지만 let은 모든 코드블록(함수, if문, for문, while문 try/catch문 등)을 지역 스코프로 인정하는 블록 레벨 스코프(block level scope)를 따른다.

let foo1 = 1;

{
  let foo = 2;
  let bar1 = 3;
}

console.log(foo1); // 1
// console.log(bar1); ReferenceError: bar1 is not defined

// 3. 변수 호이스팅
// var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.

// console.log(foo2); ReferenceError: Cannot access 'foo2' before initialization
let foo2;

let foo3 = 1;
{
  console.log('foo3 = ', foo3);
  // let foo3 = 2; ReferenceError: Cannot access 'foo3' before initialization : let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에 참조에러가 발생함
}

// console.log(foo4); ReferenceError: Cannot access 'foo3' before initialization, 이는 즉 호이스팅을 하지만 ES6에서 도입된 let, const, class을 사용한 선언문에서는 호이스팅이 발생하지 않는 것처럼 동작
let foo4 = 1;

// 4. 전역 객체와 let
// var 키워드로 선언한 전역변수와 전역함수 그리고 선언하지 않은 변수에 값을 할당한 암묵적 전역은 전역객체 window의 프로퍼티가 된다. (window 생략도 가능)
// 하지만 let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니므로 window.foo와 같이 접근할 수 없다.

// Const 키워드 : 상수를 선언하기 위해 사용한다. 하지만 반드시 상수만을 위해 사용하지는 않는다. let 키워드와 대부분 일치한다.

// 1. 선언과 초기화 : const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.

// const foo5; SyntaxError: Missing initializer in const declaration
const foo5 = 1;

// 2. 재할당 금지 : var , let 로 선언한 변수는 재할당이 자유로우나 const는 상수이므로 재할당 불가!!
// * 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야한다.

const TAX_RATE = 0.1; //

// 세전 가격
let preTaxPrice = 100;

// 세후 가격 = 세전 가격 + 세전가격 * 10%
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;
console.log(afterTaxPrice);

// 4. const 키워드와 객체 : const 키워드로 선언된 변수에 원시값을 할당할 경우 값을 변경할 수 없다. 하지만 객체를 할당한 경우에는 값을 변경할 수 있다.

const person = {
  name: 'Lee',
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim'; // 변경 가능
person.age = 11; // 새로운 객체값도 추가 가능

console.log(person);
// 즉 새로운 값을 재할당하는 것은 불가능하지만 프로퍼티 동적 생성, 삭제, 프로퍼티 값의 변경을 통해 객체를 변경하는 것은 가능하다. 이때 객체가 변경되더라도 변수에 할당된 참조 값은 변경되지 않는다.

/* 

var / let / const

변수선언에는 const
let은 재할당이 필요한 변수를 한정해서 사용

* ES6를 사용한다면 var 키워드는 사용하지 않는다.
* 재할당이 필요한 경우에 한정해 let 키워드를 사용하고 이때 변수의 스코프는 최대한 좁게 만든다.
* 변경이 발생하지 않고 읽기 전용으로 사용하는 원시값과 객체에는 const 키워드 사용

즉 처음에는 무조건 const로 변수선언을 하며, 나중에 재할당이 필요할 경우에만 let 키워드로 변경해줘도 늦지않다. 
*/

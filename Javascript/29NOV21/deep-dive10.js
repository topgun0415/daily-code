/** @format */

// Scope

var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);
}

foo(); // local
console.log(x); // global

// Var's problem

function foo1() {
  var x = 1;
  // var 키워드로 선언된 변수는 같은 스코프 내에서도 중복 선언을 허용한다
  // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
  var x = 2;
  console.log(x);
}
foo1(); // 2

/* function bar() {
  let x = 1;
  // var 키워드로 선언된 변수는 같은 스코프 내에서도 중복 선언을 허용한다
  // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
  let x = 2;
  console.log(x);
}
 bar(); SyntaxError : Identifier 'x' has already been declared
*/

function foo2() {
  console.log('global function foo2');
}

function bar2() {
  function foo2() {
    console.log('local function foo2');
  }
  foo2();
}
bar2();

// 함수 레벨 스코프 : 코드 블록이 아닌 함수에 의해서만 지역 스코프가 생성된다는 의미이다.

var a = 1;

if (true) {
  var a = 10;
}
console.log(a); // 10
// var 키워드로 선언된 변수는 함수 레벨 스코프만 인정하기 때문에 함수 밖에서 var 키워드로 선언된 변수를 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수이다.

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

console.log(i); // 5

// Lexical scope

var b = 1;

function foo3() {
  var b = 10;
  bar3();
}

function bar3() {
  console.log(b); // 1
}

bar3();
foo3();

// 전역변수의 문제점 : 전역변수의 무분별한 사용은 위험하다. 전역변수를 반드시 사용해야할 이유가 없다면 반드시 지역번수로 사용해야 한다.

function foo4() {
  var d = 'local';
  console.log(d);
  return d;
}

foo4(); // local
// console.log(d); RefrenceError

/** @format */

// 전역 변수의 문제점

function foo() {
  // veriable creat
  var x = '姫'; // veriable x  n
  console.log(x); // console 姫
  return x;
}
foo();
// console.log(x); RefrenceError

// * Local veriable's life cycle is equal to function's life cycle *

var xx = 'global';

function foo1() {
  console.log(xx); // 변수 호이스팅으로 함수에 지역변수로 이미 xx가 선언된 상태이지만 아직 정확한 값은 들어가있지 않기때문에 undefined로 출력이 되는 모습이다. (변수 할당문이 실행되기 이전까지는 undefined값을 갖는다)
  var xx = 'local';
  console.log(xx);
}

foo1();
console.log(xx);

// 호이스팅은 변수 선언이 스코프의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 말한다.

// 전역변수의 생명 주기
// * Var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치한다.

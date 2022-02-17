/** @format */

// export 키워드 : 모듈은 독자적인 모듈 스코프를 갖는다. 따라서 모듈 내부에서 선언한 모든 식별자는 기본적으로 해당 모듈내부에서만 참조할 수 있다. 모듈 내부에서 선언한 식별자를 외부에 공개하여 다른 모듈들이 재사용 할 수 있도록 하려면 export 키워드를 사용해야한다

var x = 'app';
console.log(x); // app

// 변수의 공개
const pi = Math.PI;

// 함수의 공개
function square(x) {
  return x + x;
}

// 클래스의 공개
export class Person {
  constructor(name) {
    this.name = name;
  }
}

// 변수 함수 클래스를 하나의 객체로 구성하여 공개
export { pi, square };

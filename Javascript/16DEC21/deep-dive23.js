/** @format */

// 3. 생성자 함수 호출 : 생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.

function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

// 생성자 함수는 new 연산자와 함께 호출하지 않으면 생성자 함수로 동장하지 않는다. 즉, 일반적인 함수의 호출이다.
const circle3 = Circle(15);

// 일반 함수로 호출된 Circle에는 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); // undefined

// 일반함수로 호출된 Circle 내부의 this는 전역 객체를 가리킨다.
console.log(radius); // 15

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출 : apply, call, bind 메서드는 Function.prototyp의 메서드다. 즉, 이들 메서드는 모든 함수가 상속받아 사용할 수 있다.

const person = {
  name: 'Lee',
  foo(callback) {
    // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
    setTimeout(callback.bind(this), 100);
  },
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}`);
});
// Function.prototype.apply/call/bind 메서드에 첫번째 인수로 전달한 객체

// 실행 컨텍스트 : 실행컨텍스트는 자바스크립트의 동작 원리를 담고 있는 핵심 개념이다. 실행 컨텍스트를 바르게 이해하면 자바스크립트가 스코프를 기반으로 식별자와 식별자에 바인딩된 값(식별자 바인딩)을 관리하는 방식과 호이스팅이 발생하는 이유, 클로저의 동작 방식, 그리고 태스트 큐와 함께 동ㅇ작하는 이벤트 핸들러와 비동기 처리 동작 방식을 이해할 수 있다.

// 소스코드의 타입 : ECMAScript 사양은 소스코드를 4가지 타입으로 구분한다.
/*
1. 전역 코드 : 전역에 존재하는 소스코드를 말한다. 전역에 정의된 함수, 클래스 등의 내부코드는 포함되지 않는다.
2. 함수 코드 : 함수 내부에 존재하는 소스코드를 말한다. 함수 내부에 중첩된 함수, 클래스 등의 내부 코드는 포함되지않는다.
3. eval 코드 : 빌트인 전역 함수인 eval 함수에 인수로 전달되어 실행되는 소스코드를 말한다.
4. 모듈 코드 : 모듈 내부에 존재하는 소스코드를 말한다. 모듈 내부의 함수 클래스는 포함되지 않는다.
*/

// 실행 컨텍스트의 역할

// 전역 변수 선언
const x = 1;
const y = 2;

// 함수 정의
function foo(a) {
  // 지역변수 선언
  const x = 10;
  const y = 20;

  // 메서드 호출
  console.log(a + x + y); // 130
}

// 함수 호출
foo(100);

// 메서드 호출
console.log(x + y); // 3

// 실행 컨텍스트는 소스코드를 실행하는데 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역이다. 좀 더 구체적으로 말해, 실행 컨텍스트는 식별자(변수, 함수, 클래스 등의 이름)를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 메커니즘으로, 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다. 식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리하고 코드 실행 순서는 실행 컨텍스트 스택으로 관리한다.

// 실행 컨텍스트 스택

const x1 = 1;

function foo1() {
  const y1 = 2;

  function bar1() {
    const z1 = 3;
    console.log(x1 + y1 + z1);
  }
  bar1();
}
foo1(); // 6

// 자바스크립트 엔진은 먼저 전역 코드를 평가하여 전역 실행 컨텍스트를 생성한다. 그리고 함수가 호출되면 함수 코드를 평가하여 함수 실행 컨텍스트를 생성한다.
// 이때 생성된 실행 컨텍스트는 스택 자료구조로 관리된다. 이를 실행 *텍스트 스택* 혹은 *Call stack* 이라고 부른다.

// 렉시컬 환경 : 렉시컬 환경은 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트이다. 실행 컨텍스트 스택이 코드의 실행 순서를 관리한다면 렉시컬 환경은 스포크와 식별자를 관리한다. 즉 렉시컬 환경은 스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역할을 하는 렉시컬 스코프의 실체다.

// 실행 컨텍스트의 생성과 식별자 검색과정

var x2 = 1;
const y2 = 2;

function foo2(a) {
  var x2 = 3;
  const y2 = 4;

  function bar2(b) {
    const z2 = 5;
    console.log(a + b + x2 + y2 + z2); // 10 + 20 + 3 + 4 + 5
  }
  bar2(10);
}
foo2(20); // 42

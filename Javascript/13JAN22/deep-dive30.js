/** @format */

// ES6에서는 화살표 함수를 사용하여 "콜백 함수 내부의 this 문제"를 해결할 수 있다.

class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select'])); //  '-webkit-transition', '-webkit-user-select' ]

// 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다. 이를 'lexical this'라 한다. 이는 마치 렉시컬 스코프와 같이 화살표 함수의 this가 함수가 정의된 위치에 의해 결정된다는 것을 의미한다.

// 프로퍼티에 할당한 화살표 함수도 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this를 참조한다.

const counters = {
  num: 1,
  increase: function () {
    return ++this.num;
  },
};
console.log(counters.increase()); // 2

// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.

const counter = {
  num: 1,
  increase: () => ++this.num,
};

console.log(counter.increase()); // NaN (화살표 함수는 함수 자체의 this 바인딩을 갖지 않기 때문에 call. apply, bind 메서드를 사용해도 화살표 함수 내부의 this를 교체할 수 없다)

global.x = 1;

const normal = function () {
  return this.x;
};
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 })); // undefined

// 화살표 함수가 Function.prototype.call, apply, bind 메서드를 호출할 수 없다는 의미는 아니다. 화살표 함수는 함수 자체의 this 바인딩을 갖지 않기 때문에 this를 교체할 수 없고 언제나 상위 스코프의 this 바인딩을 참조한다.

// 메서드를 화살표 함수로 정의하는 것은 피해야한다. 화살표 함수로 메서드를 정의하여 보자

// Bad
const person = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`),
};

// sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역의 this가 가리키는 전역 객체를 가리키므로 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는 window.name과 같다.
person.sayHi(); // Hi undefined

// Good
const person1 = {
  name: 'lee',
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};
person1.sayHi(); // Hi lee

// 프로토타입도 위와 같이 화살표 함수를 쓰면 window.name과 같다.

// Bad
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);
const person2 = new Person('Lee');
person2.sayHi(); // Hi undefined

// Good : 프로퍼티를 동적 추가할 때는 ES6 메서드 정의를 사용할 수 없으므로 일반 함수를 할당한다.
function Human(name) {
  this.name = name;
}

Human.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

const person4 = new Human('Philip');
person4.sayHi(); // Hi Philip

// 일반 함수가 아닌 ES6 메서드를 동적 추가하고 싶다면 다음과 같이 객체 리터럴을 바인딩하고 프로토타입의 constructor 프로퍼티와 생성자 함수 간의 연결을 재설정한다.
function Human1(name) {
  this.name = name;
}

Human1.prototype = {
  // constructor 프로퍼티와 생성자 함수 간의 연결을 재설정
  constructor: Human1,
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};

const person5 = new Human1('Philipuuu');
person5.sayHi(); // Hi Philipuuu

// 클래스 필드 정의 제안을 사용하여 클래스 필드에 화살표 함수를 할당할 수 도 있다.
// Bad
class Alien {
  // 클래스 필드 정의 제안
  name = 'ET';
  sayHi = () => console.log(`Hello ${this.name}`);
}

const alien = new Alien();
alien.sayHi(); // Hello ET

// Good
class Alien1 {
  // 클래스 필드 정의 제안
  name = 'Alien';
  sayHi() {
    console.log(`Hello! ${this.name}`);
  }
}

const alien1 = new Alien1();
alien1.sayHi(); // Hello! Alien

// super : 화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 super를 참조하면 this와 마찬가지로 상위 스코프의 super를 참조한다.

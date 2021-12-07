/** @format */

// 19장 : 프로토타입

// 자바스크립트는 명령형, 함수형, 프로토타입 기반, 객체지향  프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어다. 간혹 자바 및 C++ 같은 클래스 기반 객체지향 프로그래밍 언어의 특징인 클래스와 상속, 캡슐화를 위한 키워드인 public, private, protected 등이 없어서 자바스크립트는 객체지향 언어가 아니라고 오해하는 경우가 많지만.. 자바스크립트는 클래스 기반 객체지향 프로그래밍 언어보다 효율적이며 더 강력한 객체지향 프로그래밍 능력을 지니고 있는 프로토타입 기반의 객체지향 프로그래밍 언어다.

const circle1 = {
  radius: 5,

  // 원의 지름
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이
  getArea() {
    return Math.PI * this.radius ** 2; // ** 거듭제곱
  },
};

console.log(circle1);
console.log(`원의 지름 : ${circle1.getDiameter()}`);
console.log('원의 둘레 : ' + circle1.getPerimeter());
console.log('원의 넓이 : ' + circle1.getArea());

// 이처럼 객체지향프로그래밍은 객체의상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나로 묶어서 논리적인 단위로 묶어 생각한다. 즉 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 만들어서 묶은 복합적인 자료구조라 생각한다.
// 객체의 상태 데이터는 property / 동작을 method 라 부른다.

// 상속과 르로토타입

function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    // Math.PI는 원주율
    return Math.PI * this.radius ** 2;
  };
}

const circle2 = new Circle(1);
const circle3 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 샏성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle2.getArea === circle3.getArea); // false
console.log(circle2.getArea());
console.log(circle3.getArea());

// 이처럼 불필요하게 메서드와 변수가 중복되는 경우 상속을 통해 중복을 없앨 수 있다. 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.

function Circles(radiuss) {
  this.radiuss = radiuss;
}

// // Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// // 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.

Circles.prototype.getArea = function () {
  return Math.PI * this.radiuss ** 2;
};

// 인스턴스 생성

const circles = new Circles(1);
const circles1 = new Circles(2);
console.log(circles.getArea === circles1.getArea);
console.log(circles.getArea());
console.log(circles1.getArea());

console.log(circles); // Circles { radiuss: 1 } 이를 보면 변수값으로 radiuss 만 보유하고 있는걸로 보아 prototype으로부터 상속을 받되 실제 존재하지 않는 것으로 보임

// 프로토타입 객체 : 프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티(메서드 포함)를 제공한다. 프로토타입을 사속받은 하위(자식) 객체는 상위 객체의 프로터리를 자신의 프로퍼티처럼 자유롭게 사용할 수 있다. 모든 객체는 [[Prototype]]라는 객체를 가진다.

// __proto__ 접근자 프로퍼티 대신 프로토타입의 참조를 취득하고  싶은 경우에는 object.getPrototypeOf 메서드를 사용하고, 프로토타입을 교체하고 싶은 경우에는 Object.setprototypeOf 메서드를 사용할 것을 권장함

const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득

Object.getPrototypeOf(obj); // obj.__proto__;
Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent;
console.log(obj.x);

// 함수 객체는 prototype 프로퍼티를 소유한다 / 일반 객체는 prototype 프로퍼티를 소유하지 않는다.

// 생성자 함수 를 제외한 일반 함수 그리고 ES6에 나온 화살표 함수, 축약 함수 등에는 아무런 의미가 없다.

function Person(name) {
  this.name = name;
}
const me = new Person('Lee');
console.log(Person.prototype === me.__proto__);
console.log(me.constructor === Person);

function foo4() {}
console.log(
  `foo4.constructor === Function =  ${foo4.constructor === Function}`
);
const foo5 = new Function('a', 'b', 'return a + b');

// 즉 자바스크립트의 원시값 이외에 대부분은 객체로 이루어져 있고 결국 모든 객체는 생성자 함수와 연결되어있다고 생각하면 된다.

// 사용자 정의 생성자 함수와 프로토타입 생성 시점

// 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다. 함수 생성시점과 함수 호이스팅에서 살펴보았듯이 함수 선언문은 런타임 이전에 자바스크립트 엔진에 의해 먼저 시행된다. 함수 선언문으로 정의된 Person 생성자 함수는 어떤 코드보다 먼저 평가되어 함수 객체가 된다. 이때 프로토타입도 더불어 생성된다.
console.log(Person1.prototype);

//생성자 함수
function Person1(name) {
  this.name = name;
}

const objs = { x: 1 };

console.log(objs.constructor === Object);
console.log(objs.hasOwnProperty('x'));

// 생성자 함수에 의해 생성된 객체의 프로토타입

function Person5(name) {
  this.name = name;
}

const mee = new Person5('Philip');
console.log(mee);

Person5.prototype.sayHello = function () {
  console.log(`Hi! my name is ${this.name}`);
};

const meee = new Person5('philipuuu');
const you = new Person5('Hime');

meee.sayHello(); // Hi! my name is philipuuu
you.sayHello(); // Hi! my name is Hime

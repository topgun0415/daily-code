/** @format */

// 프토토타입 체인

function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`hello! my name is ${this.name}`);
};

const me = new Person('philipuuu');

// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty('name'));
// Person 생성자에 의해서 만들어진 me 객체는 Person.prototype뿐만 아니라 Object.prototype도 상속받았다는 것을 의미

console.log(Object.getPrototypeOf(me) === Person.prototype);

// --------------------------------------------------------------------------------
// 오버라이딩과 프로퍼티 섀도잉

const Person1 = (function () {
  // 생성자함수
  function Person1(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person1.prototype.sayHello = function () {
    console.log(`hello! my name is ${this.name}`);
  };

  // 생성자 함수를 반환
  return Person1;
})();

const me1 = new Person1('Philip Lee');

// 인스턴스 메서드 == 오버라이딩 : 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의하여 사용하는 방식이다.
me1.sayHello = function () {
  console.log(`Hey! my name is ${this.name}`);
};

me1.sayHello(); // Hey! my name is philipuuu

// me 객체에 오버라이딩 된 메서드를 삭제하니
delete me1.sayHello;
me1.sayHello(); // hello! my name is philipuuu
// 인스턴스 메서드는 사라지고 기존의 프로토타입에 있던 메서드로 실행되었다.

// 이번에는 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다. 현재 오버라이딩 메서드에서 지워져있는 상태기때문에 프로토타입 체인에 따라서 prototype의 것이 지워질까?
delete me1.sayHello;
me1.sayHello(); // hello! my name is Philip Lee
// 되지 않는다. 이는 하위의 객체를 통해 프로토타입의 프로퍼티 변경 또는 삭제하는 것이 불가능하다는 것이다. 즉 get 엑세스는 허용되나 set 엑세스는 허용되지않는다.

// 프로퍼타입 메서드 삭제
delete Person1.prototype.sayHello;
// me1.sayHello(); TypeError: me1.sayHello is not a function

// instanceof 연산자 : 객체 instanceof 생성자 함수(우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가되고, 그렇지 않은 경우에는 false로 평가된다.)

function Human(name) {
  this.name = name;
}

const me2 = new Human('Philip');
console.log(me2 instanceof Human); // true
console.log(me2 instanceof Object); // true

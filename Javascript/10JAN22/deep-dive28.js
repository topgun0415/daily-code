/** @format */

class Person {
  // private 필드정의
  #name = '';
  constructor(name) {
    this.#name = name;
  }

  get name() {
    //private 필드를 참조하여 trim한 다음 반환한다.
    return this.#name.trim();
  }
}

const me = new Person(' Lee ');
console.log(me.name); // Lee

// 25.7.5 static 필드 정의 제안 : 클래스에는 static 키워드를 사용하여 정적 메서드를 정의 할 수 있다.

class MyMath {
  // static public 필드 정의
  static PI = 22 / 7;

  // static private 필드 정의
  static #num = 10;

  // static 메서드
  static increment() {
    return ++MyMath.#num;
  }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()); // 11

// 상속에 의한 클래스 확장

class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return 'eat';
  }

  move() {
    return 'move';
  }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() {
    return 'fly';
  }
}

const bird = new Bird(1, 5);
console.log(bird);
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly

// 동적 상속 : extends 키워드는 클래스뿐만 아니라 생성자 함수를 상속받아 클래스를 확장할 수 도 있다. 단 * extends 키워드 앞에는 반드시 클래스가 와야한다.

// 생성자 함수
function Base(a) {
  this.a = a;
}

// 생성자 함수를 상속받는 서브클래스
class Derived extends Base {}

const derived = new Derived('JS');
console.log(derived.a);

// parent class와 child class에서 constructor를 생략하면 빈 객체가 생성된다. 즉 암묵적으로 두 객체에 constructor가 생기는 것이다.

// super 키워드 : super를 호출하면 parent class의 constructor를 호출한다.

// parent 클래스
class Parent {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// child 클래스
class Child extends Parent {
  // 다음과 같이 암묵적으로 constructor가 정의된다.
  // constructor(...args){ super(...args) }
}

const child = new Child(1, 2);
console.log(child);

// 부모클래스
class Parent1 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 자식클래스
class Child1 extends Parent1 {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
}

const child1 = new Child1(1, 2, 3);
console.log(child1);

// 서브클래스에서 constructor를 생략하지 않는 경우 서브클래스의 constructor에서는 반드시 super를 호출해야 한다
class Parent2 {}
class Child2 extends Parent2 {
  constructor() {
    super(); // super 를 넣지 않게 될 경우
    console.log('constructor call'); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  }
}

const child2 = new Child2();
// super 참조 : 메서드 내에서 super를 참조하면 수퍼클래스(부모클래스)의 메서드를 호출할 수 있다.

// 수퍼클래스
class Super {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi ${this.name}`;
  }
}

// 서브클래스
class Sub extends Super {
  sayHi() {
    // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다.
    return `${super.sayHi()}. how are you doing?`;
  }
}

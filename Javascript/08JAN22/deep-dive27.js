/** @format */

// Class
// 자바스크립트는 프로토타입 기반 객체지향 언어다. 비록 다른 객체지향 언어와의 차이점에 대한 논쟁이 있긴 하지만 자바스크립트는 강력한 객체지향 프로그래밍 능력을 지니고있다. 프로토타입 기반 객체지향 언어는 클래스가 필요없는 객체지향 프로그래밍 언어다. ES5에서는 클래스 없이도 다음과 같이 생성자 함수와 프로토타입을 통해 객체지향 언어의 상속을 구현할 수 있다.

// ES5 생성자 함수
var Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  //프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log('Hi! My name is ' + this.name);
  };

  //생성자 함수 변환
  return Person;
})();

// 인스턴스 생성
const me = new Person('Philip');
me.sayHi();

// 하지만 클래스 기반 언어에 익숙한 프로그래머들에게 프로토타입은 자바스크립트의 큰 장벽을 느끼게 하는 요인으로서 ES6에서 도입된 클래스는 기존 클래스 기반 언어에 익숙한 프로그래머들이 더욱 빠르게 학습할 수 있도록 클래스 객체지향 프로그래밍 언어와 매우 흡사한 새로운 객체 생성 매커니즘을 제시한다. 클래스는 사실 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼 사용할 수 있도록 하는 문법적 설탕(syntatic sugar)이라고 볼 수 있다.

// 클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않는다. 클래스는 생성자 함수와 매우 유사하게 동작하지만 다음과 같이 몇 가지 차이가 있다.

/*
1. 클래스를 new 연산자 없이 호출하면 에러가 발행한다. 하지만 생성자 함수를 new 연산자 없이 호출하면 일반 함수로서 호출된다
2. 클래스는 상속을 지원하는 extends와 super키워드를 제공한다. 하지만 생성자 함수는 extends, super 키워드를 지원하지 않는다
3. 클래스는 호이스팅이 발생하지 않는것처럼 동작한다 하지만 함수 선언문으로 정의된 생성자 함수는 함수 호이스팅이 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다
4. 클래스 내의 모든 코드는 strict 모드가 암묵적으로 적용되고 해제할 수 없다. 하지만 생성자 함수는 암묵적으로 지정되지 않음
5. 클래스의 constructor, 프로토타입 메서드, 정적메서드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false다 (다시 말해 열거되지 않는다)
*/

// 따라서 클래스를 프로토타입 기반 객체 생성 패턴의 단순한 문법적 설탕이라고 보기보다는 새로운 객체 생성 메커니즘으로 보는 것이 좀 더 합당하다.

// 클래스 이름은 생성자 함수와 마찬가지로 파스칼케이스가 일반적

class Person1 {} // 클래스 선언문

const Person2 = class {}; // 익명 클래스 표현식
const Person3 = class Myclass {}; // 기명 클래스 표현식

class Human {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public 하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log('Hello!');
  }
}

// 인스턴스 생성
const mee = new Human('Lee');

// 인스턴스의 프로퍼티 참조
console.log(mee.name);
// 프로토타입 메서드 호출
mee.sayHi(); // Hi! My name is Lee
// 정적메서드
Human.sayHello(); // Hello!

// 클래스 호이스팅

class Person5 {}
console.log(typeof Person5); // function

// 클래스 선언문도 변수 선언, 함수 정의와 마찬가지로 호이스팅이 발생한다. 단 , 클래스는 let, const 키워드로 선언한 변수처럼 호이스팅된다.

// 인스턴스 생성 : 클래스는 생성자 함수이며, new 연산자와 함께 호출되어 인스턴스를 생성한다.

class Person6 {}

// 인스턴스 생성
const meee = new Person6(); // 클래스는 인스턴스를 생성하는 것이 유일한 존재 이유이므로 반드시 new 연산자와 함께 호출해야한다.
console.log(meee);

// 메서드 : 클래스 몸체에는 0개 이상의 메서드만 선언할 수 있다. 클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드의 세 가지가 있다.

// constructor

class Person7 {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

// constructor는 생성자 함수와 유사하지만 몇 가지 차이가 있다.
class Person8 {
  constructor() {}
  // constructor() {} SyntaxError: A class may only have one constructor (하나의 생성자만 생성 가능)
}

// constructor는 생략도 가능
class Person9 {
  // 만약에 생략하면 클래스에 다음과 같이 빈 constructor가 암묵적으로 정의된다.
  constructor() {}
}

// 빈 객체가 생성된다.
const mes = new Person9();
console.log(mes);

// return 문은 생략해야 한다.
class Person10 {
  constructor(name) {
    this.name = name;
    return {};
  }
}

const me1 = new Person10('philip');
console.log(me1); // {}

// 프로토타입 메서드 : 생성자 함수를 사용하여 인스턴스를 생성하는 경우 프로토타입 메서드를 생성하기 위해서는 다음과 같이 명시적으로 프로토타입에 메서드를 추가해야한다.

// 생성자 함수

function Person11(name) {
  this.name = name;

  //프로토 타입 메서드
  Person11.prototype.sayHi = function () {
    console.log(`Hello my name is ${this.name}`);
  };
}

const moi = new Person11('Philip');
moi.sayHi(); // Hello my name is Philip

// 위에가 기본적으로 생성자 함수를 선언해 프로토타입에 메서드를 추가해주는 방식이였다면.. 클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 prototype 프로퍼티에 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.

class Person12 {
  //생성자
  constructor(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const mois = new Person12('Philipuuu');
mois.sayHi(); // Hi! My name is Philipuuu

// 결국 클래스는 생성자 함수와 같이 인스턴스를 생성하는 생성자 함수라고 볼 수 있다. 다시 말해 클래스는 생성자 함수와 마찬가지로 프로토타입 기반의 객체생성 메커니즘이다.

// 정적 메서드 : 정적메서드는 인스턴스를 생성하지 않아도 호출 할 수 있는 메서드를 말한다.

// 생성자함수
function Person14(name) {
  this.name = name;
}

Person14.sayHi = function () {
  console.log(`Hi!`);
};

Person14.sayHi();

// const moiis = new Person14();
// moiis.sayHi(); TypeError: moiis.sayHi is not a function (정적 메서드는 인스턴스로 호출 할 수 없다)

// 클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드(클래스메서드)가 된다.

class Person15 {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // 정적메서드
  static sayHi() {
    console.log('Hi');
  }
}

Person15.sayHi(); // 클래스는 클래스 정의(클래스 선언문이나 클래스 표현식)가 평가되는 시점에 함수 객체가 되므로 인스턴스와 달리 별다른 생성 과정이 필요없다. 따라서 정적 메서드는 클래스 정의 이후 인스턴스를 생성하지 않아도 호출 할 수 있다.

// 정적 메서드와 프로토타입 메서드의 차이

/* 
1. 정적 메서드와 프로토타입 메서드는 자신이 속해있는 프로토타입 체인이 다르다.
2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다. 
3. 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있다. 
*/

class Square {
  // 정적메서드
  static area(width, height) {
    return width * height;
  }
}
console.log(Square.area(10, 10)); // 100
// 정적 메서드 area는 2개의 인수를 전달받아 면적을 계산한다. 이때 정적 메서드 are는 인스턴스 프로퍼티를 참조하지 않는다. 만약 인스턴스 프로퍼티를 참조해야 한다면 정적 메서드 대신 프로토타입 메서드를 사용해야한다.

class Squares {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  //프로토타입 메서드
  area() {
    return this.width * this.height;
  }
}

const square = new Squares(10, 10);
console.log(square.area());
console.log(square.width);

// 접근자 프로퍼티 (getter, setter)

const human = {
  //데이터 프로퍼티
  firstName: 'SeongGye',
  lastName: 'Lee',

  //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.

  //getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  //setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당
    [this.firstName, this.lastName] = name.split(' ');
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${human.firstName} ${human.lastName}`);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
human.fullName = 'Philip Lee';
console.log(human);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(human.fullName);

human.fullName = 'Philipuu Lee';
console.log(human.fullName); // Philipuu Lee

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(human, 'fullName'));
// {
//   get: [Function: get fullName],
//   set: [Function: set fullName],
//   enumerable: true,
//   configurable: true
// }

// 클래스에서도 마찬가지로 getter, setter가 사용가능
// 클래스의 메서드는 기본적으로 프로토타입 메서드가 된다. 따라서 클래스의 접근자 프로퍼티 또한 인스턴트 프로퍼티가 아닌 프로토타입의 프로퍼티가 된다.

// 클래스 필드 정의 제안 : 자바스크립트의 클래스 몸체 에는 메서드만 선언할 수 있다. 따라서 자바와 유사하게 클래스 필드를 선언하면 문법 에러가 발생한다.
class Human1 {
  // 클래스 필드 정의
  name = 'Lee';
}

const hum = new Human1(); // 문법 오류 없이 잘 동작한다
console.log(hum); // Human1 { name: 'Lee' }

// 최신 브라우저 또는 최신 Node.js에서 실행하면 문법 에러가 발생하지 않고 정상 동작한다. 자바스크립트에서도 인스턴스 프로퍼티를 마치 클래스 기반 객체지향 언어의 클래스 필드처럼 정의할 수 있는 새로운 표준 사양이 제안되어있다.

// 클래스 몸체에서 클래스 필드를 정의하는 경우 this에 클래스 필드를 바인딩해서는 안된다. this는 클래스의 constructor와 메서드 내에서만 유효하다.

/** @format */

// 프로퍼티 어트리뷰트

// 내부 슬롯과 내부 메서드는 ECMAScript 사양에 정의된 대로 구현되어 자바스크립트 엔진에서 실제로 동작하지만 개발자가 접근하도록 외부에 공개된 객체의 프로퍼티는 아니다.

// 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체 : 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
/* 
1. 프로퍼티의 값 value 
2. 값의 갱신 가능 여부 writable
3. 열거 가능 여부 enumerable 
4. 재정의 가능 여부 configurable
*/

const person = {
  name: 'Lee',
};
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// ES8에서 도입된 Object.getOwnPropertyDescriptors 메서드는 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.

const person1 = {
  name: 'Lee',
};

person1.age = 29;
console.log(Object.getOwnPropertyDescriptors(person1));

// 접근자함수 getter & setter
// 쓰는 이유는 자바의 private로 지정해둔 객체의 정보를 개발자들만 조회 및 설정하기 위해서 만든 get & set 메서드와 마찬가지이다.
const person3 = {
  firstName: 'Philip',
  lastName: 'Lee',

  get fullName() {
    // 조회하는 getter 함수
    return `${this.lastName} ${this.firstName}`;
  },

  set fullName(name) {
    // 설정하는 setter 함수
    [this.lastName, this.firstName] = name.split(' ');
  },
};

console.log(person3.firstName + ' ' + person3.lastName); // Philip Lee

person3.fullName = 'Philipuu Lee'; // Setter함수
console.log(person3);
console.log(person3.fullName); // Getter함수
let descriptor = Object.getOwnPropertyDescriptor(person3, 'firstName');
console.log(descriptor);
descriptor = Object.getOwnPropertyDescriptor(person3, 'lastName');
console.log(descriptor);

//생성자 함수에 의한 객체생성

// 1. Object 생성자 함수 : new 연산자와 함께 object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

// 빈 객체의 생성
const person2 = new Object();

// 프로퍼티 추가
person2.name = 'Lee';
person2.sayhello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(person2);
person2.sayhello();

// 생성자 함수란 new연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스(instance)라 한다.
// Object 생성자 함수 이외에도 String, Number, Boolean 등등이 있다.

// String 생성자 함수에 의한 string 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);

// Number 생성자 함수에 의한 number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const booObj = new Boolean(true);
console.log(typeof booObj);
console.log(booObj);

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const funcObj = new Function('x', 'return x + x');
console.log(typeof funcObj);
console.log(funcObj);

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date);
console.log(date);

// 생성자 함수 : 객체 리터럴에 의한 객체 생성 방식의 문제점

const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};
console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};
console.log(circle2.getDiameter()); // 20

// 원을 표현하는 두 객체가 있다. 이 두 객체의 raidus 프로퍼티 값은 다르나 getDiameter 메서드는 완전 동일하다. 만약 이런 circle 객체가 몇백개고 몇 천개라면 어떻게 될까?

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 예전에 공부했던 자바의 생성자 함수(function constructor) 랑 원리가 같음. 객체의 인수가 다르나 사용하는 메서드가 일치할경우 이렇게 위에서 Circle이라는 함수를 만들어주고 변수안에 new 연산자로 만들어 주면 parameter만 넣어서 바로 적용 가능

const circle3 = new Circle(15);
const circle4 = new Circle(20);

console.log(circle3); // Circle { radius: 15, getDiameter: [Function (anonymous)] }
console.log(circle3.getDiameter()); // 30
console.log(circle3.radius); // 15

console.log(circle4); // Circle { radius: 15, getDiameter: [Function (anonymous)] }
console.log(circle4.getDiameter()); // 40
console.log(circle4.radius); // 20

// ** this **
// this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수(self-referencing variable)다. this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

/*
일반 함수로서 호출 : 전역 객체
메서드로서 호출 : 메서드를 호출한 객체(마침표 앞의 객체)
생성자 함수로서 호출 : 생성자 함수가 (미래에) 생성할 인스턴스
*/

function foo4() {
  console.log(this);
}

foo4(); // global , 브라우저에서는 window

const obj4 = { foo4 };
obj4.foo4();
const inst = new foo4();

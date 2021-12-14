/** @format */

// 1. 일반 함수 호출 : 기본적으로 this에는 전역 객체가 바인딩된다.

function foo() {
  console.log("foo's this : ", this); // window
  function bar() {
    console.log("bar's this : ", this); // window
  }
  bar();
}
foo();

var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // {value: 100, foo: f}
    console.log("foo's this.value: ", this.value); // 100

    // 메서드 내에서 정의한 중첩 함수
    function bar() {
      console.log("bar's this: ", this); // window
      console.log("bar's this.value", this.value); // undefined
    }
    bar();
  },
};
obj.foo();

// 콜백함수가 일반함수로 호출된다면 콜백함수 내부의 this에도 전역객체가 바인딩된다. 어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩된다.

var values = 1;

const objs = {
  values: 100,
  foos() {
    console.log("foo's this: ", this); // { values: 100, foos: f}
    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      // setTimeout 함수 : 이 함수는 두 번째 인수로 전달한 시간(ms)만큼 대기한 다음, 첫번째 인수로 전달한 콜백 함수를 호출하는 타이머 함수다. 위 예제에서는 100ms를 대기한 다음, 콜백 함수를 호출한다.
      console.log("callback's this: ", this); // window
      console.log("callback's this.values", this.values); // undefined
    }, 0);
  },
};
objs.foos();
// 이처럼 일반 함수로 호출된 모든 함수(중첩 함수, 콜백 함수 포함) 내부의 this에는 전역객체가 바인딩된다.

// 2. 메서드호출 : 메서드 내부의 this에는 메서드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩된다.

const person = {
  name: 'Lee',
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
    return this.name;
  },
};
// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName()); // this.name = Lee
// 메서드는 프로퍼티에 바인딩된 함수다. 즉, person 객체의 getName 프로퍼티가 가리키는 함수 객체는 person 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체다.

const anotherPerson = {
  name: 'Kim',
};
// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;
console.log(anotherPerson.getName()); // this.name = Kim
// getName 메서드를 변수에 할당
const getName = person.getName;
console.log(getName()); // undefined : 일반 함수로 호출된 getName함수 내부의 this.name은 window.name와 같다

// 따라서 메서드 내부의 this는 프로퍼티로 메서드를 가리키고 있는 객체와는 관계가 없고 메서드를 호출한 객체에 바인딩된다.

function Person1(name) {
  this.name = name;
}

Person1.prototype.getNamed = function () {
  return this.name;
};

const me = new Person1('Philip');
// getNamed 메서드를 호출한 객체는 me다.
console.log(me.getNamed()); // Lee
Person1.prototype.name = 'Kim';
console.log(Person1.prototype.getNamed()); // Kim

// 생성자 함수 === obj.prototype (상당히 비슷하다고 보면됨)

// 3. 생성자 함수 호출 : 생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.

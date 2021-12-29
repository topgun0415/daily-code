/** @format */

const increase2 = (function () {
  // 카운트 상태 변수
  let num = 0;
  let num1 = 2;
  // 클로져
  return function () {
    // 카운터 상태를 1만큼 증가시킨다.
    console.log(num1);
    return ++num;
  };
})();

console.log(increase2()); // 1 , 2
console.log(increase2()); // 2 , 2
console.log(increase2()); // 3 , 2
console.log(increase2);

// 위 코드가 실행되면 즉시 실행함수가 호출되고 즉시 실행함수가 반환한 함수가 increase 변수에 할당된다. increase 변수에 할당된 함수는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하는 클로저다. 즉시 실행 함수는 호출된 이후 바로 사라지지만 반환한 클로저는 increase 변수에 할당되어 호출되므로 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하고 있다.

// 즉시 실행 함수는 한 번만 실행되므로 increase 가 호출될 때마다 num 변수가 재차 초기화될 일은 없을 것이다. 또한 num 변수는 외부에서 직접 접근할 수 없는 은닉된 private 변수 이므로 전역 변수를 사용했을 때와 같이 의도되지 않은 변경을 걱정할 필요도 없기 때문에 더 안정적인 프로그램이 가능하다.

// 이처럼 클로저는 상태(state)가 의도치 않게 변경되지 않도록 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.

const counter = (function () {
  // 카운트 상태 변수
  let num = 0;
  // 클로저인 메서드를 갖는 객체를 반환한다.
  // 객체 리터럴은 스코프를 만들지 않는다.
  // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
  return {
    // num: 0, 프로퍼티는 public하므로 은닉되지 않는다.
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
console.log(counter.decrease()); // 0

// 위 예제를 생성자 함수로 표현하면 다음과 같다.

const Counter = (function () {
  // 카운트 상태 변수
  let num = 0;

  function Counter() {
    // this.num = 0; 프로퍼티는 public하므로 은닉되지 않는다.
  }

  Counter.prototype.increase = function () {
    return ++num;
  };

  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter;
})();

const counterCon = new Counter();

console.log(counterCon.num); // undefined
console.log(counterCon.increase()); // 1
console.log(counterCon.increase()); // 2
console.log(counterCon.decrease()); // 1
console.log(counterCon.decrease()); // 0
console.log(counterCon.decrease()); // 0

// 예제의 num은 생성자 함수 Counter가 생성할 인스턴스의 프로퍼티가 아니라 즉시 실행 함수 내에서 선언된 변수다. 만약 num이 생성자 함수 Counter가 생성할 인스턴스의 프로퍼티라면 인스턴스를 통해 외부에서 접근이 자유로운

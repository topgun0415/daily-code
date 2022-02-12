/** @format */

// 프로미스의 정적 메서드 : Promise는 주로 생성자 함수로 사용되지만 함수도 객체이므로 메서드를 가질 수 있다. Promisesms 5가지 정적 메서드를 제공한다.

// Promise.resolove / Promise.reject : Promise.resolve와 Promise.reject 메서드는 이미 존재하는 값을 래핑하여 프로미스를 생성하기 위해 사용한다.

// * Promise.resolve는 인수로 전달받은 값을 resolve하는 프로미스로 생성한다.

const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log); // [ 1, 2, 3 ]

// 위와 동일

const resolvedPromise1 = new Promise((resolve) => resolve([1, 2, 3]));
resolvedPromise1.then(console.log); // [ 1, 2, 3 ]

// * Promise.reject 메서드는 인수로 전달받은 값을 reject하는 프로미스를 생성한다.

// const rejectedPromise = Promise.reject(new Error('404 Error'));
// rejectedPromise.then((_, rejected) => console.log);
// 위와 같은 then을 사용한 예외처리는 하지 않느 것이 좋은 듯하다.

const rejectedPromise = Promise.reject(new Error('404 Error'));
rejectedPromise.catch(console.log);

// * Promise.all : 여러 개의 비동기 처리를 모두 병렬 처리할 때 사용한다.

const requestData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));

const requestData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));

const requestData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000));

const res = [];
requestData1()
  .then((data) => {
    res.push(data);
    return requestData2();
  })
  .then((data) => {
    res.push(data);
    return requestData3();
  })
  .then((data) => {
    res.push(data);
    console.log(res); // [ 1, 2, 3 ] 6초 소요
  })
  .catch((error) => {
    console.error(error);
  });

// 위 예제는 세 개의 비동기 처리를 순차적으로 콜백함수로 불러와 처리한다. 즉 앞선 비동기 처리가 완료하면 다음 비동기 처리를 수행한다. 따라서 위 예제는 첫번째 비동기 처리에 3초, 두 번째 비동기 처리에 2초, 세번째 비동기 처리에 1초가 소요되어 총 6초 이상이 소요된다. 그런데 위 에제의 경우 세 개의 비동기 처리는 서로 의존하지 않고 개별적으로 수행된다. 즉 앞선 비동기 처리 결과를 다음 비동기 처리가 사용하지 않는다. 따라서 위 에제의 경우 세 개의 비동기 처리를 순차적으로 처리할 필요가 없다.

const requestData4 = () =>
  new Promise((resolve) => setTimeout(() => resolve(4), 3000));

const requestData5 = () =>
  new Promise((resolve) => setTimeout(() => resolve(5), 2000));

const requestData6 = () =>
  new Promise((resolve) => setTimeout(() => resolve(6), 1000));

// 세 개의 비동기 처리를 병렬로 처리
Promise.all([requestData4(), requestData5(), requestData6()])
  .then(console.log) // [ 1, 2, 3] 3초하고 조금 더 소요
  .catch(console.error);

// Promise.all 메서드는 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. 그리고 전달받은 모든 프로미스가 모두 fulfilled 상태가 되면 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환함
// 또한 Promise.all 메서드는 인수로 전달받은 배열의 프로미스가 하나라도 rejected 상태가 되면 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료한다.

// * Promise.race : Promise.race 메서드는 Promise.all 메서드와 동일하게 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. Promise.race 메서드는 Promise.all 메서드처럼 모든 프로미스가 fulfilled 상태가 되는 것을 기다리는 것이 아니라 가장 먼저 fullfilled 상태가 된 프로미스의 처리 결과를 resolve하는 새로운 프로미스를 반환한다.

Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1 3초
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2 2초
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3 1초
])
  .then(console.log) // 3이 먼저 출력
  .catch(console.error);

// Promise.all 메서드와 마찬가지로 인수로 전달받은 배열의 프로미스가 하나라도 rejected 상태가 되면 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료한다.

// * Promise.allSettled : 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. 그리고 전달받은 프로미스가 모두 settled 상태(비동기 처리가 수행된 상태, 즉 fulfilled 또는 rejected상태)가 되면 처리 결과를 배열로 반환한다.

Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error'), 1000))
  ),
]).then(console.log);

// [ { status: 'fulfilled', value: 1 }, { status: 'rejected',  reason: Error: Error} ]

// Promise.allSettled 메서드가 반환한 배열에는 fulfilled 또는 rejected 상태와는 상ㅇ관없이 Promise.allSettled 메서드가 인수로 전달받은 모든 프로미스들의 처리 결과가 모두 담겨 있다.
// 프로미스가 fulfilled 상태인 경우 비동기 처리 상태를 나타내는 status 프로퍼티와 처리 결과를 나타내는 value 프로퍼티를 갖는다
// 프로미스가 rejected 상태인 경우 비동기 처리 상태를 나타내는 status 프로퍼티와 에러를 나타내는 reason 프로퍼티를 갖는다

// * 마이크로태스크 큐

setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));

// 2
// 3
// 1

// 프로미스 후속 처리 메서드도 비동기로 동작하므로 1 - 2 - 3의 순으로 출력될 것처럼 보이지만 2 - 3 - 1의 순으로 출력된다. 그 이유는 프로미스의 후속 처리 메서드의 콜백 함수는 태스크 큐가 아니라 마이크로태스크 큐에 저장되기 때문이다.
// 마이크로 태스크 큐는 태스크 큐와는 별도의 큐다. 마이크로태스크 큐에는 프로미스의 후속 처리 메서드의 콜백 함수가 일시 저장된다. 그 외의 비동기 함수의 콜백 함수나 이벤트 핸들러 태스크 큐에 일시 저장된다.
// 콜백 함수나 이벤트 핸들러를 일시 저장한다는 점에서 태스크 큐와 동일하지만 * 마이크로태스크 큐는 태스크 큐보다 우선순위가 높다 *. 즉 이벤트 루프는 콜 스택이 비면 먼저 마이크로태스크 큐에서 대기하고 있는 함수를 가져와 실행한다. 이후 마이크로태스크 큐가 비면 태스크 큐에서 대기하고 있는 함수를 가져와 실행한다.

// * 재너레이터(generator)란 ?
// ES6에서 도입된 재너레이터(generator)는 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수다. 제너레이터와 일반 함수의 차이는 다음과 같다

// 1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다
// 2. 재너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다.
// 3. 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.

// 재너레이터 함수의 정의 : 재너레이터 함수는 function* 키워드로 선언한다. 그리고 하나 이상의 yield 표현식을 포함한다. 이것을 제외하면 일반 함수를 정의하는 방법과 같다

// 재네레이터 함수 선언문
function* genDecFunc() {
  yield 1;
}

// 재네레이터 함수 표현식
const genExpFunc = function* () {
  yield 1;
};

// 재너레이터 메서드
const obj = {
  *genObjMethod() {
    yield 1;
  },
};

// 재너레이터 클래스 메서드
class MyClass {
  *genClsMethod() {
    yield 1;
  }
}
// 애스터리스크(*)의 위치는 function 키워드와 함수 이름 사이라면 어이든지 상관없다. 하지만 일관성을 유지하기 위해서는 function 바로 뒤에 붙일 것을 권장

// * 제너레이터 함수는 화살표 함수로 정의할 수 없다
// const genArrowFunc = * () => {
//   yield 1;
// }
// SyntaxError: Unexpected token '*'

// * 재너레이터 객체 : 재너레이터 ㅎ마수를 호출하면 일반 함수처럼 함수 코드 블록을 실행하는 것이 아니라 재너레이터 객체를 생성해 반환한다. 재너레이터 함수가 반환한 재너레이터 객체는 이터러블이면서 동시에 이터레이터다.

function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

// 재너레이터 함수를 호출하면 재너레이터 객체를 반환

const generator = genFunc();
// 재너레이터 객체는 이터러블이면서 동시에 이터레이터다.
// 이터러블은 Symbol.iterator 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체다

console.log(generator); // Object [Generator] {}
console.log(Symbol.iterator in generator); // true
console.log('next' in generator); // true
console.log(typeof generator); // object

// 재너레이터 객체는 next 메서드를 갖는 이터레이터이지만 이터레이터에는 없는 return, throw 메서드를 갖는다. 재너레이터 객체의 세 개의 메서드를 호출하면 다음과 같이 동작한다

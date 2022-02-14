/** @format */

// * 재너레이터 객체 : 재너레이터 함수를 호출하면 일반 함수처럼 함수 코드 블록을 실행하는 것이 아니라 재너레이터 객체를 생성해 반환한다. 재너레이터 함수가 반환한 재너레이터 객체는 이터러블이면서 동시에 이터레이터다.

function* getFunc() {
  yield 1;
  yield 2;
  yield 3;
}
// 제너레이터 함수를 호출하면 제너레이터 객체를 반환함
const generator = getFunc();
console.log(generator); // Object [Generator] {}

// 재너레이터 객체는 next 메서드를 갖는 이터레이터이지만 이터레이터에는 없는 return, throw 메서드를 갖는다

/*
1. next 메서드를 호출하면 제너레이터 함수의 yield 표현식까지 코드 블록을 실행하고 yield된 값을 value 프로퍼티 값으로, false를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환
2. return 메서드를 호출하면 인수로 전달받은 값을 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환
*/

function* getFunc1() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.error(e);
  }
}

const generator1 = getFunc1();
console.log(generator1.next()); // { value: 1, done: false }
console.log(generator1.return('End')); // { value: 'End', done: true }

// throw 메서드를 호출하면 인수로 전달받은 에러를 발생시키고 undefined를 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환

function* getFunc2() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.error(e);
  }
}

const generator2 = getFunc2();
console.log(generator2.next()); // { value: 1, done: false }
console.log(generator2.throw('Error!')); // { value: undefined, done: true }

// 재너레이터의 일시 중지와 재개 : 재너레이터는 yield 키워드와 next 메서드를 통해 실행을 일시 중지했다가 필요한 시점에 다시 재개할 수 있다. 일반함수는 호출이후 제어권을 함수가 독점하지만 재너레이터 함수는 호출자에게 제어권을 양도하여 필요한 시점에 함수 실행을 재개할 수 있다.

function* getFunc3() {
  try {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  } catch (e) {
    console.error(e);
  }
}

const generator3 = getFunc3();
console.log(generator3.next()); // { value: 1, done: false } 이터레이터 리절트 객체를 반환
console.log(generator3.next()); // { value: 2, done: false }
console.log(generator3.next()); // { value: 3, done: false }
console.log(generator3.next()); // { value: 4, done: false }
console.log(generator3.next()); // { value: undfined, done: true }

function* getFuncEx() {
  const x = yield 1;

  const y = yield x + 10;

  return x + y;
}

const generator4 = getFuncEx(0);
// x 변수에는 아직 아무것도 할당되지 않았다. 이때 yield된 값 1은 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에 할당된다.
console.log(generator4.next()); // { value: 1, done: false }
// 다음으로 next 메서드에 넣은 인수 10은 그제서야 x 변수에 할당되어진다. 그리고 yield가 실행되며 x(10) + 10 이 실행되어지고 value 이터레이터 리절트 객체 value에 할당됨
console.log(generator4.next(10)); // { value: 20, done: false }
// 다음 next 메서드에 넣은 20 은 y 변수에 할당되며 리턴 값인 10 + 20 이 실행되어져 value 값으로 할당되게 되고 done은 true를 마치면서 제너레이터가 종료되게 된다.
console.log(generator4.next(20)); // { value: 30, done: true }

// ** Async / Await : 재너레이터를 사용해서 비동기 처리를 동기 처리처럼 동자하도록 구현했지만 코드가 무척이나 장황해지고 가독성도 나빠졌다. ES8에서는 재너레이터보다 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 동작하도록 구현할 수 있는 async/await가 도입

// 우선 이 둘은 Promise를 기반으로 동작한다. async / await 를 사용하면 프로미스의 then / catch / finally 후속 처리 메서드에 콜백함수를 전달해서 비동기 처리 결과를 후속 처리할 필요없이 마치 동기 처리처럼 프로미스를 사용할 수 있다. 다시말해 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.

// async 함수 : await 키워드는 반드시 async 함수 내부에서 사용해야한다. async 함수는 async 키워드를 사용해 정의하며, 언제나 프로미스를 반환한다. async 함수가 명시적으로 프로미스를 반환하지 않더라도 async 함수는 암묵적으로 반환값을 resolve하는 프로미스를 반환한다.

// async 함수 선언문
async function foo(n) {
  return n;
}
foo(1).then((v) => console.log(v)); // 1

// async 함수 표현식
const bar = async function (n) {
  return n;
};
bar(2).then((v) => console.log(v)); // 2

// async 화살표 함수
const baz = async (n) => n;
baz(3).then((v) => console.log(v)); // 3

// async 메서드
const obj = {
  async foo(n) {
    return n;
  },
};
obj.foo(4).then((v) => console.log(v)); // 4

// async 클래스 메서드
class MyClass {
  async bar(n) {
    return n;
  }
}

const myclass = new MyClass();
myclass.bar(5).then((v) => console.log(v)); // 5
// 클래스의 constructor 메서드는 async 메서드가 될 수 없다. 클래스의 constructor 메서드는 인스턴스를 반환해야 하지만 async 함수는 언제나 프로미스를 반환해야한다.

// * await : await 키워드는 프로미스가 settled 상태(비동기 처리가 수행된 상태)가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve 한 처리 결과를 반환한다. await 키워드는 반드시 프로미스 앞에서 사용해야한다.

// const fetch = require('node-fetch');

// const getGithubUserName = async (id) => {
//   const res = await fetch(`https://api.github.com/users/${id}`);
//   const { name } = await res.json();
//   console.log(name);
// };

// getGithubUserName('ungmo2');

// await 키워드는 프로미스가 settled 상태가 될 때까지 대기한다고 했다. 따라서 fetch 함수가 수행한 HTTP 요청에 대한 서버의 응답이 도착해서 fetch 함수가 반환한 프로미스가 settled 상태가 될 때까지 1은 대기하게 된다. 이후 프로미스가 settled 상태가 되면 프로미스가 resolve한 처리 결과가 res 변수에 할당된다.

async function fnExample() {
  const a = await new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(1);
    }, 3000);
  });
  const b = await new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const c = await new Promise((resolve) => setTimeout(() => resolve(3), 1000));

  console.log([a, b, c]);
}

fnExample(); // [ 1, 2, 3]  총 6초 소요

// await new Promise(function (resolve) {
//   setTimeout(function () {
//     return resolve(1), 3000;
//   });
// });

// await new Promise((resolve) => setTimeout(() => resolve(1), 3000));

// 모든 프로미스에 await 키워드를 사용하는것은 주의해야한다. 위 에제의 foo 함수는 종료될 때까지 약 6초가 소요된다. 첫 번째 프로미스는 settled 상태가 될 때까지 3초, 두번째 프로미스는 settled 상태가 될 때까지 2초, 세번째는 1초가 소요된다. 그런데 foo 함수가 수행하는 3개의 비동기 처리는 서로 연관이 없이 개별적으로 수행되는 비동기 처리이므로 앞선 비동기 처리가 완료될 때까지 대기해서 순차적으로 처리할 필요가 없다.

async function fnExample2() {
  const res1 = await Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(10), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(9), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(8), 1000)),
  ]);
  console.log(res1);
}

fnExample2(); // [ 10, 9, 8 ] 3초 소요

// 다음의 fnExample3 함수는 앞선 비동기 처리의 결과를 가지고 다음 비동기 처리를 수행해야한다. 따라서 비동기 처리의 순서가 보장되어야 하므로 모든 프로미스에 await 키워드를 써서 순차적으로 처리할 수 밖에 없다.
async function fnExample3(n) {
  const a = await new Promise((resolve) => setTimeout(() => resolve(n), 3000));
  const b = await new Promise((resolve) =>
    setTimeout(() => resolve(a + 5), 2000)
  );
  const c = await new Promise((resolve) =>
    setTimeout(() => resolve(b + 5), 1000)
  );
  console.log([a, b, c]);
}
fnExample3(1);

// 에러 처리 : 비동기 처리를 위한 콜백 패턴의 단점 중 가장 심각한 것은 에러처리가 곤란하다는 것이다. 에러 처리의 한계에서 살펴보았듯이 에러는 호출자 방향으로 전파된다. 즉 콜 스택의 아래 방향(실행 중인 컨택스트가 푸시되기 직전에 푸시된 실행 컨택스트 방향)으로 전파된다. 하지만 비동기 함수의 콜백 함수를 호출한 것은 비동기 함수가 아니기 때문에 try...catch문을 사용해 에러를 캐치할 수 없다.

// async/await 에서 에러처리는 try...catch문을 사용할 수 있다. 콜백 함수를 인수로 전달받는 비동기 함수와 달리 프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있기 때문에 호출자가 명확하다.

// const fetch = require('node-fetch');

// const foo = async () => {
//   try {
//     const wrongUrl = 'https://wrong.url';
//     const response = await fetch(wrongUrl);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// };

// foo();

// 위 예제에서 foo 함수의 catch 문은 HTTP 통신에서 발생한 네트워크 에러뿐 아니라 try 코드 블록 내의 모든 문에서 발생한 일반적인 에러가지 모두 캐치할 수 있다.
// * 만약에 async 함수내에서 catch 문을 사용해서 에러 처리를 하지 않으면 async 함수는 발생한 에러를 reject하는 프로미스를 반환한다. 따라서 async 함수를 호출하고 Promise.prototype.catch 후속 처리 메서드를 사용해 에러를 캐치할 수도 있다

// const fetch = require('node-fetch');

// const foo = async () => {
//   const wrongUrl = 'https://wrong.url';
//   const response = await fetch(wrongUrl);
//   const data = await response.json();
//   return data;
// };

// foo().then(console.log).catch(console.error);

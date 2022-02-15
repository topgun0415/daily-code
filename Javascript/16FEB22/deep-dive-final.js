/** @format */

// * Async & Await Practice

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return '🍎';
}

async function getGrape() {
  await delay(2000);
  return '🍇';
}

// 두개의 데이터를 받아오는 것은 상호호환적이지가 않기 때문에 굳이 이렇게 할 필요는 없다.
async function pickFruits() {
  const apple = await getApple();
  const grape = await getGrape();

  return `${apple} + ${grape}`;
}

pickFruits().then(console.log); // 🍎 + 🍇  5초 소요

async function pickFruitsFaster() {
  const applePromise = getApple();
  const grapePromise = getGrape();
  const apples = await applePromise;
  const grapes = await grapePromise;
}

// 하지만 위에처럼 저렇게 쓰지않고 Promise.all() 혹은 Promise.race() Promise API를 사용하여 더 쉽게 보기 좋게 나타낸다.

// 에러 처리

// * 에러처리의 필요성 : 에러가 발생하지 않는 코드를 작성하는 것은 불가능하다. 따라서 에러는 언제나 발생할 수 잇다. 발생한 에러에 대해 대처하지 않고 방치하면 프로그램은 강제 종료된다.

console.log('[Start]');
// foo(); ReferenceError: foo is not defined
console.log('[End]');

// try.. catch문을 사용해 발생한 에러에 적절하게 대응하면 프로그램이 강제 종료되지 않고 계속해서 코드를 실행시킬 수 있다.
console.log('[Start]');

try {
  foo();
} catch (err) {
  console.error('[에러 발생]', err); // [에러 발생] ReferenceError: foo is not defined
}
console.log('[End]');

// 직접적으로 에러를 발생하지는 않는 예외적인 상황이 발생할 수도 있다. 예외적인 상황에 적절하게 대응하지 않으면 에러로 이어질 가능성이 크다.

// try ... catch ... finally 문 : 기본적으로 에러 처리를 구현하는 방법은 크게 두 가지가 있다.

// 1. 예외적인 상황이 발생하면 반환하는 값을 if문이나 단축 평가 또는 옵셔널 체이닝 연산자를 통해 확인해서 처리하는 방법과 에러처리 코드를 미리 등록해두고 에러가 발생하면 에러 처리 코드로 점프하도록 하는 방법도 있다.
// 2. try...catch...finally 문은 두 번째 방법이다.

console.log('[Start-1]');
try {
  foo();
} catch (err) {
  console.error(err); // ReferenceError: foo is not defined
} finally {
  console.log('finally');
}
console.log('[End-1]');

// Error 객체 : Error 생성자 함수는 에러 객체를 생성한다. Error 생성자 함수에는 에러를 상세히 설명하는 에러 메시지를 인수로 전달할 수 있다.

const error = new Error('invalid');

// Error : 일반적 에러객체
// SyntaxError : 자바스크립트 문법에 맞지 않는 문을 해석할 때 발생하는 에러 객체
// ReferneceError : 참조할 수 없는 식별자를 참조했을 때 발생하는 에러 객체
// TypeError : 피연산자 또는 인수의 데이터 타입이 유효하지 않을 때 발생하는 에러객체
// RagneError : 숫자값의 허용 범위를 벗어났을 때 발생하는 에러객체
// URIError : encodeURI 또는 decodeURI 함수에 부적절한 인수를 전달했을 때 발생하는 에러 객체
// EvalError : eval 함수에서 발생하는 에러 객체

// * throw문 : Error 생성자 함수로 에러 객체를 생성한다고 에러가 발생하는 것은 아니다. 즉, 에러 객체 생성과 에러 발생은 의미가 다르다.

try {
  // 에러 객체를 생성한다고 에러가 발생하는 것은 아니다.
  new Error('something wrong');
} catch (error) {
  console.log(error);
}
// 에러를 발생시키려면 try 코드 블록에서 throw 문으로 에러 객체를 던져야한다.
// throw문의 표현식은 어떤 값이라도 상관없지만 일반적으로 에러 객체를 지정한다. 에러를 던지면 catch 문의 에러 변수가 생성되고 던져진 에러 객체가 할당된다. 그리고 catch 코드 블록이 실행되기 시작한다.

try {
  throw new Error('Something wrong!!');
} catch (error) {
  console.log(error);
}
// Error: Something wrong!!

// 외부에서 전달받은 콜백 함수를 n번 만큼 반복 호출한다
const repeat = function (fn, n) {
  if (typeof fn !== 'function') throw new TypeError('fn must be function');

  for (let i = 0; i < n; i++) {
    fn(i);
  }
};

try {
  repeat(1, 2);
} catch (err) {
  console.error(err);
}
// TypeError: fn must be function

// 에러의 전파 : 프로미스의 45.1.2절 '에러처리의 한계'에서 살펴본 바와 같이 에러는 호출자 방향으로 전파된다. 즉 콜 스택 아래 방향(실행중인 실행 컨텍스트가 푸시되기 직전에 푸시된 실행 컨택스트 방향)으로 전파된다 다음 에제를 살펴보자

const fooError = () => {
  throw Error('foo에서 발생한 에러'); // 4
};

const barError = () => {
  fooError(); // 3
};

const bazError = () => {
  barError(); // 2
};

try {
  bazError(); // 1
} catch (err) {
  console.error(err);
}
// Error: foo에서 발생한 에러

// 1에서 bazError함수를 호출하면 2에서 barError함수가 호출되고 3에서 foo 함수가 호출되고 foo 함수는 4에서 에러를 throw한다. 이때 foo 함수가 throw한 에러는 다음과 같이 호출자에게 전파되어 전역에서 캐치된다.

// 이처럼 throw된 에러를 캐치하지 않으면 호출자 방향으로 전파된다. 이때 throw된 에러를 캐치하여 적절하게 대응하면 프로그램을 강제 종료시키지 않고 코드의 실행 흐름을 복구할 수 있다. throw된 에러를 어디에서도 캐치하지 않으면 프로그램은 강제 종료된다.

// 주의할 것은 비동기 함수인 setTimeout이나 프로미스 후속 처리 메서드의 콜백 함수는 호출자가 없다는 것이다. setTimeout이나 프로미스 후속 처리 메서드의 콜백 함수는 태스크 큐나 마이크로태스크 큐에 일시 저장되었다가 콜 스택이 비면 이벤트 루프에 의해 콜 스택으로 푸시되어 실행된다. 이때 콜 스택에 푸시된 콜백 함수의 실행 컨텍스트는 콜 스택의 가장 하부에 존재하게 된다. 따라서 에러를 전파할 호출자가 존재하지 않는다. 그렇기 때문에 비동기는 비동기 함수 내부에서 try catch문을 사용해야한다. 위에서 사용하면 try 문이 실행되고 비동기 함수는 브라우저 api & 백그라운드를 통해 태스크큐로 들어가게되며, 이는 try문이 완료되면서 콜스택이 비어버리게 된다.

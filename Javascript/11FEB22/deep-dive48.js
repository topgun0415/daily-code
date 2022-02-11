/** @format */

/*

* 비동기 콜백함수에서의 예외처리 : setTimeout는 비동기함수로서 콜스택에 올라가자마자 바로 태스크큐로 가서 대기하는도중 예외처리가 발생하지 않아 try문은 종료되게 된다.
try {
  setTimeout(() => {
    throw new Error('404 Error!');
  }, 1000);
} catch (e) {
  console.error('Catched Error', e);
}

* 비동기 콜백함수에서의 예외처리 해결방법 : setTimeout 콜백함수에 예외처리를 넣어주면 자연스럽게 해결가능
try {
  setTimeout(() => {
    try {
      throw new Error('404 Error!');
    } catch (e) {
      console.error('catched Error', e);
    }
  }, 1000);
} catch (e) {
  console.error('Catched Error', e);
} 

*/

// Promise : 자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용한다. 하지만 전통적인 콜백 패턴은 콜백 헬로 인해 가독성이 나쁘고 비동기 처리 중 발생한 에러의 처리가 곤란하여 여러 개의 비동기 처리를 한번에 처리하는데도 한계가 있다. ES6에서는 비동기 처리를 위한 또 다른 패턴으로 프로미스를 도입했다. 프로미스는 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을 명화갛게 표현할 수 있다는 장점이 있다.

// const promise = new Promise((resolve, reject) => {
//   // Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행한다.
//   if(/* 비동기 처리 성공 */){
//     resolve('result');
//   } else { /* 비동기 처리 실패 */
//     reject('Error')
//   }
// });

// pending : 비동기 처리가 아직수행되지 않은 상태
// fulfilled : 비동기 처리가 수행된 상태(성공)
// rejected : 비동기 처리가 수행된 상태(실패)

// 비동기 처리 성공 : resolove 함수를 호출해 프로미스를 fulfilled 상태로 변경
// 비동기 처리 실패 : reject 함수를 호출해 프로미스를 rejeceted 상태로 변경

// Promise는 비동기 처리 상태와 처리 결과를 관리하는 객체다.

// 프로미스의 후속 처리 메서드 : 프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리를 해야한다. 예를 들어 프로미스가 fullfilled 상태가 되면 프로미스의 처리 결과를 가지고 무언가를 해야하고, 프로미스가 rejected 상태가 되면 프로미스 처리 결과(에러)를 가지고 에러 처리를 해야한다. 이를 위해 프로미스는 후속 메서드 then, catch, finally를 제공한다. 프로미스의 비동기 처리 상태가 변화하면 후속 처리 메서드에 인수로 전달한 콜백함수가 선택적으로 호출된다. 이때 후속 처리 메서드의 콜백 함수에 프로미스의 처리 결과가 인수로 전달된다.

// Promise.prototype.then : 이 메서드는 두 개의 콜백 함수를 인수로 전달받는다. 첫 번째 콜백함수는 프로미스 fullfilled 상태가 되면 호출된다 이때 콜백 함수는 프로미스의 비동기 처리 결과를 인수로 전달받음 / 두번째 콜백함수는 프로미스가 rejected 상태가 되면 호출된다. 이때 콜백 함수는 프로미스의 에러를 인수로 전달받음

new Promise((resolve) => resolve('fulfilled')).then(
  (v) => console.log(v),
  (e) => console.error(e)
);

new Promise((_, reject) => reject(new Error('rejected'))).then(
  ((v) => console.log(v), (e) => console.error(e))
);

// then 메서드는 언제나 프로미스를 반환한다. 만약 then 메서드의 콜백 함수가 프로미스를 반환하면 그 프로미스를 그대로 반환하고, 콜백함수가 프로미스가 아닌 값을 반환하면 그 값을 암묵적으로 reslove 또는 reject 하여 프로미스를 생성해 반환한다

// Promise.prototype.catch : catch 메서드는 한 개의 콜백 함수를 인수로 전달받음. catch 메서드의 콜백 함수는 프로미스가 rejeceted 인 경우에만 호출됨

new Promise((_, reject) => reject(new Error('404 Error!!'))).catch((e) =>
  console.error(e)
);

// Promise.prototype.finally : finally 메서드는 한 개의 콜백 함수를 인수로 전달받음. Finally 메서드의 콜백 함수는 프로미스 성공 또는 실패와 상관없이 무조건 한번 호출됨. 이는 프로미스의 상태와 상관없이 공통적으로 수행해야 할 처리 내용이 있을 때 유용하다. finally 메서드도 then/catch 메서드와 마찬가지로 언제나 프로미스를 반환함
// new Promise(() => {}).finally(() => console.log('finally'));

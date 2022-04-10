/** @format */

setInterval(() => {
  console.log('Start');
  try {
    console.log('Hello world!');
    throw new Error();
  } catch (err) {
    console.error(err);
  }
}, 1000);

// 이처럼 에러가 발생하더라도 코드가 실행하기는 한다.
// Start
// Hello world!
// Error
//     at Timeout._onTimeout (/Users/philipuuu/Dev/Git/daily-code/Node.js/10APR22/error-catch.js:7:11)
//     at listOnTimeout (internal/timers.js:557:17)
//     at processTimers (internal/timers.js:500:7)

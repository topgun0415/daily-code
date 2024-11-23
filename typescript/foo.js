function greet(person, date) {
  console.log(
    'Hello '.concat(person, ', today is ').concat(date.toDateString, '!')
  );
}
greet('Maddison', new Date());
var msg = 'hello Typescript';
console.log(msg);

function welcomePeople(x) {
  if (Array.isArray(x)) {
    // 여기에서 'x'는 'string[]' 타입입니다
    console.log('Hello, ' + x.join(' and '));
  } else {
    // 여기에서 'x'는 'string' 타입입니다
    console.log('Welcome lone traveler ' + x);
  }
}

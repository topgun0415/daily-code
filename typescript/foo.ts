function greet(person: String, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString}!`);
}

greet('Maddison', new Date());

let msg = 'hello Typescript';
console.log(msg);

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // 여기에서 'x'는 'string[]' 타입입니다
    console.log('Hello, ' + x.join(' and '));
  } else {
    // 여기에서 'x'는 'string' 타입입니다
    console.log('Welcome lone traveler ' + x);
  }
}

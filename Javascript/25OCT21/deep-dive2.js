/** @format */
const x = 2;
const y = '2';

console.log(x == y);
console.log(x === y);

console.log(typeof function () {});

const num = Math.pow(Math.pow(2, 2), 2); // === 2**2**2
console.log(num);
console.log(2 * 5 ** 2); //지수연산자는 이항연산자 중에서 우선순위가 가장 높다

// 블록문
{
  var foo = 10;
}

// 삼항연산자
let foo1 = 2;
let result = foo1 % 2 ? 'odd' : 'even';
console.log(result);
let result1 = foo1 ? (foo1 % 2 ? 'odd' : 'even') : 'odd'; // foo1이 짝수인지 홀수인지 맞추는 삼항연산자
console.log(result1);

// switch문
/*
switch (표현식)
  case 표현식1:
    switch 문의 표햔식과 표현식1이 일치하면 실행될 문;
    break; 
  case 표현식2:
    switch 문의 표햔식과 표현식2이 일치하면 실행될 문;
    break; 
  defalut:
    switch문의 표현식과 일치하는 case 문이 없을 때 실행될 문;
*/

var month = 2;
var monthName;

switch (month) {
  case 1:
    monthName = 'Jan';
    break;
  case 2:
    monthName = 'Feb';
    break;
  case 3:
    monthName = 'Mar';
    break;
  case 4:
    monthName = 'Apr';
    break;
  default:
    monthName = 'inValid month';
}
console.log(monthName);

// 무한루프 : for (;;) {}
//대체적으로 for문은 반복횟수가 명확할때 사용하고 , 이외에는 while문을 사용한다

// do .. while문
let count = 0;
do {
  console.log(`count = ${count}`);
  count++;
} while (count < 3); // 이럴경우 선언된 count값이 바로 while문에 대입됨 즉 do 문이 총 3회를 돌게 되어있는거임

//break문

foo: {
  console.log('ba');
  break foo;
  console.log('bo');
}
console.log('boo');

let string = 'Hello world!';
console.log(string[0]);
console.log(string[2]);
console.log(typeof string);

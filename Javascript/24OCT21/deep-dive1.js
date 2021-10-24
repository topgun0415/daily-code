/** @format */

// 6.3.2 표현식삽입

var last = 'Lee';
var first = 'Seonggye';
console.log('My name is ' + first + last + '.');
console.log(`My name is ${first}${last}.`);

console.log(`1 + 2 = ${1 + 2}`); // 백틱을 사용하여 출력한 값
console.log('1 + 2 = ${1 + 2}');

// 7.1.2 단항 산술 연산자

var x = 1;
x++;
console.log('x = ' + x);
x--;
console.log('x = ' + x);

var x = 5,
  result;
result = x++;
console.log(result, x);
result = ++x;
console.log(result, x);
result = x--;
console.log(result, x);
result = --x;
console.log(result, x);

var y = '1';
console.log(typeof +y); //number
var z = true;
console.log(typeof +z); // 1 number

// 할당연산자

var str = 'My name is ';
str += 'Lee';
console.log('str = ' + str);

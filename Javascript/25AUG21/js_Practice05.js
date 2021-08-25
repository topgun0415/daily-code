// 2.3.3 변수 활용하기 

let string = "Hello, variable";
let string2 = string;
console.log("string2 = " + string2);

let numbers = 3;    // number 이라는 변수에 5를 더 더해 대입하고 싶다면...
numbers = numbers + 5;
console.log("numbers = " + (numbers));

// 하지만 이렇게 하는건 불필요한 코드로 인해 코드가 길어지게 된다.

let number = 3;
number += 5;
console.log("number = " + (number));

number -= 3;
console.log("number = " + (number));

// 변수는 게산된 값을 저장할 때도 사용하지만 중복을 줄일 때도 사용함 

// 2.3.4 상수 만들기 

// let 외에도 변수를 선언하는 예약어로 const 와 var가 있다. (const는 상수 / var은 현재 let과 같으며, 과거의 자바스크립트에서 변수를 선언할때 사용한 명령어)

let str1 = "엄청 긴 문자열입니다.";
const str2 = "엄청 긴 문자열입니다.";

str1 = "엄청 길지않은 문자열입니다.";
// str2 = "엄청 길지않은 문자열입니다."; 에러가 발생하여 코드 출력 불가능 
console.log(str1);
// console.log(str2);

const str3 = "상수입니다";
// const str3 = "아닙니다. 상수가 아닙니다"; 에러 발생!!
console.log(str3);

// 2.3.5 var 알아보기
// 마지막으로 var(variable)를 사용해 변수를 선언하는 방법이 있다. 예전에는 많이 사용했지만, 다소 이해하기 어려운 특성 때문에 const와 let을 사용해 변수를 선언하고 있다.

// let lett = "LetItbe"; let lett = "Letitbe";  에러발생!! 
var variable = "다시 선언할 수 있습니다."; var variable = "다시 선언했지롱";
console.log(variable);
// 변수를 선언하는 부분에서는 같으나 , let과 다르게 다시 variable 변수 선언이 가능함


let undefined = 5;
console.log(undefined); // 여기에서는 가능하나 콘솔창에서는 사용 불가
//let으로 웹에서 변수를 선언할 때 undefined , Infinity , let 과 같은 변수명을 사용할수 없다. 하지만 var 는 가능
var let = 3;
var Infinity = 2;

// 1분 퀴즈

let a = 3;
let b = 5;
let tmp;

tmp = a;
a = b;
b = tmp;

console.log("a = " + a);
console.log("b = " + b);
console.log("tmp = " + tmp);

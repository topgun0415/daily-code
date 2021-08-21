// 문자열

const hello = "엄청나게 어려운 코드";
'Hello world!';
"Hello world!";

console.log('Space \nSpace');  // \n은 줄바꿈 

console.log(typeof("hello"));   // 둘다 String으로 나온다
console.log(typeof('hello'));
console.log("typeof('') = " + typeof(''));  // 빈칸도 String값으로 출력됨
console.log(typeof(' '));
console.log(typeof(""));

console.log("'' == '' = " + ('' == ''));
console.log("' ' == '' = " + (' ' == ''));
console.log("\"\" == \"\" = " + ("" == ""));
console.log("\" \" == \"\" = " + (" " == ""));

console.log(`Hello javascript`) // 백틱으로 감싸진 문자열을 탬플릿 리터럴(template literal)이라고 하며, 줄바꿈할 때는 백틱 문자열이 편함.
console.log(`hello 
javascript
haha
`);

console.log("Quiz = " + "문자열이 긴 경우에는 " + "문자열을 " + "나눈 뒤 " + "다시 합칩니다.");
console.log();

// 숫자

console.log("5e4 = " + 5e4);   // 지수표기법으로 매우 큰 숫자나 소수점 아래 자릿수가 많을 때 숫자를 표현하는 방식 e뒤에 나오는 숫자만큼 10의 거듭제곱을 하는거임
console.log(5e+4);  // 출력값 : 50000
console.log(5e-3);  // 출력값 : 0.005 
console.log("typeof(5) = " + typeof(5));
// 하지만 따옴표로 숫자를 감싸면 완전히 다른 형태가 나옴
console.log("typeof('5') = " + typeof("5"));

// 2진법 및 16진법으로 숫자 나타내기 
console.log("2진법 = " + 0b11);
console.log("8진법 = " + 0o15);
console.log("16진법 = " + 0X1C);

// 문자열을 숫자로 바꾸기

console.log(typeof(parseInt("5")));
console.log(parseInt("3.15"));  // 실수 타입의 형태를 정수로 바꾸려면 뒤에 소수점이 무시된다. 이를 실수로 바꾸기 위해서는 float 값으로 parse를 해준다
console.log(parseFloat("3.14"));

// Parseint를 다른 기수로 사용하기 

console.log("100을 2진법으로 표시 = " + parseInt(100, 2)); 
console.log("100을 8진법으로 표시 = " + parseInt(100, 8)); 

/* NaN 알아보기 

parseInt(prompt()); 대화창이 뜨면 abc를 입력할 경우 NaN이 출력됨 
NaN : Not a Number
하지만 
typeof NaN;  할 경우 답은 "number" 라고 출력된다
*/

console.log("2+4 = " + 2+4);
console.log("4-2 = " + (4-2));
console.log("6/4 = " + 6/4);
console.log("6%4 = " + 6%4); //나머지값
console.log("2*4 = " + 2*4);
console.log("2**4 = " + 2**4); //제곱근

console.log(2/0); console.log(-2/0);







// 별찍기 숙제

for(let i = 0; i < 6; i++) {
    console.log("*".repeat(i))
}   

for(let j =5; j > 0; j--) {
    console.log("*".repeat(j));
}

// 2.6 객체

// 이번에는 객체를 알아보겠습니다. 객체는 자료형의 일종으로 다양한 값을 모아 둔 또다른 값입니다. 객체의 종류는 크게 배열(Array), 함수(function), 배열이나 함수가 아닌 객체로 나눌 수 있습니다.

// 2.6.1 배열

const apple = "사과";
const orange = "오렌지";
const pear = "배";
const strawberry = "딸기";

// 이렇게 묶으면 매우 번거롭고 시간도 오래 걸린다.. 그렇기에

const frutis = [ "사과" , "오렌지", "배", "딸기" ]; // 자바와는 다르게 { } 가 아닌 대괄호로 묶어야한다.
console.log(frutis[0]);
console.log(frutis[1]);
console.log(frutis[2]);
console.log(frutis[3]);

// 배열안에 있는 값은 모두 문자열이지만 값의 자료형이 모두 같지 않아도 된다
const everything = [ "사과", 1, undefined, true, '배열', null];
// 배열 내부가 중복이 되어도 상관없음
const duplicate = ["가", "가", "가", "가"];
// 배열 안이 비어도 상관없다.
const empty = [];

const arrOfArr = [[1,2,3], [4,5]];  // 2차원 배열 만들 수 있음 
console.log(arrOfArr[0])
const a = 10;
const b = 20;
const variableArray = [a, b, 30];   // 상수 선언 뒤 배열 안에도 넣을 수 있음
console.log(variableArray);

// 배열의 index 개수 구하기

const everythings = ["포도", 5, undefined, true, "멍멍", null , ""];
console.log(everythings.length); // " " 빈값도 인덱스에 포함되기 때문에...

const findLastElement = [ 1, 2, 3, 4, 5 ];
console.log(findLastElement[findLastElement.length - 1]) // 배열은 0부터 시작이니 .length - 1 하면 배열의 맨 마지막 값을 구할 수 있다.

const arrquiz = [ "a", "b", "c", "d", "e"]
console.log(arrquiz[arrquiz.length-3]);









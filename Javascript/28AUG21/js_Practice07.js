// 2.4.1 else를 사용해 두 방향으로 분기하기

/* 형식
if(condition) {
    실행문
} else {
    실행문
}
*/

if(false) {
    console.log("Hello,if");
} else {
    console.log("Hello,else");
}

// if condition is false , make a value to Grape 

let value = "apple";
let condition = false;
if(condition) {
    console.log(value);
} else {
    value = "grape";
}
console.log(value);

// 2.4.2 else if를 사용해 여러 방향으로 분기하기

/* 형식
if(조건식) {
    실행문;
} else if(조건식) {
    실행문;
} else (조건식) {
    실행문;
}
*/

const score = 82;
    
if (score >= 95) {
    console.log("A+");
} else if (score >= 90) {
    console.log("A");
} else if (score >= 85) {
    console.log("B+");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 75) {
    console.log("C+")
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// 2.4.3 중첩 if문 사용하기 : if나 else, else if 문의 중괄호 안에 실행문을 넣을 수 있다는 사실을 활요할 수 있습니다.

let first = true;
let second = false;
if(first) {
  console.log("첫번째 조건 충족!!");
  if (second) {
    console.log("두번째 조건 충족!!");
    } 
  else {
    console.log("세번째 조건 충족!!");
    } 
} else {
    console.log("아무런 조건을 충족시키지 못했습니다!!");
}

// 중첩 if문은 되도록 피하는 것이 좋다. 조건문이 중첩되어 들여쓰기가 깊어질수록 코드는 읽기 어렵게 된다. 중첩 if문은 if-else if-else문으로 변환해 코드의 가독성을 높이는 것이 바람직하다.

let first2 = true;
let second2 = true;
if(first2 && second2) {   // 두 조건 모두 충족
    console.log("첫번째 조건 충족!!");
    console.log("두번째 조건 충족!!");
} else if (first2) {     // 첫번째 조건만 충족
    console.log("첫번째 조건만 충족!!");
} else if (second2) {    // 두번째 조건만 충족
    console.log("두번째 조건만 충족!!");
} else {    // 아무런 조건도 충족 하지 못함
    console.log("아무런 조건도 충족하지 못했습니다");
}

// 2.4.4 switch 문 : 조건문에는 if 문 외에도 switch

/* switch문 형식

switch (조건식) {
 
  case 비교 조건식 :
    실행문;

} 
switch문에는 조건식 두개가 사용됨. switch 옆 소괄호 조건식의 값이 case의 비교 조건식 값과 일치(===)하면 해당 실행문이 실행된다. 보통 조건식에 변수를 넣고, 비교 조건식에는 변수와 비교할 값을 넣는다.
*/ 

let value2 = "A";

switch (value2) {
  case "A" : 
  console.log("value2는 'A' 입니다.");

  case "B" : 
  console.log("value2는 'B' 입니다.");

  default :
  console.log("아무런 값을 충족시키지 못했습니다.");
}

// switch문은 일치하는 case를 발견하면 일치 여부와 상관없이 그 아래 case들의 실행문을 전부 출력한다. 이를 방지하기 위해서는 break문을 사용해야 한다!
console.log("break문 사용시...")
let value3 = "A";

switch (value3) {
  default : // switch문의 조건식에 일치하는 값이 없으면 if 조건문의 else와 같이 defalut 값이 출력된다. 그리고 default는 어느 위치에서나 나올 수 있다.
  console.log("아무런 값을 충족시키지 못했습니다."); 

  case "A" : 
  console.log("value3는 'A' 입니다.");
  break;

  case "B" : 
  console.log("value3는 'B' 입니다.");
  break;

}

// 2.4.5 조건부 연산자(삼항 연산자) 사용하기

/* 형식
    조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식
*/

let value4 = 5 < 0 ? "참입니다" : "거짓입니다";
console.log(value4);

let condition3 = true;
let value5 = condition3 ? "참" : "거짓";
console.log(value5);

// 조건부 연산자를 if문으로 바꿀 경우..
if(condition3) {
    value5 = "참";
} else {
    value5 = "거짓"
}
console.log(value5);

// 조건부 연산도 중첩해서 사용가능

let condition4 = false;
let condition5 = false;
let value6 =  condition4 ? condition5 ? "둘다 참" : "condition5만 참" : "condition4이 거짓";
console.log(value6);
// 조건부 연산자를 두 번 연이어 썼더니 가독성이 떨어지기 때문에 좀 더 읽기 편하게 하기 위해서 괄호 연산자로 감싸주면 좋다.
let value7 = condition4 ? (condition5 ? "둘다 참" : "condition5만 참") : "condition4이 거짓";
console.log(value7);
// 또는
let value8= condition4 
  ? condition5 
  ? "둘다 참" 
  : "condition5만 참"
  : "condition4이 거짓";
  console.log(value8);
// 반대로 거짓인 경우에도 중첩된 조건부 연산에 들어갈 수 있음 
let value9 = condition4 ? "condition4이 거짓" : (condition5 ? "둘다 참" : "condition5만 참");


// 1분 퀴즈 : 다음 if 문을 switch 문과 조건부 연산자로 바꿔보세요.

let cond = true;
let value10 = "";
if (cond) {
    value10 = "참";
} else {
    value10 = "거짓";
}
console.log("value10 = " + value10);

// switch 문 
let cond1 = true;
let value11 = "";

switch (cond1) {
  case true : 
  value11 = "참";
  break;

  default : 
  value11 = "거짓";
  break;

}
console.log("value11 = " + value11);

// 조건부 연산자
let cond2 = true; 
let value12 = cond2 ? "참" : "거짓";
console.log("value12 = " + value12);







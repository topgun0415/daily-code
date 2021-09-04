// return 이해하기

function a() { 
  return 10;    // return값으로 10으로 반환
} 
a();

/*
만약에 함수선언문 안에 아무런 return 값이 없으면 return indefined가 생략되어있는거임

function a() {
  console.log("a");
}

||

function a() {
  console.log("a");
  return undefined;
}
*/

function a1 () {
    return 10;
}
console.log(a1());

function b() {
    return "function b";
}
const c = b();
console.log(c);

// return은 함수의 실행을 중간에 멈추는 역할도 함

function d() {

  console.log("Hello");
  return;
  console.log("function");
}
console.log(d());

function a2() {
  if(false) {
    return;
  }
  console.log("실행됩니다.");
}

a2();

console.log("--------------")
// 매개변수와 인수 사용하기
// parameter = 매개변수 , argument = 인수

function par(parameter) {   // 매개변수로 parameter 을 넣음
    console.log(parameter)
}
par("argument"); // par의 인수로 argument를 넣어서 출력하게 만듬 
par("babo"); // par의 인수로 babo를 넣어서 console.log(babo)가 출력되게 만듬

function ab(w, x, y, z) {
  console.log(w, x, y, z);
  console.log(arguments); // 만약 인수가 몇개가 들어갔는지 파악하기 위해서는 함수 내 arguments라는 값을 사용해서 배열로 표시되게 만들 수 있다. (화살표 함수 안에서는 arguments를 사용할 수 없음)
}
ab("hyub", "suhyeok", "yechan"); // 인수와 매개변수의 값이 다를 경우 undefined으로 대채됨 

// 반대로 매개변수의 값을 적게 넣으면 ..
function abc(w, x) {
    console.log(w , x);
}
abc("hello", "parameter", "Argument");

// 인수의 마지막 값인 Arguemnt는 제외되어 출력된다.

function add(x , y){
    return (x + y);
}
console.log(add(1,2));
console.log(add(2,3));

// 1분 Quiz : 매개변수로 x, y, z을 받아 곱한 값을 반환하는 multiply 함수를 만들어 보세요. 단, 화살표 함수로 만드세요

const multiply = (x , y) => { 
    return (x * y);
}
console.log("3 * 5 = " + (multiply(3, 5)));

// 다른 변수 사용하기 

function minus1(x, y) {
    const a = 100;  // 함수안에서 변수나 상수를 선언할 수 있다.
    return (x - y) * a;
}
console.log("minus1 = " + (minus1(5,2)));

const h = 100; // 함수밖에서도 변수나 상수를 선언해 함수에서 사용 가능 
function minus2(x, y){
    return(x - y) * h;
}
console.log("minus2 = " + (minus2(5,3)));

// minus1 함수처럼 자신의 매개변수나 내부 변수(또는 상수)만 사용하는 함수를 순수 함수라고 부르며, minus2 함수는 외부 변수(또는 상수)에 접근 하고 있으므로 순수 함수는 아닙니다.


// 2.6.3 객체 리터럴 : 마지막으로 배열이나 함수가 아닌 객체이다. 객체는 여러개의 변수를 하나의 변수로 묶을 때 사용된다.

const name = "이성계";
const year = 1992;
const month = 4;
const date = 15;
const gender = "M";
// 이런식으로 상수를 선언하면 다른 사람을 표현할 때는 이 변수들을 사용할 수 없다. 그러므로 여러개의 변수를 하나로 묶는 객체가 필요한 것이다.

const zerocho = {  // 정보들은 { } 안에 묶여있고 객체 내부에 사용된 정보는 속성(property)라고 한다.
  name: '조현영',
  year: 1994,
  month: 8,
  date: 12,
  gender: "M",
  "who are you": "me",
};

/* 형식 
const 객체 = {
  속성1이름: 속성1값,
  속성2이름: 속성2값,
  속성3이름: 속성3값,
}
*/

console.log(zerocho.name);
console.log(zerocho["name"]);
console.log(zerocho.month);
console.log(zerocho["month"]);
console.log(zerocho.age);   // 객체안에 없는 값을 불러오면 undefined가 출력됨 

console.log(zerocho["name"]);
console.log(zerocho[name]);
console.log(zerocho["who are you"]); // 속성이름은 문자열이므로 띄어스기와 온점이 들어갈수 있기에 그럴 경우에는 대괄호와 ""으로 불러온다.

// 객체 속성 수정하기

zerocho.gender = "F";
console.log(zerocho.gender);

// 객체 속성 제거하기 

delete zerocho.gender;
console.log(zerocho);

// 배열과 함수가 객체인 이유 


function hello() {}
hello.a = "really?";
const arr = [];
arr.b = "wow";
console.log(hello.a);
console.log(arr.b);
// 이처럼 점을 통해 접근을 하고 추가하는 것이 가능하다. 함수와 배열은 주로 객체 리터럴과는 다른 목적으로 사용하기에 함수와 배열에 임의 속성을 넣는것이 드물다. 이처럼 하려면 처음부터 객체 리터럴을 사용하지 함수와 배열을 사용할 이유는 없다.

// 메서드 이해하기

console.log({} === {});
console.log("str" === "str");
console.log(123 === 123);
console.log(false === false);
console.log(undefined === undefined);

// 객체는 모양이 같아도 생성할 때마다 새로운 객체가 생성된다. 그러므로 같은 객체인지 비교하려면 기존 객체를 변수에 저장해두어야한다.

const p = { name: "zerocho"};
const arr1 = [1, 2, p];
console.log(p === arr1[2]);

// 참조와 복사 
const u = { name: "hyuub"};
const r = u;
console.log(u);
console.log(r);
u.name = "yechan";
console.log(r.name);
console.log(u);
console.log(r);
// 객체를 생성하여 변수 u에 대입하고 이를 다시 r로 대입하였다. 변수 u의 객체 값을 변경했는데 r의 객체 값도 똑같이 변경되었다. 즉 객체가 하나 만들어지면서 u 라는 변수에 대입된걸 r은 그 주소값을 참조하고있다고 보면 된다.

let exp = 'zerocho';
let exp2 = exp;
console.log(exp);
console.log(exp2);
exp = "zerochu";
console.log(exp);
console.log(exp2); // 객체와는 다르게 변수에 저장한 경우에는 참조 관게가 생기지않는 상홍을 "복사" 라고 한다. 

// 1분 Quiz : 다음과 같이 객체 안에 객체가 있을 때, "조" 값에 접근하는 방법은 무엇일까요?

const zerochoquiz = {
  quizname: {
    first: "현영",
    last: "조",
  },
  quizgender: "M",
};

console.log(zerochoquiz.quizname);
console.log(zerochoquiz.quizgender);
console.log(zerochoquiz.quizname.last);
console.log(zerochoquiz["quizgender"]);
console.log(zerochoquiz["quizname"]["last"]); // 이렇게 두번 대괄호로 쓰면 객체 안에 있는 객체의 값을 불러올 수 있음





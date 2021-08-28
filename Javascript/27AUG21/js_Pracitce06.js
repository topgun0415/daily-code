// 조건문 : 조건문은 조건식과 실행문으로 구분된다. 조건식이 true의 값이면 내부의 실행문이 실행되고, false의 값이면 실행되지 않는다.

/*  if 조건문 형식
if(조건문) {
    let a = "Hello javascript"; (실행문) 
    console.log(a); (실행문)
}
*/

if(true) {
    console.log("Hello, javascript!");
}

if(false) {
    console.log("Hello, javascript!");
}
// false 를 조건으로 두면 실행은 되나, 출력이 되지 않음 false = { " " , 0 , NaN , null , undefined }

let condition = true;

if(condition) {
    console.log("Hello, if");
}

// if문 사용 시 중괄호인 { }를 항상 써주는게 좋다. 아니면 코드의 실행결과를 알아보기도 힘들뿐더러 코드가 길어지면 알아보기 매우 어렵다.
// 확실하지 않은 조건으로 인해 false 가 대입될 경우 
if (false) 
    console.log("Hello, java");
    console.log("Hello, jas");
// 밑에 있는 Hello,jas만 출력됨 


let value = "사과";
let conditions = true;
if (conditions) {
    value = "바나나";
}
console.log(value);

// 이처럼 조건문에 value 변수의 값을 바꾸는 것도 가능함




    
    






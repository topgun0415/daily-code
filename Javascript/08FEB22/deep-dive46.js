/** @format */

// Ajax란 ? Ajax란 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식을 말한다. Ajax는 브라우저가 제공하는 Web API인 XMLHttpRequest객체를 기반으로 동작한다. XMLHttpRequest는 HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공한다.

// 이전의 웹페이지는 html 태그로 시작해헛 html 태그로 끝나는 완전한 HTML을 서버로부터 전송받아 웹페이지 전체를 처음부터 다시 렌더링 하는 방식을 동작했다. 따라서 화면이 전환되면 서버로부터 새로운 HTML을 전송받아 웹페이지 전체를 처음부터 다시 렌더링했다. 이러한 전통적인 방식은 다음과 같은 문제가 있다.

// 1. 이전 웹 페이지와 차이가 없어서 변경할 필요가 없는 부분까지 포함된 완전한 HTML을 서버로부터 매번 다시 전송받기 때문에 불필요한 데이터통신이 발생했다.
// 2. 변경할 필요가 없는 부분까지 처음부터 다시 렌더링한다. 이로인해 화면 전환이 일어나면 화면이 순간적으로 깜박이는 현상이 발생한다.
// 3. 클라이언트와 서버와의 통신이 동기 방식으로 동작하기 때문에 서버로부터 응답이 있을 때까지 다음 처리는 블로킹된다.

// 하지만 Ajax 의 등장으로 전통적인 패러다임을 획기적으로 전환했다. 즉 서버로부터 웹페이지의 변경에 필요한 데이터만 비동기 방식으로 전송받아 웹페이지를 변경할 필요가 없는 부분은 다시 렌더링하지 않고, 변경할 필요가 있는 부분만 한정적으로 렌더링하는 방식이 가능해져 브라우져에서도 데스크톱 어플리케이션과 유사한 빠른 퍼포먼스와 부드러운 화면 전환이 가능해짐

// Ajax의 다음과 같은 장점이 있다

// 1. 변경할 부분을 갱신하는데 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신이 발생하지 않는다.
// 2. 변경할 필요가 없는 부분은 다시 렌더링하지 않는다. 따라서 화면이 순간적으로 깜빡이는 현상이 발생하지 않는다.
// 3. 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 서버에게 요청을 보낸 이후 블로킹이 발생하지 않는다.

// JSON : JSON은 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷이다. 자바스크립트에 종속되지 않는 언어 독립형 데이터 포맷으로, 대부분의 프로그래밍 언어에서 사용할 수 있다. 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트다.

// (JSON의 키는 반드시 큰따옴표로 묶어야한다. 값은 객체 리터럴과 비슷하게 사용할 수 있지만 문자열은 반드시 큰 따옴표 / (* 둘다 작은따옴표 사용 불가))
// {
//   "price": 5000,
//   "name" : "Lee",
//   "age" : 30,
//   "alive" : true,
// }

// JSON.stringify : JSON 포맷의 문자열로 변환한다. 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화 해야하는데 이를 '직렬화'라 한다.

const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['travling', 'basketball'],
};

// 객체를 JSON 포멧의 문자열로 변환한다
const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"Lee","age":20,"alive":true,"hobby":["travling","basketball"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기를 한다.
const prettyJson = JSON.stringify(obj, null, 2); // JSON.stringify(obj, replace(callback func), 들여쓰기)
console.log(typeof prettyJson, prettyJson);
// string {
//   "name": "Lee",
//   "age": 20,
//   "alive": true,
//   "hobby": [
//     "travling",
//     "basketball"
//   ]
// }

// value가 불리언을 없애는 필터 함수
function booleanFilter(key, value) {
  return typeof value === 'boolean' ? undefined : value;
}

const filteredJson = JSON.stringify(obj, booleanFilter, 2);
console.log(filteredJson);

// {
//   "name": "Lee",
//   "age": 20,
//   "hobby": [
//     "travling",
//     "basketball"
//   ]
// }

// JSON.stringify 메서드는 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환한다.

const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JAVASCRIPT', completed: false },
];

const todosJson = JSON.stringify(todos, null, 2);
console.log(todosJson);

// [
//   {
//     "id": 1,
//     "content": "HTML",
//     "completed": false
//   },
//   {
//     "id": 2,
//     "content": "CSS",
//     "completed": true
//   },
//   {
//     "id": 3,
//     "content": "JAVASCRIPT",
//     "completed": false
//   }
// ]

// JSON.parse = JSON.parse 메서드는 JSON 포맷의 문자열을 객체로 변환한다. 서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이다. 이 무낮열을 객체로서 사용하려면 JSON 포맷의 문자열을 객체화해야 하는데 이를 '역직렬화'라 한다.

const obj1 = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['travling', 'basketball'],
};

const json1 = JSON.stringify(obj1);
// JSON 포맷의 문자열을 객체로 변환한다.
const parsed = JSON.parse(json1);
console.log(parsed);

// {
//   name: 'Lee',
//   age: 20,
//   alive: true,
//   hobby: [ 'travling', 'basketball' ]
// }

// 배열이 JSON 포맷의 문자열로 있는 경우 JSON.parse는 문자열을 배열 객체로 변환한다. 배열의 요소가 객체인 경우 배열의 요소까지 객체로 변환한다.

// XMLHttpRequest : 브라우저는 주소창이나 HTML의 form 태그 또는 a 태그를 통해 HTTP 요청 전송 기능을 기본 제공한다. 자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLHttpRequest 객체를 사용한다. Web API인 XMLHttpRequest 객체는 HTTP 요청 전송과 HTTP 응답 수신을 위한 다양한 메서드와 프로퍼티를 제공

const xhrs = new XMLHttpRequest();

// XMLHttpRequest 객체의 프로퍼티와 메서드 : XMLHttpRequest 객체는 다양한 프로퍼티와 메서드를 제공한다

// readyState : HTTP 요청의 ㅎ녀재 상태를 나타내는 정수
// status = HTTP 요청에 대한 응답 상태(HTTP 상태코드)를 나타내는 정수
// statusText = HTTP 요청에 대한 응답 메세지를 나타내는 문자열
// responseType = HTTP 응답 타입
// onreadystatechange = readyState 프로퍼티 값이 변경된 경우
// onerror = HTTP요청이 성공적으로 완료한 경우
// onload = HTTP요청이 성공적으로 완료한 경우

// HTTP 요청 전송
// 1, XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화한다.
// 2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더값을 설정한다.
// 3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다.

// 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화 : HTTP 요청 메서드는 클라이언트가 서버에게 요청의 종류와 목적(리소스에 대한 행위)을 알리는 방법이다. 주로 5가지 요청 메서드 (GET, POST, PUT, PATCH, DELETE 등)을 사용하여 CRUD를 구현한다
xhr.open('GET', '/users');

// HTTP 요청 헤더 설정 : 이 메서드는 특정 HTTP 요청의 헤더 값을 설정한다. 이 메서드는 반드시 open 메서드를 호출한 이후에 호출해야 한다.
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : json
xhr.setRequestHeader('content-type', 'apllication/json');

// HTTP 요청 전송 : send 메서드는 open 메서드로 초기화된 HTTP 요청을 서버에 전송한다. 기본적으로 서버로 전송하는 데이터는 GET, POST 요청 메서드에 따라 전송 방식에 차이가 있다.
xhr.send();

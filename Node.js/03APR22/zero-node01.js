/** @format */

// 3-1. REPL 사용하기 READ, EVALUATE, PRINT, LOOP

// 맥에서는 터미널을 이용해서 자바스크립트는 스크립트 언어라서 즉석에서 코드를 실행할 수 있음

// 3-2. 모듈

// 노드는 각각의 자바스크립트 파일에서 필요한 부분들을 조각들로 잘라서 서로 주고 받고 할 수 있게끔 하는 기능이 있다.

// 3-3. global, console, setTImeout API

// 노드의 전역 객체
// 1. 브라우저의 window같은 역할
// 2. 모든 파일에서 접근
// 3. window처럼 생략도 가능(conosle, require도, global의 속성)

// console 객체
// console 객체에는 다양한 것들이 존재함 예를 들어) console.error , console.time('philip') , console.timeEnd('philip'), console.log, console.trace

// SetTimeout 관련 다양한 API
// 1. setTimeout
// 2. setInterval
// 3. setImmediate (setTimeout(() => {}),0)과 같지만 그보다 권장되어짐 다만 둘다 비동기)

// 3-5. 모듈 심화, 순환 참조

// module.exports -> export 하기! (하나의 파일에서 하나의 것밖에 exports 못함)
// const { odd, even } = require('./var');와 같이 require() 메서드를 사용해서 불러올 수 있음

// 3-6. process : 현재 실행중인 노드 프로세서에 대한 정보들을 담고 있음

// process.env : 시스템 환경 변수들이 들어있는 객체
// 환경변수는 process.env로 접근 가능

// process.nextTick() : 비동기중에 제일 빨리 실행됨

// process.ext(코드) : 실행중인 노드 환경을 끄고 싶을 때 이걸 사용함

// 3-7. OS와 Path : 운영체제 정보를 담고 있음
// 모듈은 require로 가져옴

/*
os.arch() : process.arch와 동일
os.platform() : process.platform와 동일
os.type() : 운영체제의 종류를 보여줌
os.uptime() : 운영체제 부팅 후 흐른 시간(초)를 보여줌 / process.uptime은 노드의 실행 시간이었음
os.hostname() : 컴퓨터의 이름을 보여줌
os.release() : 운영체제의 버전을 보여줌
os.homedir() : 홈 디렉터리 경로를 보여줌
os.tmpdir() : 임시 파일 저장 경로를 보여줌
os.cpus() : 컴퓨터 코어정보
os-freemem() : 사용 가능한 메로리를 보여줌
os.totalmem() : 전체 메모리 용량을 보여줌
*/

// path 모듈 메서드

/*
path.sep : 경로의 구분자 / Windows 는 \ , 맥은 / 
path.delimiter : 환경 변수의 구분자입니다 

*/

// 3-8 URL과 querystring

// WHATWG 방식으로 쿼리스트링 부분 처리도와주는 객체
// 쿼리스트링은 주소에 데이터가 담겨져 있는 부분이라 생각하면 됨

// 3-9 crypto 단방향 암호화

// 암호화는 가능하지만 복호화는 불가능
// 암호화 : 평문을 암호로 만듦
// 복호화 : 암호를 평문으로 해독

// 단방향 암호화의 대표 주자는 해시 기법
// 문자열을 고정된 길이의 다른 문자열로 바꾸는 기법
// abcdefgh 문자열 -> qvew
// 실제로 hash로 비밀번호를 만들면 보안상으로 매우 안전하고 해킹하기도 매우 꺼려진다

// 양방향 암호화

// 대칭형 암호화(암호화 복호화 가능)

// util : 각종 편의 기능을 모아둔 모듈 (deprecated와 promisify가 자주 쓰임)

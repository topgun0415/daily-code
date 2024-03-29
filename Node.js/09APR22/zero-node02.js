/** @format */

// 3-10 worker_threads Node에서 멀티 쓰레드는 방식으로 작업할 수는 있으나 지원을 할뿐이지 상당히 어렵다

const { isMainThread, Worker, parentPort } = require('worker_threads');

if (isMainThread) {
  // 메인스레드
  const worker = new Worker(__filename);
  worker.on('message', (value) => {
    console.log('워커러부터', value);
  });
  worker.emit('exit', () => {
    console.log('워커 끝~');
  });

  worker.postMessage('ping');
} else {
  // 워커스레드
  parentPort.on('message', (value) => {
    console.log('부모로부터', value);
    parentPort.postMessage('pong');
    parentPort.close();
  });
}
// 멀티쓰레드를 사용하면 속도가 당연히 빨라지지만 매우 복잡하고 쓰레드 안에 많은 worker들을 만든다고 해서 비례해서 빨라지는 것도 아니다.

// 3-11 Child_process : 책 참고

// 3-12 fs 모듈 : 파일 시스템 접근하고, 사용하기 (파일/폴더 생성, 삭제. 읽기 쓰기 가능)
// readme.txt 랑 readfile.js 참고 할 것

// 동기 메서드와 비동기 메서드

// 이전 예제를 여러번 실행해보기
// 매번 다르게 실행됨
// 순서에 맞게 실행하려면?
// 동기와 비동기 : 백그라운드 작업완료 확인 여부, 블로킹과 논 블로킹 : 함수가 바로 return 되는지 여부

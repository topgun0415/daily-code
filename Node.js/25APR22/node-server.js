/** @format */

const http = require('http');

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node JS</h1>');
    res.write('<p>Hello Server</p>');
    res.end('<p>Hello Philipuuu</p>');
  })
  .listen(8020);

server.on('listening', () => {
  console.log('8020번 포트에서 서버 대기중입니다.');
});

server.on('error', (error) => {
  console.error(error);
});

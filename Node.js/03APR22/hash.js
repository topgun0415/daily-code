/** @format */

// createHash(알고리즘) : 사용할 해시 알고리즘을 넣어줍니다

// update(문자열) : 변화할 문자열을 넣어줍니다

// digest(디코딩) : 인코딩할 알고리즘을 넣어줍니다

const crypto = require('crypto');

console.log(
  'base64 :',
  crypto.createHash('sha512').update('비밀번호').digest('base64')
  // base64 : dvfV6nyLRRt3NxKSlTHOkkEGgqW2HRtfu19Ou/psUXvwlebbXCboxIPmDYOFRIpqav2eUTBFuHaZri5x+usy1g==
);

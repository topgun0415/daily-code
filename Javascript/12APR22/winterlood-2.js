/** @format */

// ✅ Truthy & Falsy

let a = '';

if (a) {
  console.log('a is true');
} else {
  console.log('a is false');
}
// false

// defalut parameter
function nameSearcher(name = 'Philipuuu') {
  console.log(name);
}

nameSearcher('Serin'); // Serin
nameSearcher(); // Philipuuu

// 삼항연산자

let odd = 3;
let reuslt;

// 글자 확인하는 삼항연산자 함수

const stringChecker = (str) => {
  return str === 'hello' ? 'true' : 'false';
};
console.log(stringChecker('hello')); // true

const numSeperator = (num) => {
  return 3 % num === 0 ? 'number is odd' : 'number is even';
};
console.log(numSeperator(3)); // number is odd
console.log(numSeperator(6)); // number is even

// 중첩삼항연산자

const score = 35;

score >= 75
  ? console.log('A')
  : score >= 50
  ? console.log('B')
  : console.log('C');

// 하지만 정작 사용할 때는 가독성이 안좋아서 if문으로 하는 것이 좋다

// ✅ 조건문 업그레이드

function mealFinder(mealKit) {
  if (['한식', '중식', '양식'].includes(mealKit)) {
    console.log('밥 먹음');
  } else {
    console.log('굶기');
  }
}

mealFinder('양식'); // 밥 먹음
mealFinder('인도식'); // 굶기

lunchMenu = {
  한식: '비빔밥',
  양식: '스테이크',
  일식: '스시',
  인도식: '카레',
};

function mealFinder2(mealName) {
  const meal = lunchMenu[mealName];
  return meal;
}

console.log(mealFinder2('한식')); // 비빔밥
console.log(mealFinder2('일식')); // 스시
console.log(mealFinder2('프랑스식')); // undefined

// ✅ 비구조화 할당 / 디스트럭처링

let arr = ['one', 'two', 'three'];
let arr1 = ['q', 'w', 'e', 'r'];

//

const [one] = arr;
const [two, three] = arr;
const [four] = arr;

console.log(one); // one
console.log(four); // one
console.log(three); // two

const [q, w, e, r, t] = arr1;
console.log(q, w, e, r, t); // q w e r undefined

// ⭐ t 같은 경우에는 arr1 배열에 존재하지 않기 때문에 undefined가 나온다 / 이럴때는 const [ t = 'value'] 를 넣으면 값이 출력되게 된다.

// 혹시나 이 두 개의 변수값을 바꾸고 싶을 때는 ..
let ab = 1;
let cd = 2;
let tmp;

tmp = ab;
ab = cd;
cd = tmp;
console.log(ab, cd); // 2 1

// 구조분해할당으로 할 경우

[ab, cd] = [cd, ab];
console.log(ab, cd); // 1 2

let objDe = { names: 'philip', age: 30, sex: 'male' };

let { names, age, sex: sexs, abc = 'what' } = objDe;

console.log(names, age, sexs, abc); // philip 30 male
console.log(objDe); // { names: 'philip', age: 30, sex: 'male' }

// ✅ 스프레드 연산자

// ...Object 로 사용이 가능

// Object

const cookie = {
  butter: 'butter',
  milk: 'milk',
};

const appleCookie = {
  ...cookie,
  apple: 'apple',
};

console.log(appleCookie); // { butter: 'butter', milk: 'milk', apple: 'apple' }

// Array

const cookies = ['촉촉한 쿠키', '딸기맛 쿠키'];
const newCookies = ['매운맛 쿠키', '흙맛 쿠키', '아이스크림 쿠키', ...cookies];

console.log(newCookies); // [ '매운맛 쿠키', '흙맛 쿠키', '아이스크림 쿠키', '촉촉한 쿠키', '딸기맛 쿠키' ]

// ✅ 동기 & 비동기 ( Syncronize & Asyncronize )

function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    console.log('A TASK END');
    cb(res);
  }, 3000);
}

console.log('TASK BEGIN');
taskA(4, 5, (res) => {
  console.log(`Result : ${res}`);
});

// 콜백지옥을 만들어보자! 그러나 연습! 저번 자바스크립트 강의에서는 따로 이해가 잘 가지 않았으므로 새로 만들어보자

function egg(status, callback) {
  setTimeout(() => {
    const res = status + ' => 🐣 ';
    callback(res);
  }, 3000);
}

function chick(status, callback) {
  setTimeout(() => {
    const res = status + ' => 🐓';
    callback(res);
  }, 1000);
}

function meat(status, callback) {
  setTimeout(() => {
    const res = status + ' => 🍗';
    callback(res);
  }, 5000);
}

egg('🥚', (res_Egg) => {
  console.log(res_Egg); // 3초뒤 시작
  chick(res_Egg, (res_Chick) => {
    console.log(res_Chick); // 4초뒤 시작
    meat(res_Chick, (res_Meat) => {
      console.log(res_Meat); // 9~10초뒤 시작
    });
  });
});

// 출력값
// 🥚 => 🐣
// 🥚 => 🐣  => 🐓
// 🥚 => 🐣  => 🐓 => 🍗

// ✅ Promise

// Pending , Fulfilled , Rejected 함수로 설명

// function Pending(data) {
//   const result = data;
//   if (Fulfilled) {
//     result = 'resolove';
//   } else {
//     result = 'reject';
//   }
// }

// then 체이닝 이용해서 만들어보기

function egg1(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = status + ' => 🐣 ';
      resolve(res);
    }, 3000);
  });
}

function chick1(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = status + ' => 🐓';
      resolve(res);
    }, 1000);
  });
}

function meat1(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = status + ' => 🍗';
      resolve(res);
    }, 5000);
  });
}

egg1('🥚')
  .then((egg_res) => {
    console.log(egg_res);
    return chick1(egg_res);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((chick_res) => {
    console.log(chick_res);
    return meat1(chick_res);
  })
  .then((meat_res) => {
    console.log(meat_res);
  });

// 출력값
// 🥚 => 🐣
// 🥚 => 🐣  => 🐓
// 🥚 => 🐣  => 🐓 => 🍗

// ✅ Async & Await

function pizza(something) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = something + '=>';
    }, 2000);
  });
}

function coffee(something) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = something;
    }, 2000);
  });
}

async function food() {
  const pizza = await pizza('🍕');
  const cola = await coffee('☕');

  console.log(pizza, cola);
}

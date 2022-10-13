/** @format */

let $year = document.querySelector('.year');
let $month = document.querySelector('.month');
let $day = document.querySelector('.day');

let year = new Date().getFullYear();
let month = 1;
let lastDay = null;

selectPrinter(year - 40, year - 17, $year);
selectPrinter(1, 12, $month);
selectPrinter(1, 31, $day);

$year.addEventListener('change', dateChangeHandler);
$month.addEventListener('change', dateChangeHandler);

// dateChangeHandlerはselectタグがchangeイベントが発生すれば呼ばれる関数です。
function dateChangeHandler(e) {
  year = $year.value;
  month = $month.value;

  // yearが閏年の場合またmonthの値が2の場合
  if (
    ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) &&
    month === 2
  ) {
    lastDay = 28;
  } else {
    lastDay = new Date(year, month, 0).getDate();
  }
  selectPrinter(1, lastDay, $day);
}

// selectPrinterは生年月日を動的に画面上に表示させる関数です。
function selectPrinter(firstDate, secondDate, selector) {
  let inputValue = null;

  for (let i = firstDate; i <= secondDate; i++) {
    // テンプレートリテラルを利用してoptionの変数に代入
    if (i < 10) {
      inputValue += `<option value="${i}">0${i}</option>`;
    } else {
      inputValue += `<option value="${i}">${i}</option>`;
    }
  }
  // innerHTML、Web APIを利用してselectタグーにoptionを追加
  selector.innerHTML = inputValue;
}

// emptyValidatorは登録する時名前,住所,電話番号を確認して入力された値がない場合はアラートを表示する関数です。
function emptyValidator() {
  let $inputName = document.querySelector('.input-name');
  let $inputAddress = document.querySelector('.input-address');
  let $inputPhone = document.querySelector('.input-phone');

  // flag 変数をtrueに初期化
  let flag = false;

  // 複数が入力されてない場合は一番手前の入力されてないものからアラート表示
  if ($inputName.value.trim() === '' || !isNaN($inputName.value)) {
    // アラートを表示
    alert('【名前を入力して下さい】');
    // フォーカスをセット
    $inputName.focus();
  } else if ($inputAddress.value === '' || $inputAddress.value.includes('　')) {
    alert('【住所を入力して下さい】');
    $inputAddress.focus();
  } else if ($inputPhone.value === '' || $inputPhone.value.includes('　')) {
    alert('【電話番号を入力して下さい】');
    $inputPhone.focus();
  } else if (isNaN($inputPhone.value)) {
    alert('【電話番号を半角数値で入力して下さい】');
    $inputPhone.focus();
  } else {
    flag = true;
  }
  return flag;
}

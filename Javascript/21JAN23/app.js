/** @format */

// loginValidatorはログイン情報を確認を行う..
function loginValidate() {
  let $userId = document.querySelector('.userId');
  let $userPw = document.querySelector('.userPw');
  let userId = $userId.value;
  let userPw = $userPw.value;

  // flag 変数をtrueに初期化
  let flag = false;

  $userId.value = $userId.value.trim();
  $userPw.value = $userPw.value.trim();

  // ユーザIDの未入力チェック
  if ($userId.value === '') {
    // アラートを表示
    alert('ユーザーIDを入力してください');
    // フォーカスをセット
    $userId.focus();

    // パスワードの未入力チェック
  } else if ($userPw.value === '') {
    // アラートを表示
    alert('パスワードを入力してください');
    // フォーカスをセット
    $userPw.focus();

    // ユーザIDの半角英数字チェック
  } else if (!userId.match(/^[A-Za-z0-9]*$/)) {
    // アラートを表示
    alert('半角英数字で入力してください');
    // フォーカスをセット
    $userId.focus();

    // パスワードの半角英数字チェック
  } else if (!userPw.match(/^[A-Za-z0-9]*$/)) {
    // アラートを表示
    alert('半角英数字で入力してください');
    // フォーカスをセット
    $userPw.focus();

    // ユーザID、パスワードが正常
  } else {
    flag = true;
  }

  return flag;
}

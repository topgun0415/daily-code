/** @format */

// 명시적 타입변환

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
String(1);
String(NaN);
String(Infinity);
String(true);
String(false);

// 2. Object.prototype.toString 메서드를 사용하는 방법
(1).toString();
NaN.toString();
true.toString();

// 3. 문자열 연결 연산자를 이용하는 방법
true + '';
1 + '';
NaN + '';

// 숫자 타입으로 변환

Number('0');
Number('-1');
Number('10.53');
Number('True'); // boolean도 가능
Number('False');

parseInt('0');
parseInt('-1');
parseFloat('10.53');

+'0';
+'-1';
+'10.53';
+true;
+false;

'0' * 1;
'-1' * 1;
'10.53' * 1;
true * 1;
false * 1;

// boolean 타입으로 변환
Boolean('x');
Boolean('');
Boolean('false');

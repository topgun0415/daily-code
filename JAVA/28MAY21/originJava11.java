
public class originJava11 {

	public static void main(String[] args) {
		
// 형변환 ( Casting ) 즉 타입간의 변환방법
		

		// 문자와 숫자간의 변환 =  숫자 + ' '  or 숫자 - ' ' 이다.
		
		// 문자열로 변환 = 숫자 + " " 이다.
		
		// 문자열에서 숫자로 변환 = Integer.parseInt("3")
		
		String str = "3";
		
		System.out.println(str.charAt(0) - '0' );  // 문자열인 "3" 을 문자로 바꾼 것
		System.out.println('3' - '0' + 1); // 문자에서 숫자로 바꾼 것
		System.out.println(Integer.parseInt(str) + 1);  // 문자열인 "3"에서 문자로 바꾼것 ( 1을 더해주는 것은 숫자인것을 확인하기 위해서)
		System.out.println("3" + 1); // 1이 문자열 "1"로 바뀐 뒤 문자열인 "3" 과 더해져서 문자열인 "31" 이 나오는걸 볼수있음	
	    System.out.println("--------------");
	    
	    
		System.out.println(3 + '0'); // 문자 3이 나오지 않는 이유는 0이 문자 즉 유니코드로 48이라서 그럼 
		System.out.println((char)(3 + '0')); // 문자로 형변환을 해주면 위와는 다르게 문자 3이 나오는걸 볼 수 있음 하지만 51과 3은 같은 의미 
		System.out.println("--------------");
		
	    // 형변환 하는 방법 : (타입) 피연산자
		
		double d = 85.6;
		int score = (int)d;
		
		System.out.println(score); //결과는 85로 실수인 85.6이 뒤에 반올림을 하지않고 정수의 숫자만 내보내는걸 알 수 있다. Float도 마찬가지
		System.out.println("d = " + d);
		System.out.println("score = " + score); 
		//형 변환을 한다고해서 기존의 변수값에는 달라지는게 없다.
		System.out.println("--------------");
		
		int i = 10;
		byte b = (byte)i;
		System.out.printf("  [ Int -> byte ] i = %d -> b = %d%n ", i , b );
		
		i = 300;
		b = (byte)i;
		System.out.printf(" [ Int -> byte ] i = %d -> b = %d%n ", i , b ); // 인티져에서 바이트로 단위수가 내려갔기때문에 300이란 숫자는 b에서 데이터 손실 발생
		
		b = 10;
		i = (int)b;
		System.out.printf(" [ byte -> int ] b = %d -> i = %d%n ", b , i );
		
		b = -2;
		i = (int)b;
		System.out.printf(" [ Int -> byte ] i = %d -> b = %d%n ", b , i );
		System.out.println(" i = " + Integer.toBinaryString(i));   // Integer.toBinaryString() 변수는 10진수 정수를 2진수 정수로 변환한 문자열을 얻은 값
		
		// 자동형변환
		
		char ch  = 1000; // = char ch  = (char)1000 
		// byte ch1 = 1000; (byte 는 1바이트이기 때문에 나타낼 수 있는 범위가 -128~127 이다.) 
		
		
		/*  이 장의 결론
		 * 1. boolean 을 제외한 나머지 7개의 기본형은 서로 형변환이 가능하다.
		 * 2. 기본형과 참조형은 서로 형반환할 수 없다.
		 * 3. 서로 다른 타입의 변수간의 연산은 형변환을 하는 것이 원칙이지만, 값의 범위가 작은 타입에서 큰 타입으로의 형변환은 생략할 수 있다.
		 * ( byte -> short, char -> int -> long -> float -> double ) ※ 실수가 정수보다는 더 자세하고 광범위하게 나타내기 때문에 8바이트인 롱보다 float이 더 크다고 본다.
		 */
		
		
		
		

	}

}

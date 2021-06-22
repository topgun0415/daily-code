import java.util.*;
public class originJava30 {
public static void mian (String args []) {

		// 변수와 메서드
		
		// 3.1 선언위치에 따른 변수의 종류
		
		/* 변수는 1. 클래스변수, 2. 인스턴스변수, 3. 지역변수가 있다. 변수의 종류를 결정짓는 중요한 요소는 ★변수의 선언된 위치★ 이다.
		 * 	 맴버변수를 제외한 나머지 변수들은 모두 지역변수이며, 맴버변수 중 static이 붙은 것은 클래스변수, 붙지 않은 것은 인스턴스변수이다. 
		 */
	
	class Variables 
	{
			int iv;      //인스턴스변수    (클래스 영역)
			static int cv; //클래스변수 (클래스 영역)
			
			void method ()
			{
				int lv = 0; //지역변수 (메서드 영역)
				
			}
			
			
			// ★★★★★ 객체란 인스턴스변수(IV)를 묶어놓은 것 ★★★★★★

		
	  }
	
	}

 }
	



import java.util.*;

public class Main {

	public static void main(String[] args) {
		
		StringBuffer sb = new StringBuffer("abc");
		System.out.println(sb);
		sb.append("123");
		System.out.println(sb);
		
		StringBuffer sb2 = sb.append("ZZ");
		System.out.println(sb2);
		System.out.println(sb);
				
		String sb3 = "ABC";  	// 이처럼 스트링 타입으로 선언된 변수는 수정이 불가능하다  
		System.out.println(sb3);
		sb3 = "123";					// 새로운 주소값을 갖게 되고 거기에서 선언되어 출력된다.
		System.out.println(sb3);
		
		StringBuffer sb4 = new StringBuffer("ABC");
		sb4.append("ZZ").append("OO").append("OO");
		System.out.println(sb4);
		System.out.println("");
		
		StringBuffer sb5 = new StringBuffer("ABC");
		StringBuffer sb6 = new StringBuffer("ABC");
		
		System.out.println("sb5 == sb6 = " + (sb5 == sb6));
		System.out.println("sb5.equals(sb6) = " + sb5.equals(sb6));
		
		String sb7 = new String (sb5);
		String sb8 = new String (sb6);
		
		System.out.println("sb5 == sb6 = " + (sb7 == sb8));
		System.out.println("sb5.equals(sb6) = " + sb7.equals(sb8)); // 스트링 타입으로 변환해서 새로운 참조변수에 대입하고 이를 equals로 비교할 경우에 true 값이 나옴
		
	}
	
}

  



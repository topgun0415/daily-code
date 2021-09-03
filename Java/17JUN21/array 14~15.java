import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
	
		// String class : String 클래스는 Char[ ] 와 메서드(기능)를 결합한 것
		// String class = Char [ ] + method
		
		String a = "a"; 
		String b = "b";
		a = a + b; // 새로운 메모리에 "a' 와 "b"가 결합된 ab가 만들어짐
		
		// String 은 변수 초기화는 가능하지만 선언한 내용은 절대 바뀌지않는다. (read only)
		
		System.out.println(a);  // 이렇게 보면 a 문자열 변수의 메모리 내용이 "ab"로 바뀐것 같지만 실제로는 새로운 메모리에 저장되어진거임.
		
		
		String str = "ABCDE";
		char ch = str.charAt(3);
		System.out.println(ch);
		System.out.println(str.length());
		
		if (str.equals(ch))
		{
		  ;
		}
		else 
		{
			System.out.println("no");
		}
		
	}
	
 }
	



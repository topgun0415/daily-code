import java.lang.reflect.Array;
import java.util.*;

public class Main {
	public static void main (String [] args) {
			// HashSet 은 set인터페이스를 구현한 가장 대표적인 컬렉션이며 Set 인터페이스의 특징대로 HashSet은 중복된 요소를 저장하지 않는다
			
		
		
			Object [ ] objarr = { "1", new Integer(1), "2", "2", "2", "3", "4", "4", "4" };
			
			Set set = new HashSet ();
			
			for (int i = 0; i < objarr.length; i++) {
				set.add(objarr[i]);		// HashSet에 objArr의 요소들을 저장한다.
				
			}
			System.out.println(set); // ArrayList와 같이 List 인터페이스를 구현한 컬렉션과 달리 Hashset은 저장순서를 유지 하지 않으므로 유지하기 위해서는 LinkedHashSet을 이용하여야한다.
			
	}
	
}

// 출력값 : { 1, 1, 2, 3, 4 } 가 중복된 1은 Integer 타입의 1과 문자열 "1" 인 다른 형태의 1이다. 하지만 저장순서를 유지하지 않으므로 무엇이 문자열인지는 알지 못한다. 

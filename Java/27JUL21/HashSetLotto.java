import java.lang.reflect.Array;
import java.util.*;

public class Main {
	public static void main (String [] args) {
			
		// HashSet을 이용한 로또 번호 구하기
	
		Set set = new HashSet ();
		
		for (int i = 0; set.size() <= 6; i++) {
			int numbers = 0;
			numbers = (int)(Math.random() * 46);
			set.add(numbers);
			System.out.println("로또 번호 [" + i + "] = " + numbers);
			
		}
		
		List list = new LinkedList (set);		// Sort 를 사용하기 위해서는 HashSet에서는 사용불가. 리스트 타입의 변수가 필요!! 
		Collections.sort(list);
		System.out.println("최종 번호 : " + list);
//	System.out.println("최종 번호 : "+ set);
	}
	
}


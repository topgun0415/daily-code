import java.lang.reflect.Array;
import java.util.*;
public class originJava30 {

	public static void main(String[] args) {

		//String 배열의 선언과 생성
		
		String [ ] name = new String [3];  // 3개의 문자열을 담을 수 있는 name이란 메모리를 만든거임 
//		name [0] = "Kim";
//		name [1] = "Lee";
//		name [2] = "Lim";
		
		
		
		String [ ] strArr = { "가위", "바위", "보" };   //index 값이 0~2(3-2)
		
		System.out.println(Arrays.toString(strArr));
		
		
		for (int i = 0; i < 1; i++)
		{
			int tmp = (int)(Math.random()*strArr.length);
			System.out.println("ME = ");
			System.out.println("COM = " + strArr[tmp]);
			
			
		}
		
	}
	
 }

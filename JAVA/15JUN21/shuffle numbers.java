import java.lang.reflect.Array;
import java.util.*;
public class originJava30 {

	public static void main(String[] args) {

		// Using Array to make formula (2) : shuffle numbers 
		
		int [ ] numArr = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };   //0~9개 까지의 배열
		System.out.println(Arrays.toString(numArr));
		
		for ( int i = 0; i < 100; i++)
		{
			int n = (int)(Math.random() * 11);  // 0~10개 랜덤 숫자 
			
			int tmp = numArr[0];  // 배열 [0] 번의 숫자를 담을 수 있는 잉여 변수를 선언 
			
			numArr[0] = numArr[n];
			numArr[n] = tmp;	
		}
		
		System.out.println(Arrays.toString(numArr));


  }
  
}

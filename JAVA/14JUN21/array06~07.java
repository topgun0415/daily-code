import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
		
	// 배열의 출력
		

		int [] iarr = { 100,95,90,85,80 }; // iarr [0] ~ [4] 
		// System.out.println(iarr);   // [I@1877ab81 Int 배열에는 이상한 값이 출력
		
		char [] jarr = { 'A', 'B', 'C', 'D', 'E' };
		System.out.println(jarr); // ABCDE 가 출력됨 (char 배열에만 잘 출력된다.) 
		
	
//		for (int i = 0; i <= iarr.length; i++)  
//		{
//		System.out.println(iarr[i]); // 100 95 90 85 80 이 출력됨 
//		}
		
		// 더 쉬운 방법으로 배열을 문자열로 바꾸면 된다.
		
		System.out.println(Arrays.toString(iarr)); // [100, 95, 90, 85, 80] 가 출력됨
		System.out.println(Arrays.toString(jarr)); // [A, B, C, D, E] 가 출력됨
		

		
		}
	
     }
	


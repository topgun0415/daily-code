import java.util.*;
public class originJava30 {

	public static void main(String[] args) {

	  // 2차원 배열 : 테이블 형태의 데이터를 저장하기 위한 배열 ( 3차원 배열까지도 가능함 ) 
		
		int [ ] [ ] table = new int [4] [3];
		
		table [0] [0] = 100;
		
		System.out.println(table [0] [0]);
	
		int [ ] [ ] table1 = { {1,100, 200}, {2, 200, 400} , {3, 300, 600} };
//		{ 
//				{ 1,  100, 200},
//				{ 2,  200, 400},
//				{ 3,  300, 600}
//
//				
//		};
							
		System.out.println(table1 [0] [0]);
		System.out.println(table1 [1] [1]);
		System.out.println(table1 [2] [2]);

	}
	
 }
	



	



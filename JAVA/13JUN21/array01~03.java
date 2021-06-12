
public class originJava30 {

	public static void main(String[] args) {
		
	// 배열이란 ? 배열은 같은 타입의 여러 변수를 하나의 묶음으로 다루는 것
		
//		int [ ] score; // 1. 배열 score 선언 (참조변수)
//		score = new int [5]; // 2. 배열의 생성 ( int 저장공간 x 5 )
		
		int [ ] score = new int [5]; // 3. 배열의 선언과 생성을 동시에 
		score [3] = 100;
		
		System.out.println("score [0] = " +score [0]);
		System.out.println("score [1] = " +score [1]);
		System.out.println("score [2] = " +score [2]);
		System.out.println("score [3] = " +score [3]);
		System.out.println("score [4] = " +score [4]);
		
		int value = score [3];
		System.out.println("value = " + value);
		
		
		}
	
     }
	


import java.util.*;
public class originJava19 {

	public static void main(String[] args) {
		
		// Switch 문 : 처리해야하는 경우의 수가 많은 경우 유리한 조건문
		
		
        /* if문과 Switch문의 차이점
         *   1. if문에는 true 와 false 밖에 없는 반면에 Switch문은 정수, 문자열도 가능. (제약조건)
         *   2. 위와 같은 이유로 인해서 코딩이 길어질수 있는 조건문을 Switch문을 통해 줄일 수 있다. 
         *   3. if문에는 계속해서 {   } 가 들어가는 반면에 Switch문에는 아무리 많은 case가 들어가도 { } 가 들어가지 않는다.
         */
		
		System.out.println("What month is it today ? <");
	
		Scanner scanner = new Scanner(System.in);
		int month = scanner.nextInt();
		
		switch (month) {
		
		case 1 : case 2 : case 3 :
		
		System.out.println("Today is Spring");
		
		break;
		
		case 4 : case 5 : case 6 :
		
		System.out.println("Today is Summer");
		
		break;
		
		case 7 : case 8 : case 9 :
			
		System.out.println("Today is fall");
		
		break;
		
		default :
		
		System.out.println("Today is winter");
		
//		case 10 : case 11 : case 12 :
//			
//		System.out.println("Today is winter");
//		
//		break;

        
//    위와 같이 case를 하나 더 붙여줘도 좋지만 if문의 else를 줄여주는게 좋은것처럼 switch문에서도 case를 최대한 줄여주고 default(나머지)로 설정 


		
		}

	}

}

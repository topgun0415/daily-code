import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
		
	// do - while문 : 숫자 맞추기 게임
		
		int input = 0, answer = 0;
		
		Scanner scanner = new Scanner (System.in);
		
		answer = (int)(Math.random() * 101);
		
		do {
		
			System.out.println("(1~100)임의의 숫자를 입력하시오.");
			
			input = scanner.nextInt();   // 순서대로 콘솔창에 입력된다고 생각하면 됨
			
			if (input > answer)
			{ 
				System.out.println("더 작은 수를 입력하시오");
			}
			else if (input < answer)
			{	
				System.out.println("더 큰 수를 입력하시오");
			}
			
		}  while (answer != input);
		
		 System.out.println("정답입니다");
     }
	
}

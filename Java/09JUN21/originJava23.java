import java.util.*;
public class originJava23 {

	public static void main(String[] args) {
		
		//While문 : 조건을 만족시키는 동안 블럭 { } 을 반복 - 반복횟수를 모를 때  (if문하고 비슷함)
		
		//Do while문 : 블럭 { } 을 최소한 한 번 이상을 반복 - 사용자 입력받을 때 유용 
		
		int input = 0 , answer = 0;
	    
		answer = (int)(Math.random() * 101); 
		System.out.println("Answer is " + answer);
		Scanner scanner = new Scanner (System.in);
		
		
		do { 
			System.out.println("Please put number you like : ");
			input = scanner.nextInt();
			
		if (input > answer) {
				System.out.println("The answer is smaller than yours");
			}   
		else if (input < answer) {
				System.out.println("The answer is bigger than yours");	
			}
		}	while (input != answer);
			
        System.out.println("Your answer is correct!");
	
	}

}

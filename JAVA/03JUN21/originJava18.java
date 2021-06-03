import java.util.*;
public class originJava18 {

	public static void main(String[] args) {
		
		// if - else if 문 : 여러 개 중의 하나 - 여러 개의 조건식을 포함한 조건식 
		
		int score = 0;
		char grade = ' ', opt = '0';
		
		System.out.println("Please enter your score = ");
		Scanner scanner = new Scanner (System.in);
		score = scanner.nextInt();
		System.out.printf("Your score is %d. %n", score);
		
		if (score >= 90) 
		{   grade = 'A';	
		     if (score >= 96) {
		    	 opt = '+';
		     } else if (score >=90) {   
		    	 opt = '0';	    	 
		     }
		}
		else if (score >= 80)
		{ grade = 'B';
			if (score >= 86) {
	     	 opt = '+';
	     } else if (score >=80) {   
	    	 opt = '0';	 
	     }
		}
		else if (score >= 70)
		{ grade = 'C';
		 	if (score >= 76) {
	    	 opt = '+';
	     } else if (score >=70) {   
	    	 opt = '0'; 
	     }
		}
		else 
		{
			grade = 'D';
		}
 
		System.out.printf("Your grade is %c%c.%n", grade, opt);
		
		// 코드를 간결하게 하기 위해서 else 블록은 최대한 자제하는편이 좋다. 이 식에서도 처음부터 Char grade = 'D'를 초기화하고 실행한다면 else 블록은 필요 x  
		
		
		


	}

}

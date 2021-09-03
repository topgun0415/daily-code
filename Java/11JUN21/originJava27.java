import java.util.*;
public class originJava27 {

	public static void main(String[] args) {
	
    // My first own grade calculator without looking others
		System.out.println("당신의 점수를 여기에 입력해주세요.");
		
		int score = 0;
		char grade = ' ', opt = '0';
		
		
		Scanner scanner = new Scanner(System.in);
		score = scanner.nextInt();
		
		System.out.printf("당신의 점수는 %d 입니다.%n" , score);
		
		if (score >= 90)
		{                         
			grade = 'A'; 
			
			if (score >= 96)
			{
				opt = '+';

			}
			else if (score >= 90)
			{
				opt = '0';
				
			}
		
		}
		
		if (score >= 80)
		{                         
			grade = 'B'; 
			
			if (score >= 86)
			{
				opt = '+';

			}
			else if (score >= 80)
			{
				opt = '0';
				
			}
		
		}
		
		else 
		{
			grade = 'C';
			
			
		}
		
		System.out.printf("당신의 학점은 %c%c 입니다.", grade, opt);
			

	}

}

import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
	
		// Using two dimension(table) array to make Quiz game 
		
		String [ ] [ ] game =
		{
			{ "Chair" , "의자" },
			{ "Stock" , "주식" },
			{ "Java" , "자바" }
		};
		
		Scanner scanner = new Scanner (System.in);    // 
		
		for (int i = 0; i < game.length; i++)
		{
			System.out.printf("Q%d. %s는 무슨 뜻일까요?%n", i+1 , game[i][0]);
			
			String answer = scanner.next();
			
			if (answer.equals(game[i][1]))
			{
				System.out.println("대단하세요! 정답입니다.");
				
			}
			 else 
			{
				System.out.printf("틀렸습니다. 정답은 %s 입니다.%n", game[i][1]);
			}

		} // for문 
	  
	}
	
 }
	



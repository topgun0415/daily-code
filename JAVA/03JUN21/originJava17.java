
public class originJava17 {

	public static void main(String[] args) {
		
         //조건문과 반복분
		
		
		//조건문 : 조건을 만족할때만 { }를 수행 (0~1번)
		
		int score = 70;
		if (score > 60) {
			 System.out.println("합격입니다.");
			 System.out.println("축하드립니다.");
			
		}
		
	   //반복문 : 조건을 만족하는 동안 {  }를 수행(0~n번)
		
		int i = 10;
		while (i-- > 0) 
			 System.out.print(i);  // 조건문과 반복문 둘다 나오는 조건이 1개라면 굳이 괄호로 묶어줄 필요는 없다.
		     System.out.println();
	   
		int input = 0;
		
		if (input == 0) 
			System.out.println("0입니다.");
		else
			System.out.println("0이 아닙니다");
			

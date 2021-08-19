
public class Practice {
 
	public static void main(String[] args) {
		
		
		
		
	
		//오늘은 특수문자와 서식 문자에 관한 내용
		/* 디버깅 용도로 주석이 자주 쓰임
		 * 
		 * 
		 * n = 띄워쓰기
		*/
		System.out.println("Good\t\tmorning");
		System.out.println("Good\nMorning");
		System.out.println("Good\\Moring");
		System.out.println("GoodMorning\"comander\"");
		
		//서식에 사용되는 문자 
		/*
		 * %d 10진수
		 * %o 8진수
		 * %x 16진수
		 * %c 문자
		 * %s 문자열
		 * %f 실수
		 */
	  
		System.out.println("오늘의 날씨는 10도입니다.");
		System.out.printf("오늘의 날씨는 %d도입니다.\n", 8);
		
		System.out.printf("소문자 %c의 대문자는 %c입니다.\n", 'a', 'A');
		
	    double d = 0.35;
	    	System.out.printf("오늘의 코로나 환자 평균은 %.2f명입니다.\n", d);

	
	
	 
	   
	
	
	
	}		
}

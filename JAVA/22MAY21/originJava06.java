
public class originJava06 {

	public static void main(String[] args) {
		
		// 문자와 문자열 
		
		char ch = 'A';
		// char ch1 = 'AA';  char 변수는 두개 이상의 문자를 대입할 경우 에러가 뜸
		
		String ch2 = "ABC"; // 두개 이상의 문자를 대입하기 위해서는 String 변수를 사용
		
		String s1 = "A" + "B";
		System.out.println(s1);
		
		String S2 = "" + "B";
		System.out.println(S2);  
		
		// 이걸 활용하여 숫자를 문자열로 바꿀 수 있다. (문자열과 숫자가 합쳐지면 무조건 숫자가 문자열로 바뀌는 성질을 가지고있음)
		
		String S3 = "" + 7 + 7;    // "" + 7 + 7 -> "7" + 7 -> "7" + "7" -> "77"
		System.out.println(S3);
		
		String S4 = 7 + 7 + ""; // 7 + 7 + "" -> 14 + "" -> "14"
		System.out.println(S4);
		
	
		// 두 변수 값 교환하기
		
		int x = 10, y = 20;  
		int a;   //인트값에는 어떠한 문자형이 들어가도 상관은 없음
		
		System.out.println("x = " + x);
	    System.out.println("y = " + y);
		System.out.println("ㅡㅡㅡㅡㅡㅡㅡㅡ");
	    
		a = x;
		x = y;
	    y = a;
	    
	    System.out.println("x = " + x);
	    System.out.println("y = " + y);
		
		
		
		// 이로인해서 int 변수 초기화를 통해 메모리가 어떻게 관리되는지 알아볼 수 있었음. 
	    
		
		
		
		
		
		
		
		

	}

}

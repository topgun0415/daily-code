
public class originJava22 {

	public static void main(String[] args) {
		
		// 중첩 For문 : 	For문 내에 또 다른 For문을 포함시킬 수 있다.
		
		// 구구단 
		
		for (int i = 1; i <= 9; i++) {
			
			for (int j = 1; j <=9; j++)  {
				
				System.out.println( i + "*" + j + "=" + (i*j));
				
			
				
			}
					 
			    System.out.println();
			
		}
		
		System.out.println("**********");
		System.out.println("**********");
		System.out.println("**********");
		System.out.println("**********");
		System.out.println("**********");
		
		System.out.println();
		
		for ( int a = 1; a <= 5; a++) {
			
			// System.out.println("**********");
			for (int z = 1; z <= 10; z++) {

				System.out.print("*");
			
		}
			
			System.out.println();
			
			
		}
		

		
	
	}
	

}

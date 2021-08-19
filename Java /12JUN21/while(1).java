
public class originJava30 {

	public static void main(String[] args) {
		
		
//		for (int i = 1; i <=5; i++)
//		{
//			System.out.println("Hello World!");
//		}
//			System.out.println();
//			
//		int j = 1;
//		while ( j <= 10)
//		{
//			System.out.println("HELLO WORLD!");
//			
//			j++;
//		}
		
		int sum = 0, i = 0;
		
		// i를 1씩 증가시켜서 sum에 계속 더해간다.
		
		while ((sum += ++i) <= 100)  // sum = sum + (++i) <= 100
		{
			System.out.printf(" %d - %d%n", i, sum);
			
		}

	}

}

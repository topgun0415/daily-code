import java.util.Arrays;

  class powerTest {
	  
	  	static long power (int x, int n) {
	  		
	  		if (n==1) return x;
	  		return x * power(x, n-1);
		  		
	  	}

		public static void main (String args []) {
			
			int x = 2;
			int n = 5;
			long result = 0;
			
			for (int i = 1; i <= n; i++) {
				result += power (x, i);                // result += 를 제대로 보지 못해서 답을 못 구했음. 
				
			}
			
			System.out.println(result);
			
		}
			
		
	} 
  
  
  /* 2 * f(2, 1) = 2
   *  2 * f(2, 2) = 4
   *  2 * f(2, 3) = 8
   *  2 * f(2,4 ) =  16
   *  2 * f(2, 5 ) = 32
   */
  

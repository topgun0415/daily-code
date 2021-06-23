public class ch06practice {
	
		public static void main (String args []) {
	
			
			// return문 
			
			mymath math = new mymath();
			math.gugudan(9);
			
			
			System.out.println(math.max(45, 62));
			
	}
	
}

	class mymath {
		
		void gugudan (int number)   
    {
			if (!(2<=number && number <=9))  // 2보다 크고 9보다 작은 숫자가 아니면 메서드 종료하기
				return;
			
			
			for (int i = 0; i < 10; i++)
				System.out.printf("%d * %d = %d%n", number, i, number*i);			
		}
		
		long max (long a, long b) 
    {
			if (a > b) 
				return a;
			else 
				return b;
		} 
		
		long add(long a, long b) {return a + b;} // 밑에 두 줄을 한 줄로 간단하게 만들 수 있다.
//		{ long result = a + b;
//		return result;
//		}
		long subtract (long a, long b) {return a - b;}
		long mulitiply (long a, long b) {return a * b;}
		double divide (double a, double b) {return a / b;}
	}



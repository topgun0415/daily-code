public class ch06practice {
	
				// Call stack (호출 스택)
				// 스택 : 밑이 막힌 상자. 위에 차곡차곡 쌓인다.
	
		public static void main (String args []) {
			System.out.println("main(String [] args)이 시작되었음.");
			
			firstMethod ();
			System.out.println("main(String [] args)이 끝났음.");
			
		}
			
		static void firstMethod () {
			System.out.println("firstMethod()가 시작되었음.");
			secondMethod ();
			System.out.println("firstMethod()가 끝났음.");
			
		}
		
		static void secondMethod () {
			System.out.println("SecondMethod()가 시작되었음.");
			System.out.println("SecondMethod()가 끝났음.");
			
			
		}
			
		/* 출력 : main(String [] args)이 시작되었음.
						 firstMethod()가 시작되었음.
						 SecondMethod()가 시작되었음.
					   SecondMethod()가 끝났음.
						 firstMethod()가 끝났음.
						 main(String [] args)이 끝났음.
		 */ 
			
	 }
		

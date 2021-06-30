
class ch06practice {
		
	static int [ ] arr = new int [10];
	
		static { 
		
		for (int i = 0; i < arr.length; i++) {
			// 1과 10사이의 임의의 값을 배열 arr에 저장한다.
			int random = 0;
			random = (int)(Math.random() * 11); 
			arr[i] = random;

		}
		
	}
	
	public static void main (String [] args) { 
		
		for (int i = 0; i < arr.length; i ++ ) {
			
			System.out.println("arr["+ i +"]   : " + arr[i]);
			
		}
	
	}
	  
}




  

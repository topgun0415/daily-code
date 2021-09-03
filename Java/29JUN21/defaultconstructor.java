
public class ch06practice {
	  
		public static void main (String [] args) { 
			
				Data1 d1 = new Data1 ();
				Data2 d2 = new Data2 ();  		// Compile error 발생
				
		}
		
}

	class Data1 {
		int value;
	}
	class Data2 {
		int value;
		
			Data2(int x) { 
				value = x;
			}
	}
	
	// 이 예제에서 컴파일 에러가 발생하지 않도록 하기 위해서는 위의 오른쪽 코드와 같이 data2의 인스턴스를 생성할 때 생성자 Data2(int x)를 사용하던가
	// 아니면 클래스 Data2에 생성자 Data2( ) 를 추가로 정의해주면 해결된다. 
	// ★ 기본 생성자가 컴파일러에 의해서 추가되는 경우는 클래스에 정의된 생성자가 하나도 없을 때 뿐이다.
	
	 
  

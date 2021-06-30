class InitTest {
		
		int x;					// 인스턴스변수
		int y = x;
		
		void method ( ) {
			int i = 0;				// 지역변수
			int j = i;
			
//		int j = i;			// error : 지역변수를 초기화하지 않고 사용
			
			// 인스턴스 변수 x는 초기화를 해주지 않아도 자동적으로 int형의 기본값인 ()으로 초기화 되므로, 'int y= x;'와 같이 할 수 있다. x의 값이 0이므로 y역시 0이 저장되기 때문이다.
			// 하지만, method1()의 지역변수 i는 자동적으로 초기화디지 않으므로, 초기화 되지 않은 상태에서 변수j를 초기화 하는데 사용될 수 없다. 컴파일하면 에러가 발생!!
			
		}

}

/* 맴버변수의 초기화 방법
 * 1. 명시적 초기화
 * 2. 생성자
 * 3. 초기화 블럭 
 * - 인스턴스 초기화 블럭 : 인스턴스변수를 초기화 하는데 사용.
 * - 클래스 초기화 블럭 : 클래스변수를 초기화 하는데 사용.
 */

class BlockTest {
	
	static { 
		System.out.println("static {    }");      // 클래스 초기화 블럭 : 처음 메모리에 로딩될 때 한번만 수행됨
	}
	
	{
		System.out.println(" {    }");				// 인스턴스 초기화 블럭 : 인스턴스 초기화 블럭은 인스턴스가 생성될 때 마다 수행됨
	}
	
	public BlockTest ( ) {
		System.out.println("생성자");
	}
	
	
}
public class ch06practice {
	
	
	
	public static void main (String [] args) { 
		
		System.out.println("BlockTest bt = new BlockTest ( );  ");
		BlockTest bt = new BlockTest ();
		
		System.out.println("BlockTest bt2 = new BlocTest ( );");
		BlockTest bt2 = new BlockTest ();
		
	}
	  
			
}
  

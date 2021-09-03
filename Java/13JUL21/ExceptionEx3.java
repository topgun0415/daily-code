
public class ch08Practice {

	public static void main (String args []) {
		System.out.println(1);
		System.out.println(2);
		try {
				System.out.println(3);
				System.out.println(4/0);	  // 여기서 예외가 발생했기 때문에 try 블럭에서 5는 출력이 되지 않고 바로 catch 블럭의 문장으로 넘어가는 걸 볼 수 있다.
				System.out.println(5);
		} catch (Exception e) {
			System.out.println(6);
			System.out.println(7);
		}
		System.out.println("The End");		
			
	} // main 메서드의 끝
} 

//System.out.println(1);
//System.out.println(2);
//
//try {
//		System.out.println(3);
//		System.out.println(4);	
//} catch (Exception e) {
//	System.out.println(5);
//}
//System.out.println(6);		

/* 출력값
 * 1
 * 2
 * 3
 * 4
 * 6   
 * 이 구조같은 경우 try 블럭에서 전혀 예외가 발생하지 않았으므로 catch 블럭의 문장이 실행되지 않았다.
 */




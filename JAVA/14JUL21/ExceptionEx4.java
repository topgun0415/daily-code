import java.io.File;

public class ch08Practice {

	public static void main (String args []) throws Exception {
		method1 ();  // 같은 클래스내의 static 맴버이므로 객체생성없이 직접 호출가능
	} // main 메서드의 끝
	static void method1 () {
		try {
			throw new Exception ();
		} catch (Exception e) {
			System.out.println("method1메서드에서 예외가 처리되었습니다");
			e.fillInStackTrace();
		}
	}	
}


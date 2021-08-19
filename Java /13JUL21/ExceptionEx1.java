
public class ch08Practice {

	public static void main (String args []) {
		
		//Exception try - catch 문 
		
		try {
			try {    } catch (Exception e) {   }		
		} 	catch (Exception e) {
			try {    } catch (Excepton e)  {   }    // 에러 : 변수 e가 중복 선언되었다. ( catch 블럭 내에 또 하나의 try - catch 문이 포함된 경우, 같은 이름의 참조변수를 사용해서는 안된다.
		}	// try - catch의 끝
		
		try {
			
		} catch (Exception e) {
			
			
		} // try-catch 의 끝 
		// main메서드의 끝
	}

}


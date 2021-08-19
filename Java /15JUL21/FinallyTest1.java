public class ch08Practice {

	public static void main (String args []) {
		
		//fianlly 블럭 : 예외의 발생여부에 관계없이 무조건 실행되어야하는 코드를 넣을 목적으로 사용
		
		try {
			startInstall ();
			copyFiles ();
//			deleteTempFiles ();  예외가 없으면 처리되는 try 문 (코드중복 발생)
		} 
		catch (Exception e) { 
			e.printStackTrace();
//			deleteTempFiles ();  예외가 있으면 처리되는 catch 문 (코드중복 발생)
		}	
		finally {
			deleteTempFiles();
		} //try - catch 문 끝!
	}	//main 끝 

static void startInstall () { 
		/* 인스톨에 필요한 내용을 적는다 */
	}


static void copyFiles () { 
		/* 파일들을 복사하는 코드를 적는다 */
	}

static void deleteTempFiles () {
		/* 임시파일들을 삭제하는 코드를 적는다(가비지콜렉터) */ 
	
	}

} 
 

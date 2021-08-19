public class ch08Practice {

	public static void main (String args []) {
			
			try {
				copyFiles ();
				StartInstall ();   // 여기서 예외 발생.. StatInstall 메서드를 실행하는데 예외를 발생시키는 메서드고 if로 조건문을 만들어 만족하는 조건문에 따라 예외상황을 던지도록 만들어놨음
			} 
			catch (SpaceException se) {
				System.out.println("에러 메시지 : " + se.getMessage()); // 이 getMessage()가 throw new MemoryException ("내용") 임!
				se.printStackTrace();
				System.out.println("공간을 확보한 후에 다시 설치해주시기 바랍니다");
			}
			catch (MemoryException me) {
				System.out.println("에러 메시지 : " + me.getMessage());
				me.printStackTrace();
				System.out.println("메모리를 확보한 후에 다시 설치해주시기 바랍니다");
			}
			finally {
				deleteTempFiles ();
			}
	}
	
	
static void StartInstall () throws MemoryException, SpaceException {
	if(enoughMemory()) 	
		throw new MemoryException ("설치할 메모리가 부족합니다");
	if(enoughSpace()) 
		throw new SpaceException ("설치할 공간이 부족합니다");
	
	
}

static void copyFiles () { System.out.println("copyFiles processed");  }
static void deleteTempFiles () {       		}

static boolean enoughSpace () {
		// 설치하는데 필요한 공간이 있는지 확인하는 코드
		return false;
}

static boolean enoughMemory () {
		// 설치하는데 필요한 메모리가 있는 확인하는 코드
		return true;
}
}

class SpaceException extends Exception {
	SpaceException (String msg) {
		super(msg);
	}
	
}

class MemoryException extends Exception {
	MemoryException (String msg) {
		super(msg);
	}
	
}

//이를 구현하라고 하면 힘들겠지만 과정 이해는 충분히 가능함. 

public class ch08Practice {

	public static void main (String args []) {
		
			ch08Practice.Method1();
			System.out.println("Method1()가 실행되고 다시 메인메서드로 돌아왔습니다.");
			
	}
	

 
static void Method1 () {		// method1 () 은 static 메서드이므로 인스턴스 생성없이 직접 호출이 가능하다.
			try {
				System.out.println("Method1() 이 실행되었습니다.");
				return;
			}
			catch (Exception e) {
				e.printStackTrace();
			}	
			finally {
				System.out.println("method1()의 finally블럭이 실행되었습니다.");
			}
		}
  }	

import java.util.Arrays;
		
		class MemberCall {
			
			int iv = 10;
			static int cv = 20;
			
			int iv2 = cv;
//		static int cv2 = iv;     // 에러 : 클래스변수는 인스턴스변수를 사용할 수 없습니다.
			static int cv2 = new MemberCall ().iv;  // 이처럼 객체를 생성해야 사용가능.
			
			static void staticMethod1 ()  {
				System.out.println(cv);
//			System.out.println(iv);   // 에러 : 클래스 메서드에서 인스턴스 변수를 사용불가
				MemberCall c = new MemberCall ();
				System.out.println(c.iv);
				
				
			}
			
			void instanceMethod1 () {
				System.out.println(cv);
				System.out.println(iv);
				
				
			}
			
			static void staticMethod2 () {
				
				staticMethod1 ();
//			instanceMethod (); // 에러 : 클래스메서드에서는 인스턴스메서드는 호출 불가
				MemberCall c = new MemberCall ();
				c.instanceMethod1();  //인스턴스를 생성한 후에야 호출할 수 있음
				
				
			}
			
			void instanceMethod2 () {     // 인스턴스 메서드에서는 인스턴스메서드와 클래스메서드
				
				staticMethod1 (); //Static메서드는 인스턴스 메서드에서 사용 가능 
				instanceMethod1 (); // 모두 생성없이 바로 호출이 가능하다.
				staticMethod2 ();
				
				
				
			}
			
			
		}
 
	
		
		public class ch06practice {
	  	
		public static void main (String args []) {
	
			
		 } 
			
	} 
  
  

  
  

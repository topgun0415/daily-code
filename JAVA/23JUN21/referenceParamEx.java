class Data { int x;  }

	public class referenceParamEx {
		public static void main (String args []) {
			
			// 기본형 매개변수와 참조형 매개변수
			
			// 기본형 매개변수 : 변수의 값을 읽기만 할 수 있다. (read only)
			// 참조형 매개변수 : 변수의 값을 읽고 변경할 수 있다. (read & write )
			
			
			Data d = new Data ();
			d.x = 10;
			System.out.println("main () : x = " + d.x );
			
			change(d);
			System.out.println("After change (d)");
			System.out.println("mian() : x = " + d.x);
			
		}
			
			static void change (Data d) {  //참조형 매개변수
				d.x = 1000;
				System.out.println("change () : x = " + d.x);
				
				// Data 클래스의 매개변수 즉 원본이 변한것이 아니라 change 메서드의 매개변수 x의 값이 변경된 것이다. 그러니 원본에는 아무런 영향을 미치지 못한다.
				
				
				
			}
			
			
	 }
	

 
			
  
		
	
	
			
 
			
  
		
	
	

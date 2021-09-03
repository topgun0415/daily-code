
 public class ch07Practice {

	public static void main (String [] args ) {
	
		point p = new point ();
		p.x = 3;
		p.y = 5;
		
		// System.out.println(p.toString());  
		System.out.println(p);    // // p.toString() 와 p는 같다 
		
	//	System.out.println("p.x = " + p.x);   기존의 출력방법은 print 메서드를 통해서 일일이 쳐줬지만 point 클래스에서 object 클래스의 toString 메서드를 오버라이딩해서 변수이름만으로 출력 가능
	//	System.out.println("p.y = " + p.y);

	}
 
}
 
 class point {
	 
	 int x , y;
	 
	 public String toString() {                // Object 클래스의 toString ( ) 을 오버라이딩
		 
		 return "x : " + x + " y : " + y ; 
		 
	 }
	 
 }

 

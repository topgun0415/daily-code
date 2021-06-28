import java.util.Arrays;

			//클래스 메서드 : 객체생성 없이 호출 가능한 메서드, static이 붙여짐 
			// 인스턴스 메서드 : 객체 생성이 필요한 메서드 , 인스턴스 생성이 필요 
			
			// 객체는 즉 iv(인스턴스 변수) 묶음이다. 

class MyMath2 {
		
		long a, b;
		
		// 인스턴스 변수 a,b 만을 이용해서 작업하므로 매개변수가 필요없다.
		
		long add () { return a + b; }      // a, b는 인스턴스변수
		long subtract () { return a - b; }
		long multiply () { return a * b; }
		double divided () { return a / b; } 
		
		// ★클래스 메서드는 인스턴스 변수와 관계없이 매개변수만으로 작업이 가능하다.
		
		
		static long add (long a , long b) { return a + b; }   // a, b 는 지역변수
		static long subtract  (long a, long b) { return a - b; }  
		static long multiply (long a, long b) { return a * b; }
		static double divided (double a, double b) { return a / b; } 
}
		
 public class myMathTest2.java {
	  	
		public static void main (String args []) {
			
			// 클래스메서드 호출. 인스턴스 생성없이 호출 가능
			System.out.println("------클래스 맴버---------");
			System.out.println(MyMath2.add(100, 200));
			System.out.println(MyMath2.subtract(200, 100));
			System.out.println(MyMath2.multiply(200L, 100L));
			System.out.println(MyMath2.divided(200.0, 100.0));
		
			System.out.println("------인스턴스 맴버-------");
			MyMath2 mm = new MyMath2 ();		// 클래스 변수와는 다르게 인스턴스 메서드는 인스턴스를 반드시 생성해줘야함
			mm.a = 200L;     // 클래스 변수는 메서드 선언부쪽에 매개변수를 입력해서 바로바로 입력이 가능했지만 이건 객체를 생성해야하기 때문에 일일이 넣어줘야한다는 불편함이 있음
			mm.b = 100L;		// 다만 장점은 각자 다른 인스턴스를 생성하여 각자 다른 long 타입의 a, b에 다른 값을 대입 가능
			
			// 인스턴스 메서드는 객체성성 후에만 호출 가능 
			
			System.out.println(mm.add());
			System.out.println(mm.subtract());
			System.out.println(mm.multiply());
			System.out.println(mm.divided());
			
		 } 
			
		// 메서드 선언방법이 다르니까 잘 참조해서 외울 것
		
	} 
  
  

  
  

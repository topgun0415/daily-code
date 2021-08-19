public class ch07Practice {
	
	
	public static void main (String [] args) {
		
		Outer outer = new Outer ();       // 객체 생성할때는 반드시 외부 인스턴스를 만들어야지만 내부 클래스 선언이 가능함! 
		Outer.Inner inner = outer.new Inner (); 
		inner.method1();
	}
}
class Outer {
		int value = 10;
		
	class Inner {
		int value = 20;
		
		void method1() {
			int value = 30; 
			
			System.out.println("value =  " + value);
			System.out.println("this.value =  " + this.value);
			System.out.println("Outer.this.value = " + Outer.this.value);
		}
	}		
}

// 출력값 
// value =  30
// this.value =  20
// Outer.this.value = 10

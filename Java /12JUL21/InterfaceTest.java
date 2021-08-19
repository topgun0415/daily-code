
public class ch07Practice {
	
	public static void main (String [] args) {
	
			// 인터페이스에 대한 이해 : 1. 클래스를 사용하는 쪽(User)과 클래스를 제공하는 쪽(Provider)이 있다.
			// 										2. 메서드를 사용(호출) 하는 쪽(User)에서는 사용하려는 메서드(Provider)의 선언부만 알면 된다. (내용은 몰라도 된다)
		A a = new A ();
		a.methodA(new B());   // 타입 참조변수 = new 클래스 ( ); 와 다를바 없다. / 단지 new 클래스 (); 에 의해 생성된 객체의 참조값이 메소드의 매게변수로 전달되었다
		
		
	}	
	
}

class A {
	public void methodA (B b) {
		b.methodB(); { 
			
		}
	}
}

class B extends A { 
	public void methodB () {
		System.out.println("MethodB() processed!");
		
	}
}

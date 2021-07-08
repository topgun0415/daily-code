
public class ch07Practice {
	
	public static void main (String [] args) {

			Parent p = new Child ();
			Child c = new Child ();
			
			System.out.println("Parent p = new Child (); = " + p.x );
			p.method();
			System.out.println("Child c = new Child (); = " + c.x  );
			c.method();
			
			// 메서드인 method () 의 경우 참조변수의 타입에 관계없이 항상 실제 인스턴스의 타입인 Child클래스에 정의된 메서드가 호출되지만 
			// 인스턴스 변수인 x는 참조변수의 타입에 따라 달라진다. 
			
			/* 출력값 
			 * Parent p = new Child (); = 100
				Child Method processed
				Child c = new Child (); = 200
				Child Method processed
			 */

	}
	
}

class Parent {
	
	int x = 100;
	
	void method () {
		
		System.out.println("Parent Medthod processed");
	}
	
	
}

class Child extends Parent {
	
	int x = 200;
	
	void method () {
		
		System.out.println("Child Method processed");
	}
	
}

//class Car {
//	
//	String color;
//	int door;
//	
//	void drive () {
//		
//		System.out.println("DRIVE, BRRR~");
//	}
//	
//	void stop () {
//		
//		System.out.println("STOP!!!");
//	}
//	
//}
//
//class FireEngine extends Car  {
//	
//	void water() {
//		
//		System.out.println("WATER!!!");
//	}
//	
//
//class Ambulance extends Car {
//	
//	void siren () {
//		
//		System.out.println("SIREN~~~~");
//	}
//	
// }
//
//}


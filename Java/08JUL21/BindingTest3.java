
public class ch07Practice {
	
	public static void main (String [] args) {

			Parent p = new Child ();
			Child c = new Child ();
			
			System.out.println("Parent p = new Child (); p.x = " + p.x );
			p.method();
			System.out.println();
			System.out.println("Child c = new Child (); c.x = " + c.x  );
			c.method();
			
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
		
		System.out.println("x = " + x);
		System.out.println("super.x = " + super.x);
		System.out.println("this.x = " + this.x);
		
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


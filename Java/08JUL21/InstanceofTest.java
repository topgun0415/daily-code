
public class ch07Practice {
	public static void main (String [] args) {

		FireEngine fe = new FireEngine ();
		
		if (fe instanceof FireEngine ) {
			
			System.out.println("This is a FireEngine instance.");
		}
		
		if (fe instanceof Car) {
			
			System.out.println("This is a Car instance.");
		}

		if (fe instanceof Object) {
			
			System.out.println("This is a Object instance.");
		}
	
		fe.water();
		System.out.println(fe.getClass().getName());  // 클래스의 이름을 출력
		
	}  // class Car { }
		// class FireEngine extends Car {  } 
}
	
class Car {
	
	String color;
	int door;
	
	void drive () {
		
		System.out.println("DRIVE, BRRR~");
	}
	
	void stop () {
		
		System.out.println("STOP!!!");
	}
	
}

class FireEngine extends Car  {
	
	void water() {
		
		System.out.println("WATER!!!");
	}
	

class Ambulance extends Car {
	
	void siren () {
		
		System.out.println("SIREN~~~~");
	}
	
 }

//void dowork (Car c) {
//	
//	if (c instanceof FireEngine) {
//		
//		FireEngine fe = (FireEngine) c;
//		fe.water(); 	
//	} 
//	else if (c instanceof Ambulance) {
//		
//		Ambulance a = (Ambulance) c;
//		a.siren(); 
//	}
//}

}


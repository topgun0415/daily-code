
public class ch07Practice {
	public static void main (String [] args) {

//	Car car = new Car ();  
		Car car = new  FireEngine(); 
		Car car2 = null;
		FireEngine fe = null;
		
		car.drive(); 
		fe = (FireEngine) car;   // 다운캐스팅
		fe.drive();	
		fe.water();
		car2 = fe;
		car2.drive();
//	car2.water();   Compile Error !!! 
//	이 코딩의 문제는 참조변수 car가 참조하고 있는 인스턴스가 Car 타입의 인스턴스라는데 있다. 전에 배운 것처럼 조상타입의 인스턴스를 조상타입의 인스턴스를 자손타입의 참조변수로 참조하는 것은 허용되지 않는다.		
		
	}
	
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
	
}


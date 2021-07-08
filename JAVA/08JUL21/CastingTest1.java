
public class ch07Practice {
	public static void main (String [] args) {

		Car car = null;
		FireEngine fe = new FireEngine ();
		FireEngine fe2 = null;
		
		fe.water();
		car = fe;		// 자손타입 ▶ 조상타입(업캐스팅)으로 한거니까 형변환 생략 가능
//	car.water();   Compile Error !! : Car타입의 참조변수는 사용할수있는것이 변수 2개와 drive, stop 메서드 밖에 없음.
		fe2 = (FireEngine) car; // 조상타입 ▶ 자손타입(다운캐스팅) 한거니까 형변환 생략 불가능
		fe2.water(); 
		fe2.color = "BLACK";
		
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


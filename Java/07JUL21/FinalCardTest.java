
public class ch07Practice {

	public static void main (String [] args ) {
		
		Card c = new Card ();
//	c.NUMBER = 5;  이러면 final int NUMBER로 지정한 변수때문에 다르게 초기화해줘야한다.
		System.out.println(c);
		System.out.println(c.KIND);
		System.out.println(c.NUMBER);
		System.out.println("KIND = " + c.KIND + ", NUMBER = " + c.NUMBER);
		Card c2 = new Card ("HEART", 10);
		System.out.println(c2);
		Card c3 = new Card ("SPACE", 20);
		System.out.println(c3);
		
	}
	
}

class Card {
	
	final int NUMBER;  	// 상수지만 선언과 함께 초기화 하지말고
	final String KIND;		// 생성자에서 ★단 한번만 초기화할 수 있다
	static int width = 100;
	static int height = 250;
	
	Card (String kind, int number) {	  // 상수로 선언하여도 옆에 보이는 생성자를 통해 초기화가 단 한번만 가능!!
			KIND = kind;
			NUMBER = number;
	}
	
	Card () {
		this("HEART", 1);
	}
	
	public String toString () {
		return KIND + "  " + NUMBER;
	}
	
}


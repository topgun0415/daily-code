class Card  
		{
			// Card 인스턴스는 자신만의 무늬와 숫자를 유지하고 있어야 하므로 이들을 인스턴스 변수로 선언하였고,
			int number;   //인스턴스변수
			boolean direction;
			String shape;
			String color;
			// 각 카드의 폭과 높이는 동일해야하므로 static 즉 클래스변수로 선언하였다. 카드의 폭을 변경해야할 경우 하나만 바꿔줘도 모든 카드의 폭 값이 바뀌는 편리함이 장점이다.
			static int width = 100; // 폭   
			static int height = 250; //높이	
		}

 	// 위와 같이 객체를 만들기 위해서는 public class 및 해당 클래스의 지역변수 외에 따로 만들어줘야한다. 
public class cardTest {

	public static void main(String[] args) {
		System.out.println("Card.width = " + Card.width );    // 클래스 변수는 밑에 있는 인스턴스변수와는 다르게 객체생성이 필요 없이 바로 사용 가능
		System.out.println("Card height = " + Card.height);
		
		Card c1 = new Card (); // 인스턴스변수는 이렇게 c1 이나 c2와 같이 참조변수를 선언해줘야지만 생성되어진다. 
		c1.shape = "Heart";
		c1.color = "red ";
		c1.number = 7;
		
		Card c2 = new Card ();
		c2.shape = "Space";         //인스턴스변수 값 변경
		c2.color = "black";
		c2.number = 4;
		
		System.out.println("c1은 " + c1.shape + ", " + c1.number + "이며, " + "크기는" + "(" + c1.width +",  " + c1.height  + ")" );
		System.out.println("c2은 " + c2.shape + ", " + c2.number + "이며, " + "크기는" + "(" + c2.width +",  " + c2.height  + ")" );
		
		c1.width = 50;
		c2.height = 80;
		System.out.println();
		System.out.println("c1의 width와 height 값을 각각" + c1.width + ", " + c1.height  + "으로 변경");
		System.out.println();
		System.out.println("c1은 " + c1.shape + ", " + c1.number + "이며, " + "크기는" + "(" + c1.width +",  " + c1.height  + ")" );
		System.out.println("c2은 " + c2.shape + ", " + c2.number + "이며, " + "크기는" + "(" + c2.width +",  " + c2.height  + ")" );
		
		
		//인스턴스 변수는 인스턴스가 생성될 때 마다 생성되므로 인스턴스마다 각기 다른 값을 유지할 수 있지만, 클래스 변수는 모든 인스턴스가 하나의 저장공간을 공유하므로, 항상 공통된 값을 갖는다.

	}

}

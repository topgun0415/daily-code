
public class Main {

	public static void main(String[] args) {
			
			Card c1 = new Card ("SPADE", 1);
			Card c2 = new Card ("HEART", 10);
			
			System.out.println(c1.toString());	
			System.out.println(c2.toString());	
			
		
	}
	
}

class Card {
	String card;
	int num;
	
	Card () {
		this("SPADE", 1);  
	}
	
	Card (String card, int num) {
		this.card = card;
		this.num = num;
	}
	
	public String toString () { 			// 조상의 클래스에서 오버라이딩 했기 때문에 범위가 같거나 넓어야 함
		return "CARD : " + card + " / NUMBER : " + num;
	}

}



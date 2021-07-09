
public class ch07Practice {
	
	public static void main (String [] args) {
			
		
		Buyer b = new Buyer ();
		Product t = new Tv ();
		Product c = new Computer ();
		System.out.println("현재 가지고 있는 돈은 [" + b.money + "]원 입니다.");
		b.buy(t); 
		b.buy(c);
		System.out.println("현재 남은 돈은 [" +  b.money + "]원 입니다.");
		System.out.println("현재 남은 보너스포인트는 [" +  b.bonusPoint + "]원 입니다." );
		Product p = new Playstation5 ();
		b.buy(p);
		
	}
	
}

class Product {
		int price;						//제품의 가격
	    int bonusPoint;			// 제품구매 시 제공하는 보너스점수
		
	    Product (int price) {
	    	
	    this.price = price;
	    bonusPoint = (int)(price/10.0); // 보너스점수는 제품가격의 10%
	    }
	    
}

class Tv extends Product { 
		Tv() {
			super(1000000);	
		}
		public String toString () {return "Tv";}
	
} 
class Computer extends Product { 
		Computer() {
			super(2000000);	
		
		}
		public String toString () {return "Computer";}
		
} 

class Playstation5 extends Product {

	Playstation5() {
		super(8000000);
	}
	public String toString () {return "Playstation5";}
	
}

class Buyer {						// 고객, 물건을 사는 사람 
		int money = 10000000;	// 소유금액
		int bonusPoint = 0;	// 보너스 점수
		
		void buy(Product p) {
				if (money < p.price) {
					System.out.println("잔액이 부족해서 살 수 없습니다");
					return;
				}
				
				money -= p.price;
				bonusPoint += p.bonusPoint;
				System.out.println(p + "을/를 구매하셨습니다");
				
		}

}

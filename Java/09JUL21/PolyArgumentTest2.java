
public class ch07Practice {
	
	public static void main (String [] args) {
			
		Buyer b = new Buyer ();
		Product t = new Tv ();
		Product c = new Computer ();
		Product p = new Playstation5 ();
		
		// Tv , Computer , Playstation 5
		b.buy(t);
		b.buy(c);
		b.summary();
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
		Product [ ] item = new Product [10]; 
		int i = 0;
		
		void buy(Product p) {
				if (money < p.price) {
					System.out.println(p + "를 구매 시도 하였습니다만");
					System.out.println("잔액이 부족해서 살 수 없습니다");
					return;
				}
				
				money -= p.price;
				bonusPoint += p.bonusPoint;
				item [i++] = p;
				System.out.println(p + "을/를 구매하셨습니다");
				
		}
		void summary() {
			
			int sum = 0;
			String itemList = "";
		
			//반복문을 이용해서 구입한 물품의 총 가격과 목록을 만든다.
				
				for (int i = 0; i < item.length; i++) {
					
					if(item[i] == null) break;
					
					sum += item[i].price;
					itemList += item[i] + ",";

				}
		
				System.out.println("현재까지 구매하신 물품의 가격은 총 " + sum + "원 입니다.");
				System.out.println("현재까지 구매하신 물품들은 " + itemList + "입니다.");
				
		}

}

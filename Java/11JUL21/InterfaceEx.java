
public class ch07Practice {
	
	public static void main (String [] args) {
	
		
		
	}

}

// 모든 맴버변수는 public static final 이어야 하며, 이를 생략할 수 있다.
interface PlayingCard {    
		public static final int SPADE = 4; 
		final int DIAMOND = 3;      // 생략 
		static int HEART = 2;		  // 생략
		int CLOVER = 1;					  // 생략 
		
// 모든 메서드는 public abstract 이어야 하며, 이를 생략할 수 있다.	(default와 static 메서드는 제외) 
		
		public abstract String getCardNumber ();
		String getCardKind ();  // public abstract String getCardKind ( ); 생략된거임
	
}

interface Moveable {  
	// 지정된 위치(x, y)로 이동하는 메서드
	 void move (int x, int y);

}
interface Attackable {
	
	void attack (Unit u) {  }
}

interface Fighterable extends Moveable, Attackable { } 


class Fighter implements Fightable {
	
			public void move (int x , int y) {   }
			public void attack (Unit u) {   }
			
	
	
}

abstract class FIghter implements Fightable {
	
			public void move (int x , int y) {
			}
	
}


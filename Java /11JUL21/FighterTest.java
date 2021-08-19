
public class ch07Practice {
	
	public static void main (String [] args) {
			
			Fighter f = new Fighter ();
			
			if (f instanceof Object);
				System.out.println("f는 Object 클래스의 자손입니다.");
			
			if (f instanceof Unit);
				System.out.println("f는 Unit 클래스의 자손입니다.");   
				
			if (f instanceof Fightable);
				System.out.println("f는 Fighterable 인터페이스를 구현했습니다.");
		
			if (f instanceof Moveable);
				System.out.println("f는 Moveable 인터페이스를 구현했습니다. ");
				
			if (f instanceof Attackable);
				System.out.println("f는 Attackable 인터페이스를 구현했습니다. ");
	
	}

}

class Unit {
		int currentHP; // 현재 유닛의 체력
		int x, y; // 현재 유닛의 위치 (x 좌표, y)
	
}

interface Moveable { void move(int x, int y); }
interface Attackable { void attack(Unit u); }
interface Fightable extends Moveable, Attackable {  }

class Fighter extends Unit implements Fightable {
		public void move (int x, int y) {   }
		public void attack (Unit u) {   }
		
}

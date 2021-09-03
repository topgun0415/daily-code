
public class ch07Practice {
	
	public static void main (String [] args) {
			
		Unit [] group = new Unit [4];
		group [0] = new Marine ();
		group [1] = new Tank ();
		group [2] = new Marine ();
		group [3] = new Wraith ();
		
		for (int i = 0; i < group.length; i++) {
			
			group[i].move(100, 200);  //전군 좌표 (100, 200)으로 진군!
			
		}
		
	}
	
}

abstract class Unit  {
		int x, y;
		abstract void move (int x, int y);  // move 메서드가 추상적으로 선언된 것은 앞으로 Unit 클래스를 상속받아서 작성되는 클래스는 move 메서드를 자신의 클래스에 알맞게 반드시 구현해야 한다는 의미가 담겨있다.
		void stop () { }
		void attack () { }
	
}

class Marine extends Unit {
		int x , y; //현재 위치
		
		void move (int x , int y) { }   // 마린 GoGoGo!
		void stop () { } // 멈춤
		void stimPack () { } // 스팀팩 사용여부
		void Patrol () { } // 정찰

}

class Tank extends Unit {
		int x, y; // 현재 위치
		
		void move (int x, int y) { } 
		void stop () { }
		void siegemode () { }
	
}

class Wraith extends Unit {
		int x, y;
		
		void move (int x, int y) { }   //공중유닛이라 지상유닛과는 이동 메서드가 다를것으로 예상
		void stop () { }
		void clocking () { }
		
}

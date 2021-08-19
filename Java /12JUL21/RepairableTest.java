
public class ch07Practice {
	
	public static void main (String [] args) {
	
		
		// 각 유닛에 대한 객체 생성 완료
		Marine marine = new Marine ();    
		Dropship dropship = new Dropship ();
		Tank tank = new Tank ();
		SCV scv = new SCV ();
		
		
		scv.Repair(dropship);
		scv.Repair(tank);
		scv.Repair(scv);
		
//		scv.Repair(marine);  마린 객체는 Repairable 을 구현하지 않아서 수리가 불가능 (즉 인터페이스 객체에 묶이지 않아서 안된다는 뜻)
		
	}	
	
}

interface Repairable {  }

class Unit {     
	int hitPoint;
	final int MAX_HP;
	Unit(int hp) {
		MAX_HP = hp;
	}
}

class GroundUnit extends Unit {
		GroundUnit (int hp) {
			super(hp);
		}
}

class AirUnit extends Unit {
		AirUnit(int hp) {
			super(hp);
		}
}

class Tank extends GroundUnit implements Repairable {
		Tank () {
			super(150); 
			hitPoint = MAX_HP;
		}
		
		public String toString () {
			return "Tank";
		}
}

class Dropship extends AirUnit implements Repairable {
		Dropship () {
			super(200);
			hitPoint = MAX_HP;
		}
	
		public String toString () {
			return "Dropship";
		}
}

class Marine extends GroundUnit {
		Marine () {
			super(40);
			hitPoint = MAX_HP;
		}
		
		public String toString () {
			return "Marine";
		}
}

class SCV extends GroundUnit implements Repairable {
		SCV () {
			super(60);
			hitPoint = MAX_HP;
		}
		
		public String toString () {
			return "SCV";
		}
		
		void Repair (Repairable r) {
			if (r instanceof Unit) {        
				Unit u = (Unit) r;
				while (u.hitPoint != u.MAX_HP) {
					u.hitPoint++;
				}
				System.out.println(u.toString() + "가 수리되었습니다.");
			}
		}
}

// 책을 보며 코딩했지만 어떻게 동작하는지에 대해서 85% 정도 이해됨 ( 90번째 if 조건식에 r instanceof Unit 을 왜하는지에 대해서 잘 이해가 안됨 ) 

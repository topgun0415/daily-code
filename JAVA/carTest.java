
public class ch06practice {
	  
		public static void main (String [] args) { 
				
			Car c2 = new Car ();
			c2.color = "black";
			c2.door = 4;
			c2.gearType = "Auto";
			
//			|| (위에 방법도 가능하지만 밑에 생성자에 매개변수를 이용해서 바로 입력하면 코딩이 더 간결해진다)
		
			Car c1 = new Car ("white", "Auto", 4);	
			
			System.out.println("c1의 color = " + c1.color + " //c1의 gearType = " + c1.gearType + " //c1의 door = " + c1.door);
			System.out.println("c2의 color = " + c2.color + " //c2의 gearType = " + c2.gearType + " //c2의 door = " + c2.door);
			
			}
	}
	
	class Car  {
			String color;	
			String gearType;
			int door;
			
			Car () { }   // 기본생성자 
		Car (String c, String g, int d) {  // 매개변수가 있는 생성자 
				color = c;
				gearType = g;
				door = d;

			}
	
	}


public class ch06practice {
	  
		public static void main (String [] args) { 
				
			Car c2 = new Car () ;
			c2.color = "black";
			c2.door = 4;
			c2.gearType = "Auto";
			
			
//			|| (위에 방법도 가능하지만 밑에 생성자에 매개변수를 이용해서 바로 입력하면 코딩이 더 간결해진다)
		
			Car c1 = new Car ("white", "Auto", 4);	
			
			Car c3 = new Car ("Red"); 
			
			System.out.println("c1의 color = " + c1.color + " //c1의 gearType = " + c1.gearType + " //c1의 door = " + c1.door);
			System.out.println("c2의 color = " + c2.color + " //c2의 gearType = " + c2.gearType + " //c2의 door = " + c2.door);
			System.out.println("c3의 color = " + c3.color + " //c3의 gearType = " + c3.gearType + " //c3의 door = " + c3.door);
			// c3 의 경우 출력값은 Car c3 = "Red" , "Auto" , 4 가 나오는데.. 객체에서 스트링타입으로 컬러만 집어넣었을 경우 자동으로 "Auto"와 4개가 나오도록 만들었기 때문임
			
			}
	}
		class Car {
			String color;	
			String gearType;
			int door;
			
			Car () { 
				this("white", "auto", 4);    // Car (String color, String gearType, int door)를 호출
			}
			
			Car (String color) {
				this(color, "Auto", 4);
				
			}
			
			Car (String c, String g, int d ) { // 매개변수가 있는 생성자 
				this.color = c;
				this.gearType = g;
				this.door = d;
			}
			
	}		
				
  

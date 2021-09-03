
public class ch06practice {
	  
		public static void main (String [] args) { 
		
			Car c = new Car ();	
			
			Car c1 = new Car (c); //c의 복사본 c1을 생성
			
			Car c2 = new Car ("Red"); 
			
			System.out.println("c의 color = " + c.color + " //c의 gearType = " + c.gearType + " //c의 door = " + c.door);
			System.out.println("c1의 color = " + c1.color + " //c1의 gearType = " + c1.gearType + " //c1의 door = " + c1.door);
			System.out.println("c2의 color = " + c2.color + " //c3의 gearType = " + c2.gearType + " //c2의 door = " + c2.door);
			// c3 의 경우 객체에서 스트링타입으로 컬러만 집어넣었을 경우 자동으로 "Auto"와 4개가 나오도록 만들었기 때문에
			
			c1.door = 100; c1.color = "Black";
		
		
			System.out.println();
			System.out.println("c1.door = 100; c1.color = \"Black\" 대입 후" );	
			System.out.println();
			
			System.out.println("c1의 color = " + c1.color + " //c1의 gearType = " + c1.gearType + " //c1의 door = " + c1.door);
			System.out.println("c2의 color = " + c2.color + " //c2의 gearType = " + c2.gearType + " //c2의 door = " + c2.door);
			
			}
		
	}

		class Car {
			String color;	
			String gearType;
			int door;
			
			Car () {
			 this("White", "Auto", 4);
			}
			
			Car(Car c) {    // 인스턴스의 복사를 위한 생성자
				this (c.color, c.gearType, c.door);
//				color = c.color;
//				gearType = c.gearType;
//				door = c.door;
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
				
			
			

  

	
	class Tv {
			String color; // color
			boolean power;  // power on/off
			int channel; // channel

			void power () { power = !power; }  // TV를 켜거나 끄는 기능을 하는 메서드
			void channelUp () { channel ++;   }  // TV의 채널을 높이는 기능을 하는 메서드
			void channelDown () {  channel --; } // TV의 채널을 낮추는 기능을 하는 메서드
	}
	
		public class TvTest2 {
			public static void main (String args []) {
				
				Tv t1 = new Tv ();   // 참조변수 t1에 Tv 클래스의 인스턴스를 불러온다
				Tv t2 = new Tv ();   // Tv t2 ; t2 = new Tv (); 를 한 문장으로 축약 가능
				
				System.out.println("t1의 Channel 값은" + t1.channel + "입니다.");
				System.out.println("t2의 Channel 값은" + t2.channel + "입니다.");
				System.out.println();

				t1.channel = 5; // t1의 채널 값을 0에서 5로 변경
				System.out.println("t1의 Channel 값을 5로 변경했습니다.");
				System.out.println();
				
				System.out.println("t1의 Channel 값은 " + t1.channel + "입니다.");
				System.out.println("t2의 Channel 값은 " + t2.channel + "입니다.");
				
		}
			
	}
		
		
	
	

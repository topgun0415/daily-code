	
	class Tv {
			String color; // color
			boolean power;  // power on/off
			int channel; // channel

			void power () { power = !power; }  // TV를 켜거나 끄는 기능을 하는 메서드
			void channelUp () { channel ++;   }  // TV의 채널을 높이는 기능을 하는 메서드
			void channelDown () {  channel --; } // TV의 채널을 낮추는 기능을 하는 메서드
	}
	
		public class TvTest3 {
			public static void main (String args []) {
				
				Tv t1 = new Tv ();   // 참조변수 t1에 Tv 클래스의 인스턴스를 불러온다
				Tv t2 = new Tv ();   // Tv t2 ; t2 = new Tv (); 를 한 문장으로 축약 가능
				
				System.out.println("t1의 Channel 값은" + t1.channel + "입니다.");
				System.out.println("t2의 Channel 값은" + t2.channel + "입니다.");
				System.out.println();

				t2 = t1; // t1이 저장하고 있는 값(주소)을 t2에 저장한다. (자신을 참조하고 있는 참조변수가 하나도 없는 인스턴스는 더 이상 사용되어질 수 없으므로 GC(가비지 컬렉터)에 의해서 자동적으로 메모리에서 제거된다.
				t1.channel = 7; // t1의 채널 값을 0에서 5로 변경
				
				System.out.println("t1의 Channel 값을 7로 변경했습니다.");
				System.out.println("▼");
				
				System.out.println("t1의 Channel 값은 " + t1.channel + "입니다.");
				System.out.println("t2의 Channel 값은 " + t2.channel + "입니다.");
				System.out.println();
				
				t2.channel = 9; // 만약 t2의 채널 값을 9로 변경했을 경우는 어떠한가? 
				System.out.println("이번에는 t2의 Channel 값을 9로 변경했습니다.");
				System.out.println("▼");
				
				System.out.println("t1의 Channel 값은 " + t1.channel + "입니다.");
				System.out.println("t2의 Channel 값은 " + t2.channel + "입니다.");
				
				// 마찬가지로 한 인스턴스를 같이 공유하고 있기 때문에 어느 한쪽을 바꾸더라도 공유하는 인스턴스만 바뀌게 된다.
				
        /*t1의 Channel 값은0입니다.
          t2의 Channel 값은0입니다.

          t1의 Channel 값을 7로 변경했습니다.
          ▼
          t1의 Channel 값은 7입니다.
          t2의 Channel 값은 7입니다.

          이번에는 t2의 Channel 값을 9로 변경했습니다.
          ▼
          t1의 Channel 값은 9입니다.
          t2의 Channel 값은 9입니다.

		}
			
	}
		
		
	
	

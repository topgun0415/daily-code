import java.lang.Object;   // lang 패키지는 자바에서 자동적으로 import가 됨 

public class ch07Practice {

	public static void main (String [] args) {
		
		Time t = new Time (15, 01, 00);
		System.out.println(t);  // ◀ System.out.println(t.toString()); 와 같은 결과를 얻음
//	t.hour = 21;      Error : 변수 hour 접근제어가자 private 이므로 메인 메서드에서는 접근할 수 없다고 나옴 
		t.setHour(23); // 24 이상의 값이 나오면 전에 매개변수를 선언한 값이 나오도록 되어있음 (setHour 값 참조)
		System.out.println(t.toString());
	
	}
	
}

	class Time {
		
		private int hour, minute, second ;
		
		Time(int hour, int minute, int second) {
			
			super ();
			this.hour = hour;
			this.minute = minute;
			this.second = second;
			
		}
		
		public int getHour() { return hour; }
		public void setHour (int hour) {
			
			if (hour < 0 || hour > 23 ) return; 
			this.hour = hour;
			
		}
		
		public int getMinute() { return minute; }
		public void setMinute (int minute) {
			
			if (minute < 0 || minute > 59) return;
			this.minute = minute;
			
		}
		
		public int getSecond() { return second; }
		public void setSecond (int second) {
			
			if (second < 0 || second > 59) return;
			this.second = second;
			
		}
		
		public String toString () {     // 이처럼 참조변수의 출력이나 덧셈연사자를 이용한 참조변수와 문자열의 결합에는 toString ()이 자동적으로 호출되어 참조변수를 문자열로 대치한 후 처리한다.
														 // 이후 9장에서 java.lang 패키지와 유용한 클래스에서 보다 더 자세한 설명을 할 예정
			return hour + ":" + minute + ":" + second;
			
		}
		
	}

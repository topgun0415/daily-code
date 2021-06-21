import java.util.Arrays;

public class originJava06 {
	

	public static void main(String[] args) {
		
		//  클래스의 또 다른 정의 
		
		/*  1.  클래스 - 데이터와 함수의 결합
		 * 
		 *   그 동안 데이터와 함수가 서로 관계가 없는 것처럼 데이터는 데이터끼리 함수는 함수끼리 따로 다루어져 왔지만, 사실 함수는 주로 데이터를 가지고
		 *   작업을 하기 때문에 많은 경우에 있어서 데이터와 함수는 관계가 무척 긴밀하다고 볼 수 있다.
		 *   즉 자바와 같은 객체지향언어에서는 변수(데이터)와 함수를 하나의 클래스에 정의하여 서로 관계가 깊은 변수와 함수를 함께 다룰 수 있게 하였다.
		*/
		
		/*  2.  클래스 - 사용자정의 타입(user-defined type)
		 * 
		 *	 다른 프로그래밍언어에서도 사용자정의 타입을 정의할 수 있는 방법을 제공하고 있으며 자바와 같은 객체지향언어에서는 클래스가 곧 사용자 정의 타입이다. 
		 */
		
		int hour;   // 시간을 표현하기 위한 변수
		int minute; 
		float second;  
		
		// 자바에서는 시간을 표현할 수 있는 속성이나 메서드가 존재하지않는다. 그래서 시간을 표현하고 싶다면...
		
		int hour1, hour2, hour3;
		int minute1, minute2, minute3;
		float second1, second2, second3;
		
		// 다뤄야하는 시간의 개수가 늘어날 때마다 시, 분, 초를 위한 변수를 추가해줘야 하는데 데이터의 개수가 많으면 이런 식으로는 곤란한다.
		
		int [ ] hour5 = new int  [3];
		int [ ] minute5 = new int [3];
		float [ ] second5 = new float  [3];
		
		// 변수만 바꿔주면 되서 좋지만 시 분 초가 달라 자칫 오류가 발생할 수 있다.
		
		class Time {
			
			int hour;
			int minute;
			float second;
			
		}
		
			
		// 이렇게 시, 분, 초를 저장하기 위한 세 변수를 맴버 변수로 갖는 Time클래스를 정의한 것이다. 이제는 이 Time클래스를 사용해서 변경만 해주면 된다
			
			Time t1 = new Time ();
			Time t2 = new Time ();
			Time t3 = new Time ();
			
			Time [ ] t = new Time [3]
			t [0] = new time ();
			t [1] = new time ();
			t [2] = new time ();
			
		
			// 시간 구하는 Time클래스 
			
			public class Time {
					private int hour;
					private int mintue;
					private float second;
					
					public int getHour ()        {		return hours;  	}
					public int getMinute () 	  {  	return minutes;  }
					public float getSecond ()  { 		return seconds;   }
				
					public void setHour(int h) {
						
						if (h < 0 || h > 23) return;
						hour = h;
						
					}
				
					public void setMinute(int m) {
						
						if (m < 0 || m > 59) return;
						minute = m;
						
					}
					
					public void setSecond(float s) {
						
						if(s < 0.0f || s > 59.99f) return;
						second = s;
						
					}
					
			}
		
	}
	
	
}
		
		


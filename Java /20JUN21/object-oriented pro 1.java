import java.util.*;
public class originJava30 {
public static void mian (String args []) {
	
		// 객체지향언어 
		
		/* 1. 코드의 재사용성이 높다 : 새로운 코드를 작성할 때 기존의 코드를 이용하여 쉽게 작성할 수 있다.
		 *  2. 코드의 관리(유지보수)가 용이하다 : 코드간의 관계를 이요해서 적은 노력으로 쉽게 코드를 변경할 수 있다.
		 *  3. 신뢰성이 높은 프로그래밍을 가능하게 한다 : 제어자와 메서드를 이용해서 데이터를 보호하고 올바른 값을 유지하도록 하며, 코듸의 중복을 없애 오동작을 방지함.
		 */
		
		/* 클래스의 정의 : 클래스란 객체를 정의해 놓은 것
		 *  클래스의 용도 : 클래스는 객체를 생성하는데 사용
		 * 
		 * 객체의 정의 : 실제로 존재하는 것. 사물 또는 개념
		 * 객체의 용도 : 객체가 가지고 있는 기능과 속성에 따라 다름 
		 * 
		 * 유형의 객체 : 책상, 의자, 자동차, TV와 같은 사물
		 * 무형의 객체 : 수학공식, 프로그램 에러와 같은 논리나 개념
		 */
		
		/* 객체는 속성(맴버변수)과 기능(메서드)으로 이루어져있다.
		 *  ★알기 쉽게 TV로 예를 들어보자.  
		 *   TV의 속성 : 크기, 길이, 높이, 색상, 볼륨, 채널
		 *   TV의 기능 : 채널 변경하기, 음소거, 켜기, 끄기, 볼륨 높높이기, 낮추기
		 *   ▼ 밑에 예시로 Tv Class를 만들어보자
		 */
		
		class Tv {
			String color; // color
			boolean power;  // power on/off
			int channel; // channel

			void power () { power = !power; }  // TV를 켜거나 끄는 기능을 하는 메서드
			void channelUp () { channel ++;   }  // TV의 채널을 높이는 기능을 하는 메서드
			void channelDown () {  channel --; } // TV의 채널을 낮추는 기능을 하는 메서드
		}
		
		class TvTest {
			public void main(String args []) {
				
				Tv t;			//Tv인스턴스를 참조하기 위한 변수 t를 선언
				t = new Tv();      // Tv인스턴스를 생성한다.
				t.channel = 7;  // Tv인스턴스의 맴버면수 channel의 값을 7로 한다.
				t.power = false; 
				t.channelDown();    // Tv인스턴스의 메서드 channeldown()을 호출한다.
				System.out.println("현재 채널은 " + t.channel + "입니다.");  // 출력값 : 현재 채널은 6 입니다.
							
				
			}
			
		}
		
	}

 }
	

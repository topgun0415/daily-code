
public class ch08Practice {

	public static void main (String args []) {
		
		int number = 100;
		int result = 0;
		
		for ( int i = 0; i < 10; i ++) {
			try {
				result = number / (int)(Math.random() *10);   // try { 예외가 발생할 가능성이 있는 문장을 적는다 } 
				System.out.println(result);
			} catch (Exception e) {   // catch (Excpetion1이 발생했을 경우), 이를 처리하기 위한 문장을 적는다
				System.out.println("failed");
			}  // try-catch의 끝
		} // for의 끝
	} // main 메서드의 끝
} // 퍼블릭 클래스 끝

//  100을 0~9까지의 숫자로 나누는 반복문이지만 0으로 100을 나누는 것은 불가능하기에 출력값에 안나오는 등 문제가 런타임 오류가 발생했었다. 
//  이를 방지하고자 try-catch문을 이용하여 0이 랜덤으로 나오는 곳은 failed 이라고 표기하라고 코딩했으며, 이를 통해 프로그램이 비정상적으로 종료되는 일을 막았다.

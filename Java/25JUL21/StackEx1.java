import java.util.*;

public class Main {
	public static Stack back = new Stack ();		//클래스 인스턴스 (C.I) 생성
	public static Stack forward = new Stack ();
	public static void main (String [] args) {
			
			//스택이 차례대로 쌓임
			goURL("네이버");
			goURL("다음");
			goURL("깃헙");
			goURL ("롤");
			
			printStatus();
			System.out.println();
			System.out.println("==뒤로가기를 눌렀습니다==");
			goback();
			printStatus();
			
			System.out.println();
			System.out.println("==뒤로가기를 눌렀습니다==");
			goback();
			printStatus();
			
			System.out.println();
			System.out.println("==앞으로 가기를 눌렀습니다==");
			goforward();
			printStatus();
			
			System.out.println();
			System.out.println("==새로운 주소로 이동합니다== ");			// 새로운 주소 이동시 forward 스택이 비어지는 오류가 발생. 
			goURL("네이버웹툰");
			printStatus();
		
	}
	
	public static void printStatus() {
			System.out.println("back : " + back);
			System.out.println("forward : " + forward);
			System.out.println("현재화면은 '" + back.peek() + "' 입니다.");
	}
	
	public static void goURL(String URL) {
			back.push(URL);
			if(!forward.empty())
			forward.clear();
	}
	
	public static void goback () {
			if(!back.empty())
			forward.push(back.pop());
	}
	public static void goforward () {
			if(!forward.empty())
			back.push(forward.pop());
	}

}

import java.util.*;

public class Main {
	public static void main (String [] args) {
			
		Stack st = new Stack ();	// Stack 은 클래스이므로 객체 생성이 가능하지만
		Queue qe = new LinkedList ();	// Queue 는 인터페이스이므로 객체 생성이 불가능
		
		st.push("0");
		st.push("1");
		st.push("2");
		
		qe.offer("0");
		qe.offer("1");
		qe.offer("2");
		
		System.out.println(" == Stack ==");
		while (!st.empty()) {
			System.out.println("st =  [" + st.pop() + "]");
		}
		// Stack 은 데이터를 넣은 순서의 반대로 나가는걸 볼 수 있다 (LIFO)
		
		System.out.println(" ==Queue ==");
		while (!qe.isEmpty()) {
			System.out.println("qe = [" + qe.poll() + "]");
		}
		// Queue 는 데이터를 넣은 순서 그대로 나가는걸 볼 수 있음 (FIFO)
	
	}

}

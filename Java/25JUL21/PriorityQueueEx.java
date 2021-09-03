import java.util.*;

public class Main {
	
	
	
	public static void main (String [] args) {
		
			// PriorityQueue는 저장공간으로 배열을 사용하며, 각 요소를 '힙(heap)' 이라는 자료구조의 형태로 저장한다. 
		
			Queue pq = new PriorityQueue ();	
			pq.offer(3);	// pq.offer(new Integer(3)); 의 오토박싱
			pq.offer(1);
			pq.offer(5);
			pq.offer(2);
			pq.offer(4);
			pq.offer(7);
      // 출력 값 : [1, 2, 5, 3, 4, 7] : 우선순위대로 (숫자가 낮을수록 우선순위가 높음) 배열에 담겨 출력됨
			System.out.println(pq);
			
			Object obj = null;
			
			//PriorityQueue에 저장된 요소를 하나씩 꺼낸다
			while((obj = pq.poll())!=null)
				System.out.println(obj);
			
		
	}
	
}

	

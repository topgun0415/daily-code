import java.util.*;

public class Main {
	public static void main (String [] args) {
			
		// Collections and Framework : 컬렉션(다수의 객체)을 다루기 위한 표준화된 프로그래밍 방식  / 컬렉션을 쉽고 편리하게 다룰 수 있는 다양한 클래스를 제공
		
			ArrayList list1 = new ArrayList (10);		// Arraylist()  : 크기가 10인 ArrayList를 생성
			list1.add(new Integer(5));	// list1[0]
			list1.add(new Integer(4));	// list1[1]
			list1.add(new Integer(2));	// list1[2]
			list1.add(new Integer(0));	// list1[3]
			list1.add(new Integer(1));	// list1[4]
			list1.add(new Integer(3));	// list1[5]
			
			ArrayList list2 = new ArrayList(list1.subList(1, 4));	// x부터 y 사이에 저장된 객체를 반환한다.
			print(list1,list2);
			
			Collections.sort(list1); 	// list1과 list2를 정렬한다
			Collections.sort(list2);	// Collections.sort(list1)
			print(list1, list2);
			
			System.out.println("list1.containsAll(list2) :" + list1.containsAll(list2));
		
			list2.add("B");
			list2.add("C");
			list2.add(3, "A");	// list2[3] 에 "A"를 추가 
			print(list1, list2);
			
			list2.set(3, "AA");	// list2[3] 에 "AA"를 추가 
			print(list1, list2);
			
			// list1에서 list2와 겹치는 부분만 남기고 나머지는 삭제한다. (retianAll에 의해 list1에 변화가 있었으므로 true를 반환)
			System.out.println("list1.retainAll(list2)" + list1.retainAll(list2));
			print(list1, list2);
			
			
			System.out.println("list2.size = " + list2.size());
			// list2에서 list1에 포함된 객체들을 삭제한다.
			
			for (int i = list1.size() - 1 ; i >= 0; i--) {	// 변수 i를 증가시켜서 삭제하면 한 요소가 삭제될 때마다 빈 공간을 채우기 위해 나머지 요소들이 잘이ㅣ동을 하기 때문에 올바른 결과를 얻을 수 없으므로 변수의 객체를 감소시키면서 반복하였다.
					if(list1.contains(list2.get(i)));
					list2.remove(i);
			}
			
			print(list1, list2);
	}

	static void print(ArrayList list1 , ArrayList list2) {
			System.out.println("list1 : " + list1 );
			System.out.println("list2 : " + list2 );
			System.out.println();
		
	}

}




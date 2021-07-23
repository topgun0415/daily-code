import java.util.*;

public class Main {
	public static void main (String [] args) {
			
		Vector v = new Vector (5); 		// 용량(capactiy)이 5인 Vector를 생성한다.
		v.add("1");
		v.add("2");
		v.add("3");
//	v.add("babo");
		print(v);
		
		v.trimToSize();
		System.out.println(" === After trimTosize() ===");	 // Vector v 의 capacity 를 줄여줌
		print(v);
		
//  	★ 배열은 크기를 변경할 수 없기 때문에 새로운 배열을 생성해서 그 주소값을 변수 v에 할당한다. 즉 0x100 주소에 있던 v = { "1", "2", "3", null , null } 가 없어지고 0x200 주소에 새롭게 만들어지고 기존에 있던 0x100에 있던 건 GB에 의해서 메모리에서 자동 삭제
		
		v.ensureCapacity(6);
		System.out.println(" === After ensureCapacity() ===");	// Capacity를 3에서 6으로 늘려줌
		print(v);
		
		v.setSize(7);
		System.out.println(" === After setSize() ===");	// size를 3에서 7로 늘림 (신기한건 Capacity가 6에서 자동적으로 12로 늘어남)
		print(v);
		
		v.clear();
		System.out.println(" === After clear() ===");	// size를 아예 클리어해버림. Capacity는 여전히 12로 유지됨
		print(v);
		
		
	}

// 	ArrayList 나 Vector 같이 배열을 이용한 자료구조는 데이터를 읽어오고 저장하는데는 효율이 좋지만 기존의 배열로부터 새로 생성된 배열로 복사하기 때문에 상당히 효율이 떨어지기에 처음부터 인스턴스를 생성할때 저장할 데이터의 개수를 잘 고려하여 충분한 용량의 인스턴스를 생성해야한다
	
	static void print(Vector v) {
			System.out.println(" v : " + v );
			System.out.println("Size : " + v.size() );
			System.out.println("Capacity : " + v.capacity() );
		
	}

}


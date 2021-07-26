import java.util.*;

public class Main {
	public static void main (String [] args) {
			ArrayList original = new ArrayList(10);
			ArrayList copy1 = new ArrayList(10);
			ArrayList copy2 = new ArrayList(10);
			
			for (int i = 0; i < 10; i ++) {
				original.add(i+"");
			}
			
			Iterator it = original.iterator();
			
			while (it.hasNext()) {
				copy1.add(it.next());
			}
			
			System.out.println("= Original에서 copy 1로 복사(copy) =");
			System.out.println("original : " + original );
			System.out.println("copy1 : " + copy1);
			
			it = original.iterator (); 	// Iterator 는 재사용이 안되므로, 다시 얻어와야 한다.  tmp와 같은 존재로 ArrayList를 잠깐 담아두는 바구니 같은 역할
			
			while(it.hasNext()) {
				copy2.add(it.next());
				it.remove();
			}
			
			System.out.println("= Original에서 copy 2로 이동(move) =");		// 엄밀히 말해서는 이동이 아닌 복사 후 삭제
			System.out.println("original : " + original);
			System.out.println("copy1 : " + copy2);
		
		
	}
	
}

	

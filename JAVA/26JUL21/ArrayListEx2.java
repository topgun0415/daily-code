import java.util.*;

public class Main {
	public static void main (String [] args) {
			
		Collection main = new ArrayList ();
		
		main.add(0);
		main.add(1);
		main.add(2);
		main.add(3);
		main.add(4);
		
		System.out.println("삭제 전 : " + main);
		Iterator it = main.iterator();
		System.out.println(it); 	// Iterator 를 읽게되면 main의 주소값이 나오게 됨 
		it.next();
		System.out.println("it.next() : " + main);
		it.remove();
		System.out.println("it.remove() : " + main);
		it.next();
		it.remove();
		
		System.out.println("삭제 후 : " + main);

	}
	
}

	

import java.util.*;

public class Main {
	public static void main (String [] args) {
			ArrayList list = new ArrayList();
			list.add("1");
			list.add("2");
			list.add("3");
			list.add("4");
			list.add("5");
//		list = { 1, 2, ,3, 4, 5 } 
			
			ListIterator it = list.listIterator ();
			
			while (it.hasNext()) {  
				System.out.println(it.next());		// 순방향으로 진행하면서 읽어온다 ( 1, 2, 3, 4, 5 )
			}
			
			System.out.println();
			
			while(it.hasPrevious()) {
				System.out.println(it.previous());	// 역방향으로 진행하면서 읽어온다 ( 5, 4, 3, 2, 1 ) 
			}
		
	}
	
}

	
	

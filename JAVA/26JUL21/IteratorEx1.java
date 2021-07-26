import java.util.*;

public class Main {
	public static void main (String [] args) {
			Collection list = new ArrayList();
			list.add("1");
			list.add("2");
			list.add("3");
			list.add("4");
			list.add("5");
			
			Iterator it = list.iterator();
			
			while (it.hasNext()) {
				Object obj = it.next();
				System.out.println(obj);
			}
		
	}
	
}

	

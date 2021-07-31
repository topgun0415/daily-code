import java.util.*;

public class Main {
	public static void main (String [] args) {
		Set set = new TreeSet();
		
		for (int i = 0; set.size() < 6; i++) {
			int num = (int)(Math.random() * 46);
			set.add(num); 
    }		
		System.out.println(set);
	}

}





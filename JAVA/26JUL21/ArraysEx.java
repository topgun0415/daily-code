import java.lang.reflect.Array;
import java.util.*;

public class Main {
	public static void main (String [] args) {
			int [] arr = { 0 , 1, 2, 3, 4 };
			int [] copyarr = Arrays.copyOf(arr, arr.length);
			System.out.println(copyarr);
			
			int [] arr3 = new int [5];
			Arrays.fill(arr3, 2);
			
			int [ ] arr4 = { 0, 5, 7 , 2 , 6 };
			Arrays.sort(arr4);
			System.out.println(Arrays.toString(arr4));
			
			int [ ] arr5 = { 0, 1, 2, 3, 4 };
			int [ ] [ ] arr52d = {	{ 0, 1, 2 },
										   		{ 3, 4, 5 }
			
			};
			
			System.out.println(Arrays.deepToString(arr52d));
			
			List list = Arrays.asList("1", "2", "3");
			
			System.out.println(list);
			
			List list1 = new ArrayList(Arrays.asList(1,2,3));
			System.out.println(list1);
			list1 = Arrays.asList(4, 5, 6);
			System.out.println(list1);
			
	}
	
}

	
